'use client'

import { Suspense } from 'react'
import ConfiguratorShell from '@/components/configurator/ConfiguratorShell'
import { ConfiguratorProvider } from '@/lib/store/ConfiguratorContext'

export default function ConfiguratorShellWrapper({ initialLayout }: { initialLayout?: string }) {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-alkota-chalk font-mono text-[10px] uppercase tracking-[0.2em] text-alkota-stone">Loading Builder...</div>}>
      <ConfiguratorProvider>
        <ConfiguratorShell initialLayout={initialLayout} />
      </ConfiguratorProvider>
    </Suspense>
  )
}
