import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/toaster";
const appName = `${process.env.NEXT_PUBLIC_APP_NAME}`;
export const metadata: Metadata = {
  title: appName,
  description: "Powered by ITPI",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootProviders>
          {children}
          <Toaster />
        </RootProviders>
      </body>
    </html>
  );
}
