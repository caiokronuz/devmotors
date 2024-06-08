import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors",
  description: "A melhor oficina para manutenção do seu possante.",
  keywords: ["oficina carros","carros","manutenção de carros"],
  openGraph: {
    title: "DevMotors - Sua oficina especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}

        <p style={{textAlign: "center", marginTop: 54, marginBottom: 24}}>
          Todos direitos reservados DevMotors @ {`${new Date().getFullYear()}`}
        </p>

      </body>
    </html>
  );
}
