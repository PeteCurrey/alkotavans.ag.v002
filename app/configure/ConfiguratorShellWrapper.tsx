'use client'

import { Suspense } from 'react'
import ConfiguratorShell from '@/components/configurator/ConfiguratorShell'

export default function ConfiguratorShellWrapper({ initialLayout }: { initialLayout?: string }) {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[var(--alkota-chalk)] font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--alkota-stone)]">Loading Builder...</div>}>
      <ConfiguratorShell initialLayout={initialLayout} />
    </Suspense>
  )
}
