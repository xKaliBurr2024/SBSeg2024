import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "xKaliburr",
  description: "Created by round table team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="flex flex-col min-h-[calc(100vh_-_3.5rem)] bg-slate-800 items-center justify-center relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
