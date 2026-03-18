import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-6">
    <div className="container mx-auto flex flex-col items-center gap-2 px-4 text-xs text-muted-foreground sm:flex-row sm:justify-between">
      <span>© {new Date().getFullYear()} Spice. All rights reserved.</span>
      <div className="flex gap-4">
        <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
        <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
