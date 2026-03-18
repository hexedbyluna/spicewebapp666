import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Terms of Service</h1>
      <p className="mb-8 text-sm text-muted-foreground">Effective Date: March 18, 2026</p>

      <div className="prose-custom space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">1. Eligibility</h2>
          <p>You must be 18 years or older (or the legal age in your jurisdiction) to use this platform. By using Spice, you confirm that you meet this requirement.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">2. Platform Nature</h2>
          <p>Spice is a directory and profile platform that allows users to create profiles and share links to third-party websites.</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Spice does not host, produce, or sell adult content</li>
            <li>Spice does not process payments or transactions</li>
            <li>All content and services exist on external platforms</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">3. No Affiliation</h2>
          <p>Spice is not affiliated with, endorsed by, or connected to any third-party platforms including but not limited to OnlyFans, Pornhub, Streamate, and Jerkmate. All trademarks belong to their respective owners.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">4. User Responsibility</h2>
          <p>Creators are solely responsible for the links they share, the accuracy of their profiles, and ensuring their content complies with laws. Users agree that they access external links at their own risk.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">5. Prohibited Content</h2>
          <p>Users may NOT upload illegal content, impersonate others, share misleading or fraudulent links, or post content involving minors. Spice reserves the right to remove content or accounts at any time.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>Spice is not responsible for content on third-party websites, transactions between users and creators, or damages resulting from use of the platform. Use of Spice is at your own risk.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">7. Account Termination</h2>
          <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">8. Changes to Terms</h2>
          <p>We may update these Terms at any time. Continued use of the platform means you accept those changes.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">9. Contact</h2>
          <p>For questions, contact: support@spice.app</p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default Terms;
