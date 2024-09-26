import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Overlord",
    description: "Built for amusement and demonstration of my technical skills.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-black text-white font-mono`}>
                    <Header />
                    <hr className="bg-gradient-to-r from-rose-600 to-yellow-500 h-0.5" />
                    {children}
            </body>
        </html>
    );
}
