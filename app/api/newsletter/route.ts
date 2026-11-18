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
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "TEDx Gombe State University <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: "New Website Newsletter Subscription",
      text: `A visitor subscribed to TEDxGombeStateUniversity updates:\n\nEmail: ${email}`,
    });

    if (error) {
      console.error("Newsletter subscription error:", error);
      return NextResponse.json(
        { error: "Unable to complete your subscription. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "You're subscribed. We’ll keep you updated!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter request error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
