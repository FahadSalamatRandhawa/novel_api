import './globals.css'

export const metadata = {
  title: 'Novelty Novels',
  description: 'a simple novel booking api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
