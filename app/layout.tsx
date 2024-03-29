import '@/styles/globals.scss';

// next
import type {Metadata} from 'next';

// components
import LayoutHeader from '@/components/layout/LayoutHeader';
import LayoutSide from '@/components/layout/LayoutSide';

// fontawesome
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'PAFC',
  description: 'Generated by create next app'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  // console.log('# ROOT LAYOUT ..!', children)
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-B500">
        {/* header */}
        <LayoutHeader />

        <div className="flex justify-center">
          {/* side */}
          <LayoutSide />

          {/* content */}
          <div className="flex basis-[900px] p-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
