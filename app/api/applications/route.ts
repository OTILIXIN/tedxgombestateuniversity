
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const recipient = process.env.CONTACT_EMAIL;

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !recipient) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const data = await request.json();

    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "talkTitle",
      "idea",
      "reason",
      "biography",
      "category",
    ];

    for (const field of requiredFields) {
      if (
        typeof data[field] !== "string" ||
        !data[field].trim()
      ) {
        return NextResponse.json(
          { error: `Please provide a valid ${field}.` },
          { status: 400 }
        );
      }
    }

    if (
      data.fullName.length > 150 ||
      data.email.length > 254 ||
      data.idea.length > 10000 ||
      data.biography.length > 5000
    ) {
      return NextResponse.json(
        { error: "Some fields exceed the permitted length." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const fields = [
      ["Speaker category", data.category],
      ["Full name", data.fullName],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Occupation", data.occupation],
      ["Proposed talk title", data.talkTitle],
      ["Talk idea", data.idea],
      ["Why this speaker?", data.reason],
      ["Speaking experience", data.experience],
      ["LinkedIn", data.linkedin],
      ["Website", data.website],
      ["Previous talk / YouTube", data.previousTalk],
      ["Biography", data.biography],
    ];

    const emailText = fields
      .map(([label, value]) => `${label}:\n${value || "Not provided"}`)
      .join("\n\n");

    const { error } = await resend.emails.send({
      from: "TEDx Gombe State University <onboarding@resend.dev>",
      to: recipient,
      replyTo: data.email,
      subject: `New Speaker Application: ${data.fullName}`,
      text: emailText,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your application. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Application submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Speaker application error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
