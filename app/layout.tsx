import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'PAFC',
	description: 'Generated by create next app',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	// console.log('# ROOT LAYOUT ..!', children)
	return (
		<html lang="en">
			<body className="flex items-center justify-center bg-B400">{children}</body>
		</html>
	);
};
