import { createClient } from '@supabase/supabase-js'

// Read Supabase credentials from environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY environment variables are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
