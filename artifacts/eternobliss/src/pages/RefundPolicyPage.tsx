import PolicyPage, { prose } from "../components/PolicyPage";

export default function RefundPolicyPage() {
  return (
    <PolicyPage eyebrow="LEGAL" heading="Refund Policy" lastUpdated="January 1, 2025">
      <h2 style={prose.h2}>30-Day Money-Back Guarantee</h2>
      <p style={prose.p}>
        We stand behind every product we sell. If you are not completely satisfied for any reason, contact us within 30 days of delivery for a full refund.
      </p>
      <p style={prose.p}>
        This applies to: opened products, used products, and subscription orders within the first 30 days.
      </p>

      <h2 style={prose.h2}>How to Return</h2>
      <ol style={{ ...prose.ul, listStyleType: "decimal" }}>
        <li style={{ marginBottom: "8px" }}>Email support@eternobliss.com with your order number</li>
        <li style={{ marginBottom: "8px" }}>We'll send a prepaid return label within 24 hours</li>
        <li style={{ marginBottom: "8px" }}>Drop off at any Canada Post location</li>
        <li style={{ marginBottom: "8px" }}>Refund processed within 3–5 business days of receiving your return</li>
      </ol>

      <h2 style={prose.h2}>Damaged or Incorrect Items</h2>
      <p style={prose.p}>
        If you receive a damaged or incorrect item, email us within 48 hours with your order number and photos. We will ship a replacement immediately at no cost to you.
      </p>

      <h2 style={prose.h2}>Subscription Refunds</h2>
      <p style={prose.p}>
        For subscriptions, you may cancel at any time. For refunds on subscription charges contact us within 30 days of the charge.
      </p>

      <h2 style={prose.h2}>Non-Returnable Items</h2>
      <p style={prose.p}>
        Final sale items marked clearly at purchase are not eligible for return.
      </p>

      <h2 style={prose.h2}>Refund Method</h2>
      <p style={prose.p}>
        Refunds are issued to the original payment method. Credit card refunds take 3–5 business days to appear.
      </p>
    </PolicyPage>
  );
}
