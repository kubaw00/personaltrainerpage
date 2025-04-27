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
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.WP_EMAIL,
    pass: process.env.WP_PASSWORD,
  },
  tls: {
    minVersion: "TLSv1.2", // Wymagane przez WP.pl
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
      from: process.env.WP_EMAIL,
      to: process.env.WP_EMAIL,
      subject: "Nowa wiadomość z formularza kontaktowego",
      text: `
          Imię: ${content.name}
          Email: ${content.email}
          Telefon: ${content.phone}
          Wiadomość: ${content.message}
        `,
      html: `
          <h1>Nowa wiadomość</h1>
          ${Object.entries(content)
            .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
            .join("")}
        `,
    };

    console.log("Próba logowania jako:", process.env.WP_EMAIL);
    console.log(
      "Hasło aplikacji:",
      process.env.WP_PASSWORD?.slice(0, 2) + "..."
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
