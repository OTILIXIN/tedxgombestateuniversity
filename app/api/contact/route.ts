import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const recipient = process.env.CONTACT_EMAIL;

    if (!process.env.RESEND_API_KEY || !recipient) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const data = await request.json();

    const requiredFields = ["name", "email", "subject", "message"];

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
      data.name.length > 120 ||
      data.email.length > 254 ||
      data.phone?.length > 30 ||
      data.subject.length > 200 ||
      data.message.length > 5000
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

    const emailText = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Subject: ${data.subject}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: "TEDx Gombe State University <onboarding@resend.dev>",
      to: recipient,
      replyTo: data.email,
      subject: `Website Contact: ${data.subject}`,
      text: emailText,
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json(
        { error: "Unable to send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
