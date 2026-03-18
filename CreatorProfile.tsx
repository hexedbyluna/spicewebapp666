import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Heart } from "lucide-react";
import LiveBadge from "@/components/LiveBadge";
import Footer from "@/components/Footer";
import ReportDialog from "@/components/ReportDialog";
import { useCreator } from "@/hooks/useCreators";
import { getCreatorPlatforms } from "@/lib/types";
import { useState } from "react";

const CreatorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: creator, isLoading } = useCreator(id);
  const [isFavorited, setIsFavorited] = useState(false);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Creator not found.</p>
      </div>
    );
  }

  const platforms = getCreatorPlatforms(creator);

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-64 overflow-hidden sm:h-80">
        {creator.profile_image ? (
          <img
            src={creator.profile_image}
            alt={creator.username}
            className="h-full w-full object-cover object-top blur-2xl brightness-50 scale-110"
          />
        ) : (
          <div className="h-full w-full bg-surface" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
        <div className="absolute left-4 top-4 z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-lg bg-background/60 px-3 py-2 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="-mt-20 relative z-10"
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end">
            <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-background card-shadow">
              {creator.profile_image ? (
                <img
                  src={creator.profile_image}
                  alt={creator.username}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-surface text-3xl font-bold text-muted-foreground">
                  {creator.username[0]?.toUpperCase()}
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                  @{creator.username}
                </h1>
                {creator.is_live && <LiveBadge />}
              </div>
              {creator.bio && (
                <p className="mt-2 max-w-lg text-muted-foreground">{creator.bio}</p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                  isFavorited
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? "fill-primary" : ""}`} />
                {isFavorited ? "Saved" : "Save"}
              </button>
              <ReportDialog creatorId={creator.id} />
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {(creator.tags || []).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-foreground/5 bg-foreground/5 px-3 py-1 text-xs text-foreground/70"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Platform Links */}
          {platforms.length > 0 && (
            <div className="mt-8">
              <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">
                Platforms
              </h2>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-outer border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-hover hover:card-shadow"
                  >
                    Visit {platform.name}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Live CTA */}
          {creator.is_live && platforms.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-outer border border-live/30 bg-live/5 p-6 glow-live"
            >
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <LiveBadge />
                  <span className="text-sm font-medium text-foreground">
                    {creator.username} is live right now
                  </span>
                </div>
                <a
                  href={platforms[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-live px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  Watch Now →
                </a>
              </div>
            </motion.div>
          )}

          <div className="pb-12" />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatorProfile;
