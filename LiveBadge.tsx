const LiveBadge = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1.5 rounded-sm bg-live px-2 py-0.5 ${className}`}>
      <div className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
      </div>
      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
        Live
      </span>
    </div>
  );
};

export default LiveBadge;
