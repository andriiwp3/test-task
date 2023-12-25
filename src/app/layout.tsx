import Header from '@/components/Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
	<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<Header/>
        {children}
      </div>
  	)
}
