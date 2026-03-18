import { Search, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const Navbar = ({ searchQuery, onSearchChange }: NavbarProps) => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center gap-4 px-4 py-3">
        <Link to="/" className="shrink-0">
          <h1 className="text-xl font-bold tracking-tight text-primary">
            SPICE
          </h1>
        </Link>

        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search creators..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/favorites"
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              location.pathname === "/favorites"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Favorites</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
