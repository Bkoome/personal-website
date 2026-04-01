type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const { name, email, message, company } = (req.body ?? {}) as ContactBody;

  // Basic bot trap: legitimate users should leave this blank.
  if (company) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !email || !message) {
    res.status(400).json({ ok: false, error: "Missing required fields" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "koomebrian285@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    res.status(500).json({ ok: false, error: "Server email is not configured" });
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      res.status(502).json({ ok: false, error: `Email provider error: ${errorText}` });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(502).json({ ok: false, error: "Failed to send message" });
  }
}
