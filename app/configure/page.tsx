import type { Metadata } from 'next'
import ConfiguratorShellWrapper from './ConfiguratorShellWrapper'

export const metadata: Metadata = {
  title: 'Alkota Builder | Configure Your Expedition Van',
  description: '16 stages. Complete control. Configure your Alkota expedition van build system by system.',
}

export default function ConfigurePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const layout = typeof searchParams.layout === 'string' ? searchParams.layout : undefined

  return <ConfiguratorShellWrapper initialLayout={layout} />
}
