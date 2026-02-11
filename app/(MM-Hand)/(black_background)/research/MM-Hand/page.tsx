import type { Metadata } from "next";
export const metadata = {
    title: "MM Hand | HKU MMLab",
    description: "Multimedia Laboratory",
    keywords: ["MM Hand", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};

import Image from 'next/image'
import Link from "next/link"
import { Slash } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
]

const milestones = [
    {
        date: "Early March 2026",
        title: "Paper Release"
    },
    {
        date: "April 2026",
        title: "CAD, Assembly Guide & Code Release"
    },
    {
        date: "June 2026",
        title: "Beta Test Version Order"
    },
    {
        date: "December 2026",
        title: "MM-Hand 2.0"
    }
]

export default function Home() {
    return (
        <main>
            {/* 右上角浮动导航按钮 */}
            <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
                <Button asChild variant="ghost" className="bg-black text-white hover:bg-mred hover:text-white">
                    <Link href="#paper">Paper</Link>
                </Button>
                <Button asChild variant="ghost" className="bg-black text-white hover:bg-mred hover:text-white">
                    <Link href="#docs">Docs</Link>
                </Button>
                <Button asChild variant="ghost" className="bg-black text-white hover:bg-mred hover:text-white">
                    <Link href="#github">GitHub</Link>
                </Button>
                <Button asChild variant="ghost" className="bg-black text-white hover:bg-mred hover:text-white">
                    <Link href="#discord">Discord</Link>
                </Button>
                <Button asChild variant="ghost" className="bg-black text-white hover:bg-mred hover:text-white">
                    <Link href="#wechat">WeChat</Link>
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                    Buy MM-Hand
                </Button>
            </div>

            {/* 视频区域 - 全屏高度 */}
            <div className="relative w-full h-screen overflow-hidden">
                <video autoPlay muted loop playsInline poster="https://assets.kinetixai.cn/kinetixai/index/banner-20251212.jpg" className="absolute w-full h-full object-cover">
                    <source src="https://assets.kinetixai.cn/AMS/251212_raw.mp4" type="video/mp4" />
                </video>
            </div>

            {/* 介绍图文区域 */}
            <section className="w-full py-20 bg-black/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* 左侧文字内容 */}
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left">
                                <span className="text-cyan-400">Introducing</span> <br />
                                <span className="text-5xl md:text-7xl">MM-Hand 1.0</span>
                            </h1>
                            <p className="text-xl text-neutral-300 mb-8 max-w-2xl text-center md:text-left">
                                MM-Hand 1.0 is a fully open-source, 21 Degree-of-Freedom, lightweight dexterous hand with multimodal sensing and modular design allows for easy disassembly and modification.
                            </p>
                        </div>
                        
                        {/* 右侧机器人图片 */}
                        <div className="md:w-1/2 flex justify-center">
                            <AspectRatio ratio={16/9} className="w-full max-w-3xl">
                                <Image
                                    src="https://assets.kinetixai.cn/kinetixai/index/robot-20251212.jpg"
                                    alt="MM-Hand Robot"
                                    fill
                                    className="object-contain"
                                />
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            </section>

            {/* 亮点数据部分 */}
            <section className="w-full py-16 bg-black/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 数据卡片 1 */}
                        <div className="text-center">
                            <div className="text-5xl md:text-7xl font-bold text-cyan-400 mb-2">21</div>
                            <div className="text-xl font-bold">Degree-of-Freedom</div>
                            <div className="text-neutral-400">Dexterous Hand</div>
                        </div>
                        
                        {/* 数据卡片 2 */}
                        <div className="text-center">
                            <div className="text-5xl md:text-7xl font-bold text-cyan-400 mb-2">15</div>
                            <div className="text-xl font-bold">Tactile Sensors</div>
                            <div className="text-neutral-400">1mm Spatial, 0.1N Force Resolution</div>
                        </div>
                        
                        {/* 数据卡片 3 */}
                        <div className="text-center">
                            <div className="text-5xl md:text-7xl font-bold text-cyan-400 mb-2">2</div>
                            <div className="text-xl font-bold">Palm Cameras</div>
                            <div className="text-neutral-400">140° Field-of-View, Stereo Sensing</div>
                        </div>
                        
                        {/* 数据卡片 4 */}
                        <div className="text-center">
                            <div className="text-5xl md:text-7xl font-bold text-cyan-400 mb-2">~350</div>
                            <div className="text-xl font-bold">gram</div>
                            <div className="text-neutral-400">Weight of Hand</div>
                        </div>
                        
                        {/* 数据卡片 5 */}
                        <div className="text-center">
                            <div className="text-5xl md:text-7xl font-bold text-cyan-400 mb-2">x</div>
                            <div className="text-xl font-bold">kg</div>
                            <div className="text-neutral-400">Payload</div>
                        </div>
                        
                        {/* 数据卡片 6 */}
                        <div className="text-center">
                            <div className="text-5xl md:text-7xl font-bold text-cyan-400 mb-2">$2,200待确定</div>
                            <div className="text-xl font-bold">Bill of Materials Cost</div>
                            <div className="text-neutral-400">Complete System</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 功能特点部分 */}
            <section className="w-full py-16 bg-black/5">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 功能 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-full h-64 rounded-xl overflow-hidden mb-4">
                                <AspectRatio ratio={16/9}>
                                    <Image
                                        src="https://assets.kinetixai.cn/kinetixai/index/feature1.jpg"
                                        alt="Fully Open-source"
                                        fill
                                        className="object-cover"
                                    />
                                </AspectRatio>
                            </div>
                            <h3 className="text-xl font-bold text-white">Fully Open-source</h3>
                        </div>
                        
                        {/* 功能 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-full h-64 rounded-xl overflow-hidden mb-4">
                                <AspectRatio ratio={16/9}>
                                    <Image
                                        src="https://assets.kinetixai.cn/kinetixai/index/feature2.jpg"
                                        alt="Teleoperation"
                                        fill
                                        className="object-cover"
                                    />
                                </AspectRatio>
                            </div>
                            <h3 className="text-xl font-bold text-white">Teleoperation</h3>
                        </div>
                        
                        {/* 功能 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-full h-64 rounded-xl overflow-hidden mb-4">
                                <AspectRatio ratio={16/9}>
                                    <Image
                                        src="https://assets.kinetixai.cn/kinetixai/index/feature3.jpg"
                                        alt="Simulation"
                                        fill
                                        className="object-cover"
                                    />
                                </AspectRatio>
                            </div>
                            <h3 className="text-xl font-bold text-white">Simulation</h3>
                        </div>
                        
                        {/* 功能 4 */}
                        <div className="flex flex-col items-center">
                            <div className="w-full h-64 rounded-xl overflow-hidden mb-4">
                                <AspectRatio ratio={16/9}>
                                    <Image
                                        src="https://assets.kinetixai.cn/kinetixai/index/feature4.jpg"
                                        alt="Bilateral Force Feedback"
                                        fill
                                        className="object-cover"
                                    />
                                </AspectRatio>
                            </div>
                            <h3 className="text-xl font-bold text-white">Bilateral Force Feedback</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 倒计时任务栏 - 视频下方 */}
            <div className="w-full px-6 py-16 md:px-20 md:py-24 bg-black/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Project Timeline
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {milestones.map((milestone, index) => (
                            <Card key={index} className="bg-black/30 border-white/20 backdrop-blur-sm hover:border-mred transition-colors">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {milestone.title}
                                    </h3>
                                    
                                    <p className="text-sm font-mono text-mred text-red-500">
                                        {milestone.date}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}