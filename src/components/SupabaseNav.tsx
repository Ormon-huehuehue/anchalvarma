import React from 'react'

import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

const SupabaseNav = () => {
  return (
    <nav className="w-full flex border-b border-b-foreground/10 h-16">
    <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
      {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
    </div>
  </nav>
  )
}

export default SupabaseNav