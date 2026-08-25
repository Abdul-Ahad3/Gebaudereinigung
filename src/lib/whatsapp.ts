// TODO: replace with the client's real number, international format, digits only (no +, no spaces).
// Example: a German number +49 176 12345678 becomes "4917612345678".
const WHATSAPP_NUMBER = "4917620003395";

const DEFAULT_MESSAGE = "Hi, I'd like to inquire about your cleaning services.";

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;