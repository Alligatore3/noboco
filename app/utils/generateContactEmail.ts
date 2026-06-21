export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  country: string;
  inquiry: string;
  inquiryLabel: string;
  message: string;
}

const RECIPIENT = "p.fugazzaro.noboco@gmail.com";

/**
 * Compose a prefilled mailto link from the contact form fields and open it.
 */
export const generateContactEmail = ({
  name,
  company,
  email,
  phone,
  country,
  inquiryLabel,
  message,
}: ContactFormData) => {
  const subject = encodeURIComponent(`NOBOCO Inquiry (${inquiryLabel}) - ${company}`);

  const lines = [
    "Hi NOBOCO team! 👋",
    "",
    `Inquiry type: ${inquiryLabel}`,
    "",
    "Here's my info:",
    `• Name: ${name}`,
    `• Company: ${company}`,
    `• Email: ${email}`,
    ...(phone ? [`• Phone: ${phone}`] : []),
    `• Country / Primary Market: ${country}`,
    "",
    "Message:",
    message,
    "",
    "Thanks!",
  ];

  const body = encodeURIComponent(lines.join("\n"));
  const mailtoUrl = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
  window.open(mailtoUrl, "_blank");
};
