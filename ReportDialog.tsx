import { useState } from "react";
import { Flag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const REASONS = [
  "Inappropriate content",
  "Fake profile",
  "Misleading links",
  "Spam",
  "Other",
];

interface ReportDialogProps {
  creatorId: string;
}

const ReportDialog = ({ creatorId }: ReportDialogProps) => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!reason) return;
    setLoading(true);
    try {
      const { error } = await supabase.from("reports").insert({
        creator_id: creatorId,
        reason,
        details: details.trim(),
      });
      if (error) throw error;
      toast({ title: "Report submitted", description: "Thank you for keeping Spice safe." });
      setOpen(false);
      setReason("");
      setDetails("");
    } catch {
      toast({ title: "Error submitting report", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <Flag className="h-4 w-4" />
          Report
        </button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-foreground">Report User</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Help us keep Spice safe. Select a reason below.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {REASONS.map((r) => (
              <button
                key={r}
                onClick={() => setReason(r)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                  reason === r
                    ? "border-primary bg-primary/20 text-foreground"
                    : "border-border bg-surface text-muted-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Additional details (optional)..."
            rows={3}
            className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
          />
          <button
            onClick={handleSubmit}
            disabled={!reason || loading}
            className="w-full rounded-lg bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground disabled:opacity-40"
          >
            {loading ? "Submitting..." : "Submit Report"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportDialog;
