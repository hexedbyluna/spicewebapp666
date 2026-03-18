-- Storage bucket for profile images
INSERT INTO storage.buckets (id, name, public) VALUES ('profile-images', 'profile-images', true);

-- Allow anyone to read profile images
CREATE POLICY "Public read access for profile images"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'profile-images');

-- Allow anyone to upload profile images (MVP - no auth yet)
CREATE POLICY "Anyone can upload profile images"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'profile-images');

-- Reports table
CREATE TABLE public.reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id uuid REFERENCES public.creators(id) ON DELETE CASCADE NOT NULL,
  reason text NOT NULL,
  details text DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a report
CREATE POLICY "Anyone can submit reports"
ON public.reports FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anyone to insert creators (MVP - no auth)
CREATE POLICY "Anyone can create a creator profile"
ON public.creators FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow creators to update their own profiles
CREATE POLICY "Anyone can update creator profiles"
ON public.creators FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);