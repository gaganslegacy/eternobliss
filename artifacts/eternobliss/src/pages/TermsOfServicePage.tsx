import PolicyPage, { prose } from "../components/PolicyPage";

export default function TermsOfServicePage() {
  return (
    <PolicyPage eyebrow="LEGAL" heading="Terms of Service" lastUpdated="January 1, 2025">
      <h2 style={prose.h2}>Acceptance of Terms</h2>
      <p style={prose.p}>
        By accessing or using the EternoBliss website and purchasing our products, you agree to be bound by these Terms of Service.
      </p>

      <h2 style={prose.h2}>Products</h2>
      <p style={prose.p}>
        All products are subject to availability. We reserve the right to limit quantities or discontinue products at any time. Product images are for illustration — actual products may vary slightly.
      </p>

      <h2 style={prose.h2}>Pricing</h2>
      <p style={prose.p}>
        All prices are in Canadian dollars (CAD) and are subject to change without notice. We are not responsible for typographical errors in pricing.
      </p>

      <h2 style={prose.h2}>Subscriptions</h2>
      <p style={prose.p}>
        Subscription orders renew automatically at your selected frequency. You will receive a reminder email 3 days before each renewal. You may cancel at any time through your account or by contacting us.
      </p>

      <h2 style={prose.h2}>Intellectual Property</h2>
      <p style={prose.p}>
        All content on this website including text, images, logos, and design is the property of EternoBliss and may not be reproduced without written permission.
      </p>

      <h2 style={prose.h2}>Limitation of Liability</h2>
      <p style={prose.p}>
        EternoBliss is not liable for any indirect, incidental, or consequential damages arising from your use of our products or website.
      </p>

      <h2 style={prose.h2}>Health Disclaimer</h2>
      <p style={prose.p}>
        Our products are not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before beginning any supplement program.
      </p>

      <h2 style={prose.h2}>Governing Law</h2>
      <p style={prose.p}>
        These terms are governed by the laws of Ontario, Canada.
      </p>

      <h2 style={prose.h2}>Contact</h2>
      <p style={prose.p}>
        Questions about these terms:{" "}
        <a href="mailto:support@eternobliss.com" style={{ color: "#9B6B4D" }}>support@eternobliss.com</a>
      </p>
    </PolicyPage>
  );
}
