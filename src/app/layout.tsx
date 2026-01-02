import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // Import the providers
import Navbar from "@/app/components/Navbar"; // Import the Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Experience and Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      {/* suppressHydrationWarning is needed for next-themes to work without errors */}
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <Providers>
          <Navbar />
          <main className="pt-24 pb-12"> {/* pt-24 pushes content down so it's not hidden behind fixed Navbar */}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}