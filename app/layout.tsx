import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZiiZii Kids - فروشگاه لباس کودکان',
  description: 'فروشگاه تخصصی لباس کودکان با بهترین کیفیت و طراحی‌های شیک',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}