import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LiveBadge from "./LiveBadge";
import type { Creator } from "@/lib/types";

interface CreatorCardProps {
  creator: Creator;
  index: number;
}

const CreatorCard = ({ creator, index }: CreatorCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => navigate(`/creator/${creator.id}`)}
      className="group relative cursor-pointer rounded-outer bg-card p-3 card-shadow transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover will-change-transform"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-inner outline outline-1 outline-foreground/5 -outline-offset-1">
        {creator.profile_image ? (
          <img
            src={creator.profile_image}
            alt={creator.username}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface text-2xl font-bold text-muted-foreground">
            {creator.username[0]?.toUpperCase()}
          </div>
        )}
        {creator.is_live && (
          <div className="absolute left-3 top-3">
            <LiveBadge />
          </div>
        )}
      </div>
      <div className="mt-3 px-1">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          @{creator.username}
        </h3>
        <div className="mt-2 flex gap-1.5 overflow-x-auto no-scrollbar">
          {(creator.tags || []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="shrink-0 rounded-full border border-foreground/5 bg-foreground/5 px-2 py-0.5 text-[11px] text-foreground/60"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CreatorCard;
