import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL || "petsuetv@gmail.com"],
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message from your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
