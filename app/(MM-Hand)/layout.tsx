import type { Metadata } from "next";
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/homesheet"



import Image from 'next/image'





export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>

                    
            <header>
                <div className="fixed flex flex-row gap-3 m-6 z-20 flex-wrap">
                    <Button asChild className="bg-background text-foreground hover:bg-white group">
                        <Link href="/" className="select-none">
                            <Image
                                src="/logo/HKU_MMLAB.png"
                                alt="MMLab"
                                width={24}
                                height={24}
                                className="group-hover:scale-125 transition delay-100 duration-200"
                            />
                        </Link>
                    </Button>
                </div>
                <div className="fixed right-0 bottom-0 m-6 z-20">
                    <Link href="#" className="bg-background text-foreground hover:bg-mred hover:text-background rounded-full flex justify-center items-center p-2 select-none">
                        <span>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </header>



            {children}
            

        </div>
    );
}
