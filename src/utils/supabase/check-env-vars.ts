// This check can be removed
// it is just for tutorial purposes

export const hasEnvVars =
  process.env.NEXT_SUPABASE_URL &&
  process.env.NEXT_SUPABASE_ANON_KEY;
