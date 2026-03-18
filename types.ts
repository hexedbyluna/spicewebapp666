export interface Creator {
  id: string;
  username: string;
  bio: string | null;
  profile_image: string | null;
  tags: string[] | null;
  is_live: boolean;
  onlyfans_url: string | null;
  pornhub_url: string | null;
  streamate_url: string | null;
  jerkmate_url: string | null;
  created_at: string;
  updated_at: string;
}

export const TAGS = [
  "cosplay", "goth", "tattooed", "blonde", "redhead", "fitness",
  "alternative", "kawaii", "latina", "curvy", "petite", "brunette",
  "BDSM", "JOI", "lingerie", "gaming",
];

export function getCreatorPlatforms(creator: Creator) {
  const platforms: { name: string; url: string }[] = [];
  if (creator.onlyfans_url) platforms.push({ name: "OnlyFans", url: creator.onlyfans_url });
  if (creator.pornhub_url) platforms.push({ name: "Pornhub", url: creator.pornhub_url });
  if (creator.streamate_url) platforms.push({ name: "Streamate", url: creator.streamate_url });
  if (creator.jerkmate_url) platforms.push({ name: "Jerkmate", url: creator.jerkmate_url });
  return platforms;
}
