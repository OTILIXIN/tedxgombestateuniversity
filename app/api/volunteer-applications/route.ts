import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedFiles: Record<string, string> = {
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
};

export async function POST(request: Request) {
  try {
    const recipient = process.env.CONTACT_EMAIL;

    if (!process.env.RESEND_API_KEY || !recipient) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    const getText = (key: string) =>
      String(formData.get(key) ?? "").trim();

    const fullName = getText("fullName");
    const email = getText("email");
    const phone = getText("phone");
    const department = getText("department");
    const reason = getText("reason");

    if (!fullName || !email || !phone || !department || !reason) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (
      fullName.length > 150 ||
      email.length > 254 ||
      reason.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the permitted length." },
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

    const cv = formData.get("cv");
    const attachments: {
      filename: string;
      content: string;
    }[] = [];

    if (cv instanceof File && cv.size > 0) {
      if (cv.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Your CV must not exceed 5 MB." },
          { status: 400 }
        );
      }

      const extension = allowedFiles[cv.type];

      if (!extension || !cv.name.toLowerCase().endsWith(extension)) {
        return NextResponse.json(
          { error: "CV must be a PDF, DOC or DOCX file." },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await cv.arrayBuffer());

      attachments.push({
        filename: cv.name.replace(/[^\w.-]/g, "_"),
        content: buffer.toString("base64"),
      });
    }

    const fields = [
      ["Full Name", fullName],
      ["Email", email],
      ["Phone", phone],
      ["University / Organization", getText("organization")],
      ["Faculty / School", getText("faculty")],
      ["Academic Department", getText("academicDepartment")],
      ["Level", getText("level")],
      ["Matric Number", getText("matricNumber")],
      ["Previous Volunteer Experience", getText("experience")],
      ["Skills", getText("skills")],
      ["Portfolio / Website", getText("portfolio")],
      ["Volunteer Department", department],
      ["Reason for Volunteering", reason],
      ["CV", attachments.length ? "Attached" : "Not provided"],
    ];

    const emailText = fields
      .map(([label, value]) => `${label}:\n${value || "Not provided"}`)
      .join("\n\n");

    const { error } = await resend.emails.send({
      from: "TEDx Gombe State University <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `New Volunteer Application: ${fullName}`,
      text: emailText,
      attachments,
    });

    if (error) {
      console.error("Volunteer email error:", error);

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
    console.error("Volunteer application error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}