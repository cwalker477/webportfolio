import { createClient } from '@supabase/supabase-js'

// Use environment variables in a real application
// For now, we'll use the provided values directly
const supabaseUrl = 'https://tbbxjqstzxlzfqzpnbcl.supabase.co'
// IMPORTANT: Use the ANON PUBLIC key here, NEVER the service role key
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiYnhqcXN0enhsemZxenBuYmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MzM3ODQsImV4cCI6MjA1OTIwOTc4NH0.YWcZOe4ICt3GOMAq8B2sM9aZLYCwbSYZcsMTIUTzmS0'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
