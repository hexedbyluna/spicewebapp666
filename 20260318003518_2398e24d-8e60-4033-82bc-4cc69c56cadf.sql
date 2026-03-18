
CREATE TABLE public.creators (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  bio TEXT DEFAULT '',
  profile_image TEXT DEFAULT '',
  tags TEXT[] DEFAULT '{}',
  onlyfans_url TEXT DEFAULT '',
  pornhub_url TEXT DEFAULT '',
  streamate_url TEXT DEFAULT '',
  jerkmate_url TEXT DEFAULT '',
  is_live BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Allow public read access (no auth required for browsing)
ALTER TABLE public.creators ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view creators"
  ON public.creators
  FOR SELECT
  TO anon, authenticated
  USING (true);
