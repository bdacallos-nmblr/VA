import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phoneNumber: number;
  message: string;
};

export const POST = async (request: NextRequest) => {
  const {
    firstName,
    lastName,
    email,
    companyName,
    phoneNumber,
    message,
  }: RequestBody = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // sending to yourself
      subject: "VA Inquiry",
      replyTo: email,
      html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>New VA Inquiry</h2>
                <hr />

                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${companyName}</p>
                <p><strong>Phone:</strong> ${phoneNumber}</p>

                <h3>Message</h3>
                <p>${message}</p>
            </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
};
