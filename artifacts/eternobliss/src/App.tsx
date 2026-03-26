import { Switch, Route } from "wouter";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import ShippingPolicyPage from "./pages/ShippingPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

export default function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#FAFAF8" }}>
        <Header />
        <div className="flex-1">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/products/:handle" component={ProductPage} />
            <Route path="/collections/:handle" component={CollectionPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/track-order" component={TrackOrderPage} />
            <Route path="/privacy-policy" component={PrivacyPolicyPage} />
            <Route path="/refund-policy" component={RefundPolicyPage} />
            <Route path="/shipping-policy" component={ShippingPolicyPage} />
            <Route path="/terms-of-service" component={TermsOfServicePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
