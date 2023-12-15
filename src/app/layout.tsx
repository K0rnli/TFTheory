import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { ClerkProvider } from '@clerk/nextjs'

import { TRPCReactProvider } from "~/trpc/react";
import SideBar from "./_components/SideBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "TFTheory",
  description: "TFT Theory", 
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <ClerkProvider>
              <SideBar/>
              <div className='ml-16'>
                {children}
              </div>
            </ClerkProvider>
          </TRPCReactProvider>
        </body>
      </html>

  );
}
