import PolicyPage, { prose } from "../components/PolicyPage";

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage eyebrow="LEGAL" heading="Privacy Policy" lastUpdated="January 1, 2025">
      <h2 style={prose.h2}>Information We Collect</h2>
      <p style={prose.p}>
        We collect information you provide directly to us when you make a purchase, create an account, subscribe to our newsletter, or contact customer support.
      </p>
      <p style={prose.p}>
        This includes: name, email address, shipping address, billing information, phone number, and any communications you send us.
      </p>
      <p style={prose.p}>
        We automatically collect certain information when you visit our website including IP address, browser type, referring pages, and pages visited.
      </p>

      <h2 style={prose.h2}>How We Use Your Information</h2>
      <p style={prose.p}>We use the information we collect to:</p>
      <ul style={prose.ul}>
        <li style={{ marginBottom: "8px" }}>Process and fulfill your orders</li>
        <li style={{ marginBottom: "8px" }}>Send order confirmations and updates</li>
        <li style={{ marginBottom: "8px" }}>Provide customer support</li>
        <li style={{ marginBottom: "8px" }}>Send marketing communications (with your consent)</li>
        <li style={{ marginBottom: "8px" }}>Improve our products and services</li>
        <li style={{ marginBottom: "8px" }}>Comply with legal obligations</li>
      </ul>

      <h2 style={prose.h2}>Sharing Your Information</h2>
      <p style={prose.p}>We do not sell your personal information. We share information only with:</p>
      <ul style={prose.ul}>
        <li style={{ marginBottom: "8px" }}>Shopify (payment and order processing)</li>
        <li style={{ marginBottom: "8px" }}>Shipping carriers (delivery fulfillment)</li>
        <li style={{ marginBottom: "8px" }}>Email service providers (marketing)</li>
        <li style={{ marginBottom: "8px" }}>Analytics providers (website improvement)</li>
      </ul>
      <p style={prose.p}>
        All third-party providers are required to maintain the confidentiality of your information.
      </p>

      <h2 style={prose.h2}>Cookies</h2>
      <p style={prose.p}>
        We use cookies to improve your browsing experience, remember your preferences, and analyze website traffic. You can control cookies through your browser settings.
      </p>

      <h2 style={prose.h2}>Your Rights</h2>
      <p style={prose.p}>You have the right to:</p>
      <ul style={prose.ul}>
        <li style={{ marginBottom: "8px" }}>Access the personal data we hold</li>
        <li style={{ marginBottom: "8px" }}>Correct inaccurate information</li>
        <li style={{ marginBottom: "8px" }}>Request deletion of your data</li>
        <li style={{ marginBottom: "8px" }}>Opt out of marketing communications</li>
        <li style={{ marginBottom: "8px" }}>Data portability</li>
      </ul>
      <p style={prose.p}>
        To exercise these rights email <a href="mailto:support@eternobliss.com" style={{ color: "#9B6B4D" }}>support@eternobliss.com</a>.
      </p>

      <h2 style={prose.h2}>Data Security</h2>
      <p style={prose.p}>
        We implement industry-standard security measures to protect your personal information. All payment data is processed securely through Shopify and we never store credit card details.
      </p>

      <h2 style={prose.h2}>Contact Us</h2>
      <p style={prose.p}>
        For privacy-related questions contact: EternoBliss —{" "}
        <a href="mailto:support@eternobliss.com" style={{ color: "#9B6B4D" }}>support@eternobliss.com</a>
      </p>
    </PolicyPage>
  );
}
