import { Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Favorites = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface">
            <Heart className="h-7 w-7 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Your Favorites
          </h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Save creators you love. Sign in to sync your favorites across devices.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Favorites;
