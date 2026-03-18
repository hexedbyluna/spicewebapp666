import type { Creator } from "@/lib/types";

interface StatsBarProps {
  creators: Creator[];
}

const StatsBar = ({ creators }: StatsBarProps) => {
  const liveCount = creators.filter((c) => c.is_live).length;
  const totalCount = creators.length;

  return (
    <div className="flex items-center gap-6 text-xs">
      <span className="font-mono text-muted-foreground">
        <span className="text-foreground font-semibold">{totalCount}</span> Creators
      </span>
      <span className="font-mono text-muted-foreground">
        <span className="text-live font-semibold">{liveCount}</span> Online
      </span>
    </div>
  );
};

export default StatsBar;
