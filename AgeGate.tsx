import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AgeGateProps {
  onVerified: () => void;
}

const AgeGate = ({ onVerified }: AgeGateProps) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex min-h-svh flex-col items-center justify-center bg-background px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex w-full max-w-lg flex-col items-center gap-6 text-center"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          🔞 Age Verification & Disclaimer
        </h1>

        <div className="w-full rounded-outer border border-border bg-card p-5 text-left text-sm text-muted-foreground space-y-4">
          <p>By entering this site, you confirm that:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You are <span className="text-foreground font-medium">18 years of age or older</span> (or legal age in your jurisdiction)</li>
            <li>You understand this platform contains adult-oriented creator links</li>
            <li>Spice does not host or sell adult content</li>
          </ul>

          <p className="font-medium text-foreground">⚠️ Important Notice</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Spice is a directory platform only</li>
            <li>Spice is not affiliated with, endorsed by, or connected to OnlyFans, Pornhub, Streamate, Jerkmate, or any third-party platforms</li>
            <li>All content and services occur on external websites</li>
            <li>Creators are responsible for their own links</li>
          </ul>

          <p className="font-medium text-foreground">🛑 Liability Disclaimer</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You use this platform at your own risk</li>
            <li>Spice is not responsible for third-party content, links, or transactions</li>
          </ul>
        </div>

        <label className="flex items-start gap-3 cursor-pointer text-left">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-primary"
          />
          <span className="text-sm text-muted-foreground">
            I agree to the{" "}
            <Link to="/terms" className="text-primary underline underline-offset-2">Terms of Service</Link>
            {" & "}
            <Link to="/privacy" className="text-primary underline underline-offset-2">Privacy Policy</Link>
          </span>
        </label>

        <div className="flex gap-4">
          <button
            onClick={onVerified}
            disabled={!agreed}
            className="rounded-outer bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            I Agree & Enter
          </button>
          <button
            onClick={() => (window.location.href = "https://google.com")}
            className="rounded-outer border border-border bg-transparent px-8 py-3 font-semibold text-muted-foreground transition-all duration-200 hover:bg-surface"
          >
            Exit
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AgeGate;
