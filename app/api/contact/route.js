import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, // .env file me set karo
      pass: process.env.MAIL_PASS, // Gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.log(error); // Error dekhne ke liye
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}