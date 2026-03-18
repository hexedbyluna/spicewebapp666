import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Creator } from "@/lib/types";

export function useCreators() {
  return useQuery<Creator[]>({
    queryKey: ["creators"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Creator[];
    },
  });
}

export function useCreator(id: string | undefined) {
  return useQuery<Creator | null>({
    queryKey: ["creator", id],
    enabled: !!id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id!)
        .maybeSingle();
      if (error) throw error;
      return data as Creator | null;
    },
  });
}
