import "./globals.css";
import Navbar from "@/components/Navbar";
import { Nunito_Sans } from "next/font/google";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 z-50 w-full bg-background border-b-[1px] border-accent">
          <Navbar />
        </header>

        <main className="h-full mx-auto overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
