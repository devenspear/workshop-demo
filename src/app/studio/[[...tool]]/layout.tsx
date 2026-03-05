export const metadata = {
  title: 'Meridian AI Studio',
  description: 'Content management for Meridian AI',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
