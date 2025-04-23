// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER=MAIL_USER=rngnnnclk@gmail.com
      ,     // örnek: rngnnnclk@gmail.com
      pass: process.env.MAIL_PASS=Alex13579+,     // uygulama şifresi (gmail app password)
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,  // kendine gönderiyorsun
      subject: 'Yeni İletişim Formu Mesajı',
      text: message,
      html: `<p><strong>Gönderen:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    return res.status(500).json({ error: 'Email failed to send.' });
  }
}
