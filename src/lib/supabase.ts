import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase client — reads from environment variables
// Set these in your .env file when deploying to production with Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Browser client (uses anon key, respects RLS)
export const supabase: SupabaseClient | null = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Server client (uses service role key, bypasses RLS — for API routes only)
export const supabaseAdmin: SupabaseClient | null = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

// Check if Supabase is configured
export const isSupabaseConfigured = (): boolean => {
  return !!(supabaseUrl && supabaseAnonKey);
};

// Check if Supabase admin is configured (service role key)
export const isSupabaseAdminConfigured = (): boolean => {
  return !!(supabaseUrl && supabaseServiceKey);
};
