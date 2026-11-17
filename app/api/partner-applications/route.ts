
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type PartnerApplication = {
  organizationName?: string;
  contactPerson?: string;
  position?: string;
  email?: string;
  phone?: string;
  website?: string;
  organizationType?: string;
  partnershipArea?: string;
  proposal?: string;
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

    const data = (await request.json()) as PartnerApplication;

    const organizationName = data.organizationName?.trim() || "";
    const contactPerson = data.contactPerson?.trim() || "";
    const position = data.position?.trim() || "";
    const email = data.email?.trim() || "";
    const phone = data.phone?.trim() || "";
    const website = data.website?.trim() || "";
    const organizationType = data.organizationType?.trim() || "";
    const partnershipArea = data.partnershipArea?.trim() || "";
    const proposal = data.proposal?.trim() || "";

    const requiredFields = [
      organizationName,
      contactPerson,
      position,
      email,
      phone,
      organizationType,
      partnershipArea,
      proposal,
    ];

    if (requiredFields.some((field) => !field)) {
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
      organizationName.length > 150 ||
      contactPerson.length > 120 ||
      position.length > 120 ||
      email.length > 254 ||
      phone.length > 30 ||
      website.length > 300 ||
      proposal.length > 5000
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
          throw new Error("Invalid website protocol");
        }
      } catch {
        return NextResponse.json(
          { error: "Please provide a valid website URL." },
          { status: 400 }
        );
      }
    }

    const safe = {
      organizationName: escapeHtml(organizationName),
      contactPerson: escapeHtml(contactPerson),
      position: escapeHtml(position),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      website: escapeHtml(website || "Not provided"),
      organizationType: escapeHtml(organizationType),
      partnershipArea: escapeHtml(partnershipArea),
      proposal: escapeHtml(proposal).replace(/\n/g, "<br />"),
    };

    const { error } = await resend.emails.send({
      from: "TEDx Gombe State University <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Partnership Request: ${organizationName}`,
      text: `
NEW TEDx GOMBE STATE UNIVERSITY PARTNERSHIP REQUEST

Organization: ${organizationName}
Contact Person: ${contactPerson}
Position / Role: ${position}
Email: ${email}
Phone: ${phone}
Website: ${website || "Not provided"}

Organization Type: ${organizationType}
Partnership Area: ${partnershipArea}

PARTNERSHIP PROPOSAL:
${proposal}
      `,
      html: `
        <h2>New Partnership Request</h2>
        <p><strong>Organization:</strong> ${safe.organizationName}</p>
        <p><strong>Contact Person:</strong> ${safe.contactPerson}</p>
        <p><strong>Position / Role:</strong> ${safe.position}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Website:</strong> ${safe.website}</p>
        <p><strong>Organization Type:</strong> ${safe.organizationType}</p>
        <p><strong>Partnership Area:</strong> ${safe.partnershipArea}</p>
        <h3>Partnership Proposal</h3>
        <p>${safe.proposal}</p>
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
      message: "Partnership request submitted successfully.",
    });
  } catch (error) {
    console.error("Partner application error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
