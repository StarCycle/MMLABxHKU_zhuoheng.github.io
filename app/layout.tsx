import type { Metadata } from "next";
import * as React from "react"



import "./globals.css";



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});
// Google Analystics
import { GoogleAnalytics } from '@next/third-parties/google'



// icon
export const metadata: Metadata = {
    icons: {
        icon: [
            {
                url: "/logo/HKU_MMLAB.png",
                href: "/logo/HKU_MMLAB.png",
            },
        ],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body id="#">




                {children}
                


            </body>
            <GoogleAnalytics gaId="G-HGTJE0RYX9" />
        </html>
    );
}
