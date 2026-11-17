
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type SponsorApplication = {
  companyName?: string;
  representative?: string;
  email?: string;
  phone?: string;
  website?: string;
  sponsorshipPackage?: string;
  supportType?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const data = (await request.json()) as SponsorApplication;

    const companyName = data.companyName?.trim() || "";
    const representative = data.representative?.trim() || "";
    const email = data.email?.trim() || "";
    const phone = data.phone?.trim() || "";
    const website = data.website?.trim() || "";
    const sponsorshipPackage = data.sponsorshipPackage?.trim() || "";
    const supportType = data.supportType?.trim() || "";
    const message = data.message?.trim() || "";

    if (
      !companyName ||
      !representative ||
      !email ||
      !phone ||
      !sponsorshipPackage ||
      !supportType ||
      !message
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (
      companyName.length > 150 ||
      representative.length > 120 ||
      email.length > 254 ||
      phone.length > 30 ||
      website.length > 300 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    if (website) {
      try {
        const parsedWebsite = new URL(website);

        if (!["http:", "https:"].includes(parsedWebsite.protocol)) {
          throw new Error("Invalid website protocol.");
        }
      } catch {
        return NextResponse.json(
          { error: "Please provide a valid website URL." },
          { status: 400 }
        );
      }
    }

    const safe = {
      companyName: escapeHtml(companyName),
      representative: escapeHtml(representative),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      website: escapeHtml(website || "Not provided"),
      sponsorshipPackage: escapeHtml(sponsorshipPackage),
      supportType: escapeHtml(supportType),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };

    const { error } = await resend.emails.send({
      from: "TEDx Gombe State University <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Sponsorship Request: ${companyName}`,
      text: `
NEW TEDx GOMBE STATE UNIVERSITY SPONSORSHIP REQUEST

Company: ${companyName}
Representative: ${representative}
Email: ${email}
Phone: ${phone}
Website: ${website || "Not provided"}

Sponsorship Package: ${sponsorshipPackage}
Type of Support: ${supportType}

MESSAGE:
${message}
      `,
      html: `
        <h2>New Sponsorship Request</h2>

        <p><strong>Company:</strong> ${safe.companyName}</p>
        <p><strong>Representative:</strong> ${safe.representative}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Website:</strong> ${safe.website}</p>

        <hr />

        <p><strong>Sponsorship Package:</strong> ${safe.sponsorshipPackage}</p>
        <p><strong>Type of Support:</strong> ${safe.supportType}</p>

        <h3>Message</h3>
        <p>${safe.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Your request could not be sent. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Sponsorship request submitted successfully.",
    });
  } catch (error) {
    console.error("Sponsor application error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
