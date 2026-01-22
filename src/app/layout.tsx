import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "THE EXECUTIONER | Defense Industries Tactical Drone System",
  description: "Next-generation tactical autonomous drone system. 850 kW hybrid engine. Military-grade precision. Defense Industries.",
  keywords: "drone, tactical, defense, military, autonomous, executioner",
  openGraph: {
    title: "THE EXECUTIONER | Defense Industries",
    description: "Next-generation tactical autonomous drone system",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white font-rajdhani antialiased" suppressHydrationWarning>
        <CustomCursor />
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
