import nodemailer from 'nodemailer';

export class RecordingService {
  static async sendMessage({
    name,
    email,
    tel,
    message,
  }: {
    name: string;
    email: string;
    tel: string;
    message: string;
  }) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true,
      debug: true,
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_ADMIN,
      subject: 'Новое сообщение с формы записи',
      text: `У вас новая заявка\nИмя: ${name}\nEmail: ${email}\nТелефон: ${tel}\nСообщение: ${message}`,
    };

    await transporter.sendMail(mailOptions);
  }
}
