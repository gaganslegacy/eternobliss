import PolicyPage, { prose } from "../components/PolicyPage";

export default function ShippingPolicyPage() {
  return (
    <PolicyPage eyebrow="LEGAL" heading="Shipping Policy" lastUpdated="January 1, 2025">
      <h2 style={prose.h2}>Free Shipping</h2>
      <p style={prose.p}>
        Free standard shipping on all orders over $100 CAD. Orders under $100 are $8.99 flat rate.
      </p>

      <h2 style={prose.h2}>Delivery Times</h2>
      <p style={prose.p}>
        Standard: 1–3 business days (Canada). Orders placed before 2pm EST Monday–Friday ship same day.
      </p>

      <h2 style={prose.h2}>Order Processing</h2>
      <p style={prose.p}>
        Orders are processed Monday–Friday, 9am–5pm EST. Orders placed on weekends or holidays are processed the next business day.
      </p>

      <h2 style={prose.h2}>Tracking</h2>
      <p style={prose.p}>
        Every order includes tracking. You'll receive a tracking number by email once your order ships.
      </p>

      <h2 style={prose.h2}>Currently Shipping To</h2>
      <p style={prose.p}>
        We currently ship within Canada only. US and international shipping coming soon — sign up to our newsletter for updates.
      </p>

      <h2 style={prose.h2}>Address Changes</h2>
      <p style={prose.p}>
        Address changes can be made within 1 hour of ordering by emailing{" "}
        <a href="mailto:support@eternobliss.com" style={{ color: "#9B6B4D" }}>support@eternobliss.com</a>. After that orders enter fulfillment and cannot be redirected.
      </p>

      <h2 style={prose.h2}>Lost or Delayed Packages</h2>
      <p style={prose.p}>
        If your package hasn't arrived within 7 business days of your tracking showing it shipped, contact us and we'll investigate and reship if needed.
      </p>
    </PolicyPage>
  );
}
