interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export function ContactEmail({ name, email, phone, service, message }: ContactEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#123C2C", lineHeight: 1.6 }}>
      <h2 style={{ color: "#123C2C" }}>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      {phone && <p><strong>Phone:</strong> {phone}</p>}
      <p><strong>Service:</strong> {service}</p>
      <p><strong>Message:</strong></p>
      <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
    </div>
  );
}