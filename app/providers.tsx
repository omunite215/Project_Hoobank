// app/providers.tsx
'use client'

import { NextUIProvider } from "@nextui-org/system"

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}