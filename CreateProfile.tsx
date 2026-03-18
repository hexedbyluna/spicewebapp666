import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { TAGS } from "@/lib/types";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [onlyfansUrl, setOnlyfansUrl] = useState("");
  const [pornhubUrl, setPornhubUrl] = useState("");
  const [streamateUrl, setStreamateUrl] = useState("");
  const [jerkmateUrl, setJerkmateUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast({ title: "Username is required", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      let profileImageUrl = "";

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from("profile-images")
          .upload(fileName, imageFile);
        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("profile-images")
          .getPublicUrl(fileName);
        profileImageUrl = urlData.publicUrl;
      }

      const { data, error } = await supabase
        .from("creators")
        .insert({
          username: username.trim(),
          bio: bio.trim(),
          profile_image: profileImageUrl,
          tags: selectedTags,
          onlyfans_url: onlyfansUrl.trim() || null,
          pornhub_url: pornhubUrl.trim() || null,
          streamate_url: streamateUrl.trim() || null,
          jerkmate_url: jerkmateUrl.trim() || null,
        })
        .select()
        .single();

      if (error) throw error;

      toast({ title: "Profile created!", description: "Your profile is now live." });
      navigate(`/creator/${data.id}`);
    } catch (err: any) {
      toast({ title: "Error creating profile", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center gap-4 px-4 py-3">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <h1 className="text-lg font-semibold text-foreground">Create Profile</h1>
        </div>
      </nav>

      <main className="container mx-auto max-w-xl px-4 py-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-surface">
              {imagePreview ? (
                <>
                  <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => { setImageFile(null); setImagePreview(null); }}
                    className="absolute right-0 top-0 rounded-full bg-destructive p-1 text-destructive-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </>
              ) : (
                <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <Upload className="h-6 w-6" />
                  <span className="mt-1 text-xs">Upload</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              )}
            </div>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Username *</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="YourUsername"
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell people about yourself..."
              rows={3}
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Tags</label>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? "border-primary bg-primary/20 text-foreground"
                      : "border-border bg-surface text-muted-foreground hover:bg-surface-hover"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">External Links</label>
            {[
              { label: "OnlyFans URL", value: onlyfansUrl, set: setOnlyfansUrl, placeholder: "https://onlyfans.com/..." },
              { label: "Pornhub URL", value: pornhubUrl, set: setPornhubUrl, placeholder: "https://pornhub.com/..." },
              { label: "Streamate URL", value: streamateUrl, set: setStreamateUrl, placeholder: "https://streamate.com/..." },
              { label: "Jerkmate URL", value: jerkmateUrl, set: setJerkmateUrl, placeholder: "https://jerkmate.com/..." },
            ].map((link) => (
              <div key={link.label} className="space-y-1">
                <span className="text-xs text-muted-foreground">{link.label}</span>
                <input
                  type="url"
                  value={link.value}
                  onChange={(e) => link.set(e.target.value)}
                  placeholder={link.placeholder}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            ))}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !username.trim()}
            className="w-full rounded-outer bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Creating..." : "Create Profile"}
          </button>
        </motion.form>
      </main>
      <Footer />
    </div>
  );
};

export default CreateProfile;
