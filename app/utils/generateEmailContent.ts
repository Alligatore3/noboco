export const generateEmailContent = ({
  companyName,
  country,
  email,
  context = "sme",
}: {
  companyName: string;
  country: string;
  email: string;
  context?: "sme" | "partner";
}) => {
  const title =
    context === "sme" ? "Join the SME Waitlist" : "Become a NOBOCO Partner";

  const subject = encodeURIComponent(`${title} - ${companyName}`);

  const subTitle =
    context === "sme"
      ? `I'd love to join the SME Waitlist!`
      : `I'm interested in becoming a NOBOCO Partner and bringing NOBOCO + Bridgebase to my country!`;

  const partialBody =
    context === "sme"
      ? "Looking forward to expanding globally with NOBOCO and Bridgebase!"
      : `I'd love to join your global network of consultants and help support SMEs locally.\n\n` +
        `Looking forward to hearing from you!`;

  const body = encodeURIComponent(
    `Hi there! 👋\n\n` +
      `${subTitle}!\n\n` +
      `Here's my info:\n` +
      `• Company: ${companyName}\n` +
      `• Email: ${email}\n` +
      `• Target Market: ${country}\n\n` +
      `${partialBody}\n\n` +
      `Thanks!`
  );

  const mailtoUrl = `mailto:p.fugazzaro.noboco@gmail.com?subject=${subject}&body=${body}`;
  window.open(mailtoUrl.toString(), "_blank");
};
