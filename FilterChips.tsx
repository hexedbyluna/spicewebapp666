import { TAGS } from "@/lib/types";

interface FilterChipsProps {
  selected: string[];
  onToggle: (tag: string) => void;
  showLiveOnly: boolean;
  onToggleLive: () => void;
}

const FilterChips = ({ selected, onToggle, showLiveOnly, onToggleLive }: FilterChipsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
      <button
        onClick={onToggleLive}
        className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
          showLiveOnly
            ? "border-live bg-live/20 text-foreground"
            : "border-border bg-surface text-muted-foreground hover:bg-surface-hover"
        }`}
      >
        🔴 Live Now
      </button>
      {TAGS.map((tag) => (
        <button
          key={tag}
          onClick={() => onToggle(tag)}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
            selected.includes(tag)
              ? "border-primary bg-primary/20 text-foreground"
              : "border-border bg-surface text-muted-foreground hover:bg-surface-hover"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
