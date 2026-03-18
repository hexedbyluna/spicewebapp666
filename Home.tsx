import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import FilterChips from "@/components/FilterChips";
import CreatorCard from "@/components/CreatorCard";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import { useCreators } from "@/hooks/useCreators";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showLiveOnly, setShowLiveOnly] = useState(false);
  const { data: creators = [], isLoading } = useCreators();

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredCreators = useMemo(() => {
    return creators.filter((creator) => {
      const matchesSearch =
        !searchQuery ||
        creator.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (creator.tags || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => (creator.tags || []).includes(tag));

      const matchesLive = !showLiveOnly || creator.is_live;

      return matchesSearch && matchesTags && matchesLive;
    });
  }, [searchQuery, selectedTags, showLiveOnly, creators]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Discover
            </h2>
            <div className="flex items-center gap-4">
              <StatsBar creators={creators} />
              <Link
                to="/create"
                className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Create Profile</span>
              </Link>
            </div>
          </div>
          <FilterChips
            selected={selectedTags}
            onToggle={toggleTag}
            showLiveOnly={showLiveOnly}
            onToggleLive={() => setShowLiveOnly(!showLiveOnly)}
          />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-outer bg-card p-3">
                <div className="aspect-[3/4] rounded-inner bg-surface" />
                <div className="mt-3 h-4 w-2/3 rounded bg-surface" />
                <div className="mt-2 h-3 w-1/2 rounded bg-surface" />
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedTags.join(",")}-${showLiveOnly}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              {filteredCreators.map((creator, i) => (
                <CreatorCard key={creator.id} creator={creator} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {!isLoading && filteredCreators.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg text-muted-foreground">No creators found.</p>
            <p className="text-sm text-muted-foreground/60">
              Try adjusting your filters or search.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
