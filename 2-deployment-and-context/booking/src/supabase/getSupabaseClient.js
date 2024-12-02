import { createClient } from "@supabase/supabase-js";

// #######################################################
// MODIFY THESE VARIABLES, TO YOUR SUPABASE INSTALLATION.
// #######################################################
const SUPABASE_URL = "https://ixfyejbgmefahxcopxea.supabase.co";
const PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZnllamJnbWVmYWh4Y29weGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MzQzMTEsImV4cCI6MjA0NzUxMDMxMX0.C4NV6ZDFxDgrH4RSShCLZXonuLjHg_xsilsuYsMkDPQ";
// #######################################################

let supabaseClientSingletong = undefined;
export function getSupabaseClient() {
  if (supabaseClientSingletong == undefined) {
    supabaseClientSingletong = createClient(SUPABASE_URL, PUBLIC_ANON_KEY);
  }

  return supabaseClientSingletong;
}

export default getSupabaseClient;