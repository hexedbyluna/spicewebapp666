import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Privacy Policy</h1>
      <p className="mb-8 text-sm text-muted-foreground">Effective Date: March 18, 2026</p>

      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">1. Data We Collect</h2>
          <p>We collect the following information when you use Spice:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Email address (for account creation)</li>
            <li>Profile information (username, bio, profile image)</li>
            <li>Usage data (pages visited, searches)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">2. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and maintain the platform</li>
            <li>To display creator profiles in search results</li>
            <li>To improve user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">3. Data Sharing</h2>
          <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">4. External Links</h2>
          <p>Spice contains links to external websites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">5. Data Security</h2>
          <p>We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">6. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting us at support@spice.app.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy at any time. Continued use of Spice constitutes acceptance of changes.</p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default Privacy;
