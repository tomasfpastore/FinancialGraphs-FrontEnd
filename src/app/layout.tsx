import {metadata} from '@/config/metadata'
import "@/styles/globals.css";
import { poppins, roboto } from '@/styles/fonts'

export {metadata}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
