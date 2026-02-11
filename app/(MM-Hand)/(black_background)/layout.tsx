import * as React from "react"
import { Separator } from "@/components/ui/separator"



import "./globals.css";



import Image from 'next/image'
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { AspectRatio } from "@/components/ui/aspect-ratio"



import { FadeIn } from "@/components/animation/fade-in"



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>



            {children}



            <FadeIn>
                <footer className="w-full mb-20 flex flex-col gab-10">
                    <div className="w-full pl-6 pr-6 flex flex-row justify-center mt-20">
                        <div className="max-w-3xl w-full flex flex-row justify-between">
                            <div className="flex-1 flex flex-col justify-start">
                                <span className="select-none">
                                    MMLab © 2001 - 2026
                                </span>
                                <span className="select-none">
                                    All Rights Reserved
                                </span>
                                <div>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <span className="hover:text-mred cursor-pointer select-none">Site Credits</span>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-3xl p-6 border-0">
                                            <DialogHeader className="p-3 text-left">
                                                <DialogTitle>
                                                    Site Credits
                                                </DialogTitle>
                                                <div className="w-full flex flex-col">
                                                    <Separator className="mt-3"/>
                                                </div>
                                                <DialogDescription className="mt-3">
                                                    <span>
                                                        Thanks to the following site developers and all lab members for contributions.
                                                    </span>
                                                        <li className="mt-3 space-y-3 list-outside list-disc">
                                                            <Link href="https://faikit.github.io/" target="_blank" className="animated-underline">Huijie Wang</Link>
                                                        </li>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </FadeIn>
            


        </div>
    );
}
