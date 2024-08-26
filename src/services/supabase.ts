import { createClient } from "@supabase/supabase-js";
import { Database } from "types";

const supabaseUrl = "https://tqfngrbifjunkynoyvlx.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey as string);

export default supabase;
