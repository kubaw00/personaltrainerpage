"use server";

import { createTransport, type SendMailOptions } from "nodemailer";

type FormState = {
  message: string;
  success: boolean;
};

type EmailContent = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const SMTP_CONFIG = {
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // hasło aplikacji Gmail
  },
} as const;

export async function sendEmail(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  try {
    const phone = formData.get("phone") as string;
    if (!/^[0-9+-\s]{9,}$/.test(phone)) {
      return { message: "Nieprawidłowy numer telefonu", success: false };
    }
    const email = formData.get("email") as string;

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      return { message: "Nieprawidłowy adres email", success: false };
    }

    const content: EmailContent = {
      name: formData.get("name") as string,
      email,
      phone,
      message: formData.get("message") as string,
    };

    // Walidacja
    if (!content.name || !content.email || !content.phone || !content.message) {
      return { message: "Wszystkie pola są wymagane", success: false };
    }

    const transporter = createTransport(SMTP_CONFIG);

    const mailOptions: SendMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject:
        "Nowa wiadomość z formularza kontaktowego ze strony lukaszmoczkodan.pl",
      text: `Imię: ${content.name}\nEmail: ${content.email}\nTelefon: ${content.phone}\nWiadomość: ${content.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #fafafa; padding: 32px 16px; border-radius: 12px; border: 1px solid #eee; max-width: 480px; margin: 20px;">
          <h1 style="color: #006400; margin-bottom: 24px;">Nowa wiadomość</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #222; width: 120px;">Imię:</td>
              <td style="padding: 8px 0; color: #333;">${content.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #222;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${content.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #222;">Telefon:</td>
              <td style="padding: 8px 0; color: #333;">${content.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #222; vertical-align: top;">Wiadomość:</td>
              <td style="padding: 8px 0; color: #333; white-space: pre-line;">${content.message}</td>
            </tr>
          </table>
        </div>
      `,
    };

    console.log("Próba logowania jako:", process.env.GMAIL_USER);
    console.log(
      "Hasło aplikacji:",
      process.env.GMAIL_APP_PASSWORD?.slice(0, 2) + "..."
    );

    transporter.verify((error) => {
      if (error) console.error("Błąd weryfikacji:", error);
      else console.log("Połączenie SMTP poprawne!");
    });

    await transporter.sendMail(mailOptions);

    return {
      message: "Wiadomość została wysłana pomyślnie!",
      success: true,
    };
  } catch (error) {
    console.error("Błąd wysyłania:", error);
    return {
      message: "Błąd podczas wysyłania wiadomości",
      success: false,
    };
  }
}
