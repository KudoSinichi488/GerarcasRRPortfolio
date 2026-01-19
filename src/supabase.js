import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Your Supabase project URL
const supabaseUrl = 'https://dafbysgxzyjahljmtbyp.supabase.co'

// Your anon public key (safe to use on the frontend)
const supabaseAnonKey = 'sb_publishable_OD0De1_0HAHkShU1nWNq6A_if_NgwvJ'

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
