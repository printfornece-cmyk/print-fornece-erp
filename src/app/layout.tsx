import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Print Fornece ERP',
  description: 'Sistema de gestão Print Fornece',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
