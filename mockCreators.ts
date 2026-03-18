import creator1 from "@/assets/creator1.jpg";
import creator2 from "@/assets/creator2.jpg";
import creator3 from "@/assets/creator3.jpg";
import creator4 from "@/assets/creator4.jpg";
import creator5 from "@/assets/creator5.jpg";
import creator6 from "@/assets/creator6.jpg";
import creator7 from "@/assets/creator7.jpg";
import creator8 from "@/assets/creator8.jpg";

export interface Creator {
  id: string;
  username: string;
  bio: string;
  image: string;
  tags: string[];
  isLive: boolean;
  platforms: { name: string; url: string }[];
  lastLive?: string;
}

export const TAGS = [
  "cosplay", "goth", "tattooed", "blonde", "redhead", "fitness",
  "alternative", "kawaii", "latina", "curvy", "petite", "brunette",
  "BDSM", "JOI", "lingerie", "gaming",
];

export const mockCreators: Creator[] = [
  {
    id: "1",
    username: "LunaSparkle",
    bio: "Cosplay queen & anime lover. Bringing your favorite characters to life ✨",
    image: creator1,
    tags: ["cosplay", "kawaii", "gaming"],
    isLive: true,
    platforms: [
      { name: "OnlyFans", url: "#" },
      { name: "Fansly", url: "#" },
    ],
    lastLive: "Now",
  },
  {
    id: "2",
    username: "RavenInk",
    bio: "Dark aesthetic & body art. Living on the edge of beautiful 🖤",
    image: creator2,
    tags: ["goth", "tattooed", "alternative", "BDSM"],
    isLive: false,
    platforms: [
      { name: "OnlyFans", url: "#" },
      { name: "Streamate", url: "#" },
    ],
    lastLive: "14m ago",
  },
  {
    id: "3",
    username: "GoldenEve",
    bio: "Elegance meets edge. Fashion, glamour, and everything in between.",
    image: creator3,
    tags: ["blonde", "lingerie", "petite"],
    isLive: true,
    platforms: [
      { name: "OnlyFans", url: "#" },
      { name: "Pornhub", url: "#" },
    ],
    lastLive: "Now",
  },
  {
    id: "4",
    username: "FlameFox",
    bio: "Fitness model & fiery redhead. Sweat is just glitter for strong people 💪",
    image: creator4,
    tags: ["redhead", "fitness", "JOI"],
    isLive: false,
    platforms: [
      { name: "OnlyFans", url: "#" },
      { name: "Fansly", url: "#" },
    ],
    lastLive: "2h ago",
  },
  {
    id: "5",
    username: "PixieDark",
    bio: "Short hair, don't care. Alt-girl vibes with a sharp edge.",
    image: creator5,
    tags: ["alternative", "tattooed", "brunette"],
    isLive: false,
    platforms: [
      { name: "OnlyFans", url: "#" },
    ],
    lastLive: "1d ago",
  },
  {
    id: "6",
    username: "ValentinaRose",
    bio: "Curves, confidence, and that Latin heat 🌹",
    image: creator6,
    tags: ["latina", "curvy", "lingerie"],
    isLive: true,
    platforms: [
      { name: "OnlyFans", url: "#" },
      { name: "Streamate", url: "#" },
      { name: "Jerkmate", url: "#" },
    ],
    lastLive: "Now",
  },
  {
    id: "7",
    username: "NeonNeko",
    bio: "Kawaii vibes & colorful chaos. Your anime dream girl IRL 🎀",
    image: creator7,
    tags: ["kawaii", "cosplay", "gaming", "petite"],
    isLive: false,
    platforms: [
      { name: "Fansly", url: "#" },
    ],
    lastLive: "45m ago",
  },
  {
    id: "8",
    username: "TitanMax",
    bio: "Fitness & physique. The strong, silent type — until the camera's on.",
    image: creator8,
    tags: ["fitness", "tattooed"],
    isLive: false,
    platforms: [
      { name: "OnlyFans", url: "#" },
      { name: "Pornhub", url: "#" },
    ],
    lastLive: "3h ago",
  },
];
