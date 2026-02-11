import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "CCAI9025 | HKU",
    description: "CCAI9025 @ The university of Hong Kong",
    keywords: ["CCAI9025", "The university of Hong Kong", "MMLab", "HKU", "CUHK", "NTU"],
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



import { FadeIn } from "@/components/animation/fade-in"



import { pis, members } from "@/data/course/lecturer_CCAI9025"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "Course",
        url: "/about-us"
    },
]

const instructors = [
  {
    name: "Hongyang Li",
    avatar: "https://ik.imagekit.io/xxyvnpkee/hongyang_li_c.jpg?updatedAt=1755327798056", // 头像路径
    profileUrl: "https://lihongyang.info/" // 个人主页链接
  },
  {
    name: "Ping Luo",
    avatar: "https://ik.imagekit.io/xxyvnpkee/ping_luo_c.jpg?updatedAt=1755327798194", // 头像路径
    profileUrl: "http://luoping.me/" // 个人主页链接
  },
  {
    name: "Yi Ma",
    avatar: "https://ik.imagekit.io/xxyvnpkee/mayi_c.png?updatedAt=1755327798226", // 头像路径
    profileUrl: "https://people.eecs.berkeley.edu/~yima/" // 个人主页链接
  },
];

const teachingAssistants = [
  {
    name: "Hai Zhang",
    avatar: "https://ik.imagekit.io/xxyvnpkee/hai_zhang_c.jpg?updatedAt=1755327798154",
    profileUrl: "https://betray12138.github.io/resume/"
  },
  {
    name: "Hugo Mak",
    avatar: "https://ik.imagekit.io/xxyvnpkee/haoguang_mai.jpg?updatedAt=1756526921679",
    profileUrl: ""
  },
  {
    name: "Ziye Wang",
    avatar: "https://ik.imagekit.io/xxyvnpkee/ziye_wang_c.jpg?updatedAt=1756525596773",
    profileUrl: "https://ziyeeee.github.io"
  },
  {
    name: "Ruizhe Liu",
    avatar: "https://ik.imagekit.io/xxyvnpkee/ruize_liu.jpg?updatedAt=1756526506019",
    profileUrl: "https://scholar.google.com/citations?hl=zh-CN&user=cHY_UJ8AAAAJ"
  },
  {
    name: "Zhuoheng Li",
    avatar: "https://ik.imagekit.io/xxyvnpkee/zhuoheng_li_c.jpg?updatedAt=1756525944543",
    profileUrl: "https://github.com/StarCycle"
  },
  {
    name: "Jiayu Weng",
    avatar: "https://ik.imagekit.io/xxyvnpkee/jiayu_weng.jpg?updatedAt=1756526834066",
    profileUrl: "https://scholar.google.com/citations?user=KZGlHNIAAAAJ&hl=en"
  },
  {
    name: "Jianrui Wu",
    avatar: "https://ik.imagekit.io/xxyvnpkee/Jianrui_wu.jpg?updatedAt=1756526652630",
    profileUrl: "https://jer-ry.github.io"
  },
  {
    name: "Tianle Li",
    avatar: "https://ik.imagekit.io/xxyvnpkee/tianle_li.jpg?updatedAt=1756526739918",
    profileUrl: ""
  },
  {
    name: "Yixuan Pan",
    avatar: "https://ik.imagekit.io/xxyvnpkee/yixuan_pan_c.jpg?updatedAt=1756525833345",
    profileUrl: "https://lzpyx.github.io"
  },
  {
    name: "Bowen Wang",
    avatar: "https://ik.imagekit.io/xxyvnpkee/bowen_wang.jpg?updatedAt=1756534518082",
    profileUrl: "https://bowenbryanwang.github.io/"
  },
  {
    name: "Junli Ren",
    avatar: "https://ik.imagekit.io/xxyvnpkee/junli_ren.jpg?updatedAt=1756534129995",
    profileUrl: "https://renjunli99.github.io"
  },
];

const fieldTripImages = [
  {
    src: "https://ik.imagekit.io/xxyvnpkee/fp1.JPG?updatedAt=1760861025337",
    alt: "Field Trip Activity 1"
  },
  {
    src: "https://ik.imagekit.io/xxyvnpkee/fp2.JPG?updatedAt=1760861025403",
    alt: "Field Trip Activity 2"
  },
  {
    src: "https://ik.imagekit.io/xxyvnpkee/fp6.jpg?updatedAt=1760861764008",
    alt: "Field Trip Activity 3" 
  },
  {
    src: "https://ik.imagekit.io/xxyvnpkee/fp4.JPG?updatedAt=1760861025353",
    alt: "Field Trip Activity 4"
  },
  {
    src: "https://ik.imagekit.io/xxyvnpkee/fp5.JPG?updatedAt=1760861025372",
    alt: "Field Trip Activity 5"
  },
  {
    src: "https://ik.imagekit.io/xxyvnpkee/fp3.JPG?updatedAt=1760861025056",
    alt: "Field Trip Activity 6"
  },
];


export default function Home() {
    return (
        <main>
            {/* Landing */}
            <div className="w-full min-h-[18rem] px-6 flex flex-row justify-center bg-gradient-landing bg-fixed overflow-y-auto">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-6 pt-30"> {/* 新增 pt-30 */}
                    <h1 className="font-bold text-3xl md:text-5xl text-white text-center">
                        <FadeIn>
                            CCAI9025: AI-driven Robotics for Humankind
                        </FadeIn>
                    </h1>
                    <h1 className="text-xl md:text-3xl text-white text-center">
                        <FadeIn>
                            The University of Hong Kong - Fall 2025
                        </FadeIn>
                    </h1>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex justify-center 2xl:justify-evenly">



                {/* navigator */}
                <div className="w-48 hidden 3xl:block">
                    {/* <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                        <Link className="select-none flex items-center gap-3 group" href="#course" key="course">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Course Overview
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#faculty" key="faculty">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Lecturer
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#student" key="student">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Schedule
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#alumni" key="alumni">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Alumni
                                </span>
                            </FadeIn>
                        </Link>
                    </div> */}
                </div>
                


                <div className="w-full max-w-7xl flex flex-col">

                    <FadeIn>
                            <div className="w-full max-w-7xl mt-6">
                                <AspectRatio ratio={16/9}> {/* 根据你的图片比例调整这个值 */}
                                <Image
                                    src="https://ik.imagekit.io/xxyvnpkee/ai_and_humankind.png?updatedAt=1755327798468"
                                    alt="Full width image"
                                    fill
                                    className="h-full w-full rounded-md object-cover bg-gradient-loading"
                                />
                                </AspectRatio>
                            </div>
                    </FadeIn>

                    {/* course Description */}
                    <div className="pb-0 w-full flex flex-col items-center bg-[rgba(245,245,245,0.8)] p-8 backdrop-blur-sm">
                        <h2 className="w-full max-w-7xl mt-6 text-3xl font-bold"> 
                            <FadeIn>

                                Course Description
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 

                            </FadeIn>
                        </h2>
                    </div>
                    <div className="pb-2 w-full flex flex-col items-center bg-[rgba(245,245,245,0.8)] p-8 backdrop-blur-sm">
                        <div className="w-full max-w-7xl mt-2 text-xl font-normal"> 
                            <FadeIn>
                                    <p className="leading-relaxed">
                                        Robots have become a pervasive part of our lives, evolving from obscure novelties to indispensable components of modern life. Since the dawn of the Industrial Revolution, robots have become an increasingly integral part of our society and daily lives. With each stride in robot technology, tasks that were once solely within the domain of human capability are now effortlessly executed by robotic counterparts, heralding a new era of efficiency and innovation.
                                        <br /><br />
                                        In an era marked by the swift evolution of AI, the field of robotics is experiencing unprecedented growth and innovation. Throughout this course, we will delve into a series of fundamentals at the heart of this technological revolution and try to answer the following questions: What led us to the current state of robotics? How do robots play an essential role across diverse sectors? Why do robots possess the remarkable capabilities that enable them to undertake tasks that were once deemed impossible? How does AI benefit robots in the era of big data? How do robots contribute to the Hong Kong community and society at large? Do robots only benefit humanity, or do there exist costs and concerns that necessitate careful consideration? What groundbreaking horizons lie ahead as we stride towards the future alongside robots?
                                        <br /><br />
                                        This course is fundamentally transdisciplinary and is designed for students who are new to robotics and AI. We will cultivate a foundational understanding of AI-driven robotics. The course will focus on the role of robotics in our society, considering its practical and potential uses, and how it can dramatically revolutionize our society in the future. This course does not assume previous knowledge.
                                    </p>
                            </FadeIn>
                        </div>
                    </div>


                    {/* Faculty */}
                    {/* Faculty & TAs Section */}
                    <div className="w-full max-w-7xl mx-auto mt-20">
                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Instructors Column */}
                        <div>
                        <h3 className="text-3xl font-bold mb-6 border-b pb-2">Instructors</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {instructors.map((person) => (
                            <FadeIn key={person.name}>
                                <div className="flex flex-col items-center text-center">
                                {/* 圆形头像 */}
                                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-4 border-2 border-mgray">
                                    <Image
                                    src={person.avatar}
                                    alt={person.name}
                                    fill
                                    className="object-cover"
                                    />
                                </div>
                                {/* 带链接的名字 */}
                                <Link 
                                    href={person.profileUrl} 
                                    target="_blank"
                                    className="text-lg font-medium hover:text-mred transition-colors"
                                >
                                    {person.name}
                                </Link>
                                </div>
                            </FadeIn>
                            ))}
                        </div>
                        </div>

                        {/* TAs Column */}
                        <div className="pb-6">
                            <h3 className="text-3xl font-bold mb-6 border-b pb-2">Teaching Assistants</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                                {teachingAssistants.map((person) => (
                                <FadeIn key={person.name}>
                                    <div className="flex flex-col items-center text-center">
                                    {/* 圆形头像 */}
                                    <div className="relative rounded-full overflow-hidden w-24 h-24 mb-4 border-2 border-mgray">
                                        <Image
                                        src={person.avatar}
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                        />
                                    </div>
                                    {/* 带链接的名字 */}
                                    <Link 
                                        href={person.profileUrl} 
                                        target="_blank"
                                        className="text-lg font-medium hover:text-mred transition-colors"
                                    >
                                        {person.name}
                                    </Link>
                                    </div>
                                </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#faculty" className="scroll-mt-32 group flex items-center" id="faculty">
                                Lecturer
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div> */}
                    {/* to keep the same in /about-us / img */}
                    {/* {pis.map((pi) => (
                        <FadeIn key={pi.name}>
                            <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                                <div className="flex-1/3 md:max-w-64">
                                    <AspectRatio ratio={1/1}>
                                        <Image
                                            src={pi.img}
                                            alt={pi.name}
                                            fill
                                            className="h-full w-full rounded-md object-cover bg-gradient-loading"
                                        />
                                    </AspectRatio>
                                </div>
                                <div className="flex-2/3 flex flex-col gap-6 scroll-mt-32" id={pi.id}>
                                    <h3 className="text-3xl sm:text-4xl text-t1 font-bold">
                                        {pi.name}
                                    </h3>
                                    <span>
                                        {pi.title}
                                    </span>
                                    <p className="member_bio" dangerouslySetInnerHTML={{ __html: pi.bio }}></p>
                                    <div className="flex gap-6 flex-wrap">
                                        {pi.links.map((link) => (
                                            <Link href={link.link} target="_blank" key={link.icon}  className="h-8 w-8 group">
                                                <AspectRatio ratio={1/1}>
                                                    <Image
                                                        src={"/icon/" + link.icon + ".svg"}
                                                        alt={link.link}
                                                        fill
                                                        className="group-hover:scale-125 transition duration-200"
                                                    />
                                                </AspectRatio>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))} */}

                    
                    <div className="pb-0 w-full flex flex-col items-center p-8">
    <h2 className="w-full max-w-7xl mt-6 text-3xl font-bold"> 
        <FadeIn>
            Field Trip Gallery
            <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
            </span> 
        </FadeIn>
    </h2>
</div>

<div className="w-full flex flex-col items-center p-8">
    <div className="w-full max-w-7xl">
        <FadeIn>
            <div className="relative w-full overflow-hidden">
                {/* 使用 Flex 布局替代 Grid，兼容性更好 */}
                <div className="flex gap-6 animate-scroll">
                    {[...fieldTripImages, ...fieldTripImages].map((image, index) => (
                        <div 
                            key={`image-${index}`} 
                            className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-lg group"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={320}
                                height={240}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                
                {/* 渐变遮罩 */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
        </FadeIn>
    </div>
</div>

                    {/* Course Logistics */}
                    <div className="pb-0 w-full flex flex-col items-center bg-[rgba(245,245,245,0.8)] p-8 backdrop-blur-sm">
                        <h2 className="w-full max-w-7xl mt-6 text-3xl font-bold"> 
                            <FadeIn>
                                Course Logistics
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                            </FadeIn>
                        </h2>
                    </div>
                    <div className="pb-0 w-full flex flex-col items-center bg-[rgba(245,245,245,0.8)] p-8 backdrop-blur-sm">
                        <div className="w-full max-w-7xl mt-2 text-xl font-normal"> 
                            <FadeIn>
                                <ul className="list-disc pl-5 space-y-2"> {/* 圆点列表 + 左内边距 + 项间距 */}
                                <li>
                                    <span className="font-semibold">Lecture Venue and Time</span> 
                                    <br/> Wednesday 1:00-2:50PM HKT at Wang Gungwu Lecture Hall.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Available Tutorial Timeslots</span> 
                                    <br/> Monday <select><option>2:00-2:50PM HKT</option><option>3:00-3:50PM HKT</option><option>4:00-4:50PM HKT</option></select>
                                    <br/> Thursday <select><option>1:00-1:50PM HKT</option><option>7:00-7:50PM HKT</option></select>
                                    <br/> Friday <select><option>10:00-10:50AM HKT</option><option>11:00-11:50AM HKT</option><option>1:00-1:50PM HKT</option><option>2:00-2:50PM HKT</option><option>3:00-3:50PM HKT</option></select>
                                    <br/> Each student may select a suitable timeslot based on their schedule. Allocation will primarily follow a first-come, first-served basis. Priority consideration will be given to students from specific majors who only have availability in certain timeslots. Members for the group project will be automatically determined according to tutorial selections.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Lecture Slides and Recordings</span> 
                                    <br/> Will be posted on the <a href="https://moodle.hku.hk/course/view.php?id=127252" className="text-blue-600 hover:text-blue-800 hover:underline">Moodle website</a> shortly after each lecture.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Contact</span> 
                                    <br/> For enquiries, emergencies, or personal matters, you can email us through <a href="mailto:ccai9025-staff@googlegroups.com" className="text-blue-600 hover:text-blue-800 hover:underline">ccai9025-staff@googlegroups.com</a>.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Related Links</span> 
                                    <br/> <a href="https://commoncore.hku.hk/CCAI9025/" className="text-blue-600 hover:text-blue-800 hover:underline">HKU commoncore website</a>.
                                    <br/> <a href="https://datascience.hku.hk/study/research-postgraduate/ccai9025/" className="text-blue-600 hover:text-blue-800 hover:underline">HKU-IDS website</a>.
                                    <br/> <a href="https://moodle.hku.hk/course/view.php?id=127252" className="text-blue-600 hover:text-blue-800 hover:underline">Moodle website (HKU student only)</a>.
                                </li><br/>
                                </ul>
                            </FadeIn>
                        </div>
                    </div>

                    
                    
                    {/* Coursework */}
                    <div className="pb-0 w-full flex flex-col items-center p-8">
                        <h2 className="w-full max-w-7xl mt-6 text-3xl font-bold"> 
                            <FadeIn>
                                Coursework Assessment
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                            </FadeIn>
                        </h2>
                    </div>
                    <div className="pb-0 w-full flex flex-col items-center p-8">
                        <div className="w-full max-w-7xl mt-2 text-xl font-normal"> 
                            <FadeIn>
                                <ul className="list-disc pl-5 space-y-2"> {/* 圆点列表 + 左内边距 + 项间距 */}
                                <li>
                                    <span className="font-semibold">Individual Essay (30%)</span> 
                                    <br/>Students are encouraged to cover the personal contributions and the analysis of why you suit the role in the group project.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Reflection Report About the Field Trips (15%)</span>
                                    <br/>Students are encouraged to develop a "report" to describe what they gain and what they experience during the field trip.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Participation (20%)</span> 
                                    <br/>Students are encouraged to actively participate in a variety of interactive activities—such as panels, debates, role-playings, and discussions with guest speakers—across lectures, tutorials, and field trips.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Group Project (30%)</span>
                                    <br/>Students are encouraged to cooperate to finish a group project to demonstrate their comprehensive and overall summary of the whole course. We design four directions for the group project: Simulation Robot, Real-world Robot, Index Report, and Business Plan.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Social Media Outreach (5%)</span> 
                                    <br/>Students are encouraged to share their thoughts and ideas about state-of-the-art AI-driven robotics applications worldwide.
                                </li><br/>
                                <li>
                                    <span className="font-semibold">Regrade Request</span> 
                                    <br/>If you believe that the course staff made an objective error in grading, you may submit a regrade request and email us within 3 days of the grade release. Your request should briefly summarize why the original grading was incorrect. Note that staff may regrade the entire submission, so it is possible for you to lose more points than you gain if a mistake was overlooked in the first time.
                                </li><br/>
                                </ul>
                            </FadeIn>
                        </div>
                    </div>


                    {/* course schedule */}
                    <div className="pb-0 w-full flex flex-col items-center bg-[rgba(245,245,245,0.8)] p-8 backdrop-blur-sm">
                        <h2 className="w-full max-w-7xl mt-6 text-3xl font-bold "> 
                            <FadeIn>
                                Course Schedule
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                            </FadeIn>
                        </h2>
                    </div>
                    
                    <div className="w-full flex flex-col items-center bg-[rgba(245,245,245,0.8)] p-8 backdrop-blur-sm">
                        <div className="w-full max-w-7xl mt-6">
                            <FadeIn>
                            <div className="scroll-mt-32" id="schedule">
                                {/* 表格部分 */}
                                <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-2xl font-semibold mb-4">Date</th>
                                        <th className="text-2xl font-semibold mb-4">Lecture</th>
                                        <th className="text-2xl font-semibold mb-4">Tutorial</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Sep 3, 2025</th>
                                        <th className="py-3 px-4 font-medium">Introduction to Embodied AI, Machine Learning and Beyond [<a href="https://drive.google.com/file/d/1-OgCJsJadfIyyyEgGl3NEvXuokaA25dD/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                        <th className="py-3 px-4 font-medium">-</th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Sep 10, 2025</th>
                                        <th className="py-3 px-4 font-medium">Pursuing the Nature of Intelligence [<a href="https://drive.google.com/file/d/1a9hCYLeB0my4RbQrJ_DYw5INd7vsEdyz/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                        <th className="py-3 px-4 font-medium">Details of Course Assessment and Introduction of Basic Math [<a href="https://drive.google.com/file/d/1jtqdI42IMlk_Z-n60Axrx6MnGduZ_DIt/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Sep 17, 2025</th>
                                        <th className="py-3 px-4 font-medium">Robotic Applications: Autonomous Driving and Transportation [<a href="https://drive.google.com/file/d/1tKPXP7cAJQNmlafU3QgirP9sniGbnXnM/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                        <th className="py-3 px-4 font-medium">Basic Knowledge of Machine Learning [<a href="https://drive.google.com/file/d/1KLDiU0bwzgHBOHdypf84ARe1eC-VANcn/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Sep 24, 2025</th>
                                        <th className="py-3 px-4 font-medium">Robotic Applications: Manufacturing [<a href="https://drive.google.com/file/d/1WCJQJPs7Zqr9ZDA0M89s-UqqV9JVvZ7s/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                        <th className="py-3 px-4 font-medium">Basic Knowledge of Robotics and 2D Vision [<a href="https://drive.google.com/file/d/1TtHJJOh5oGa_q1AnJN-QAJFWlB4XLpu8/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium text-red-500">Oct 1, 2025</th>
                                        <th className="py-3 px-4 font-medium text-red-500">HK Holiday, NO ONSITE LECTURE <br/> Robotic Applications: Healthcare [<a href="https://drive.google.com/file/d/1Q5KQV2PdVOfTGVxvyffQHC7D7csDECB1/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>] </th> 
                                        {/* Robotic Applications: Manufacturing */}
                                        <th className="py-3 px-4 font-medium">Basic Knowledge of 3D Vision and Coding [<a href="https://drive.google.com/file/d/130U1eWpp5nXVh76uNhLnD5CJ8vCC9vHn/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Oct 8, 2025</th>
                                        <th className="py-3 px-4 font-medium">Robotics with Foundation Models Part 1 [<a href="https://drive.google.com/file/d/1baL5Yj6KQpktQQPj5RIY5HKMNbQsDi19/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>] </th>
                                        <th className="py-3 px-4 font-medium">Hands-on Study of the Robotic Simulation [<a href="https://drive.google.com/file/d/1_OAGut-ePxrO3WCK9CiyQhqrWMyfi2zp/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Oct 13 ~ Oct 17, 2025</th>
                                        <th className="py-3 px-4 font-medium text-red-500">Reading Week, NO ONSITE LECTURE <br/>Field Trip to Hong Kong 10.15 <br/> Field Trip to Shenzhen 10.16</th>
                                        <th className="py-3 px-4 font-medium text-red-500">Reading Week, NO ONSITE TUTORIAL </th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Oct 22, 2025</th>
                                        <th className="py-3 px-4 font-medium">Robotics with Foundation Models Part 2 and Multi-agent Robotic Systems [<a href="https://drive.google.com/file/d/12aPnBGdUAoKT0j25iMY3GvrHv-jhQH0u/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                        <th className="py-3 px-4 font-medium">Hands-on Study of Teleoperation and Data Collection [<a href="https://drive.google.com/file/d/18kNWRL-2JIK5rQa6WBhePP0lQcOYYk4D/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium text-red-500">Oct 29, 2025</th>
                                        <th className="py-3 px-4 font-medium text-red-500">HK Holiday, NO ONSITE LECTURE <br/> Robotic Applications: Drones and Low-altitude Economy [<a href="https://drive.google.com/file/d/1e9yc0QwSq5nBJPwMxRNwRFSkCPL6Nb5E/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>] </th>
                                        <th className="py-3 px-4 font-medium">Hands-on Study of Data Pre-processing [<a href="https://drive.google.com/file/d/1wqfOVJ-TRd4gO-7i1UoHqWNsGcUek42Z/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>] </th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Nov 5, 2025</th>
                                        <th className="py-3 px-4 font-medium">Crossing the "Uncanny Valley": How to Inject "Soul" into Robots</th>
                                        <th className="py-3 px-4 font-medium">Hands-on Study of Policy Training [<a href="https://drive.google.com/file/d/1ZVS8YkajsqysrZTteaCxUbKEfR1oH4h4/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>] </th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Nov 12, 2025</th>
                                        <th className="py-3 px-4 font-medium">Towards Dexterous Hands(1h) [<a href="https://drive.google.com/file/d/1rz9q5vKT8ECqhL7XdFLyQdrd1erLnF0v/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>] <br/> Panel: Will Robots Replace Humans? (1h) [<a href="https://drive.google.com/file/d/1vs-YRYXamnL_K5JOvv7UtrtNKLNrPcE6/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                        <th className="py-3 px-4 font-medium">Hands-on Study of Policy Inference [<a href="https://drive.google.com/file/d/1xYRA7qj31DJFsAYypJ24mN17vgF7Q1mV/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>]</th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Nov 19, 2025</th>
                                        <th className="py-3 px-4 font-medium">Embodied AI on the Societal Impact and Class Recap  [<a href="https://drive.google.com/file/d/1rzcEz2uq763IvuF2kJA0q4tEdE32kWhZ/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>] </th>
                                        <th className="py-3 px-4 font-medium">Demonstration of Humanoid  [<a href="https://drive.google.com/file/d/1SusA-Bow0o6VqeHLFbEKJwOCDQTpnDr8/view?usp=sharing" className="text-blue-500 hover:underline">slides</a>] </th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Nov 26, 2025</th>
                                        <th className="py-3 px-4 font-medium">Group Project Presentation</th>
                                        <th className="py-3 px-4 font-medium">-</th>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </FadeIn>
                        </div>
                    </div>



                    {/* Course Materials */}
                    <div className="pb-0 w-full flex flex-col items-center p-8">
                        <h2 className="w-full max-w-7xl mt-6 text-3xl font-bold"> 
                            <FadeIn>
                                Course Materials
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                            </FadeIn>
                        </h2>
                    </div>
                    <div className="w-full flex flex-col items-center p-8">
                        <div className="w-full max-w-7xl mt-2 text-xl font-normal"> 
                            <FadeIn>
                                <ul className="list-disc pl-5 space-y-2"> {/* 圆点列表 + 左内边距 + 项间距 */}
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.perlego.com/book/3631630/a-brief-history-of-intelligence-evolution-ai-and-the-five-breakthroughs-that-made-our-brains-pdf" className="text-blue-600 hover:text-blue-800 hover:underline">A Brief History of Intelligence: Evolution, AI, and the Five Breakthroughs That Made Our Brains.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2211.06318" className="text-blue-600 hover:text-blue-800 hover:underline">Artificial Intelligence and Life in 2030.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.stateof.ai/2024" className="text-blue-600 hover:text-blue-800 hover:underline">State of AI Report 2024.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://anthology-of-data.science/resources/prince2023udl.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">Understanding Deep Learning.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://people.disim.univaq.it/~costanzo.manes/EDU_stuff/Robotics_Modelling,%20Planning%20and%20Control_Sciavicco_extract.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">Robotics, Modelling, Planning and Control.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=U9mJuUkhUzk" className="text-blue-600 hover:text-blue-800 hover:underline">OpenAI DevDay: Opening Keynote.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=outcGtbnMuQ" className="text-blue-600 hover:text-blue-800 hover:underline">GPT-4 Developer Livestream.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/live/6v6dbxPlsXs" className="text-blue-600 hover:text-blue-800 hover:underline">We, Robot | Tesla Cybercab Unveil.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=ODSJsviD_SU" className="text-blue-600 hover:text-blue-800 hover:underline">Tesla AI Day 2022.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLCBtJRMPXXZ4dmgCQ_X3DGTFNKjXdXFU " className="text-blue-600 hover:text-blue-800 hover:underline">MIT Embodied Intelligence Seminars.</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=R2meHtrO1n8" className="text-blue-600 hover:text-blue-800 hover:underline">Talk AI, Tech & the Future.</a>                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=QWWgr2rN45o" className="text-blue-600 hover:text-blue-800 hover:underline">Responsible AI development.</a>                                </li>
                                </ul>
                            </FadeIn>
                        </div>
                    </div>

                    
                    {/* FAQ */}
                    <div className="pb-0 w-full flex flex-col items-center bg-[rgba(245,245,245,0.8)] p-8 backdrop-blur-sm">
                        <h2 className="w-full max-w-7xl mt-6 text-3xl font-bold"> 
                            <FadeIn>
                                FAQ
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                            </FadeIn>
                        </h2>
                    </div>
                    <div className="pb-0 w-full flex flex-col items-center bg-[rgba(245,245,245,0.8)] p-8 backdrop-blur-sm">
                        <div className="w-full max-w-7xl mt-2 text-xl font-normal"> 
                            <FadeIn>
                                <ul className="list-disc pl-5 space-y-2"> {/* 圆点列表 + 左内边距 + 项间距 */}
                                <li>
                                    <span className="font-semi">Can I audit or sit in?</span> 
                                    <br/> <em>In general, we are very open to auditing if you are a member of the HKU community (registered student, staff, and/or faculty). Out of courtesy, we would appreciate if you first email us or talk to the instructor after the first class you attend.</em>
                                </li><br/>
                                <li>
                                    <span className="font-semi">I have a question about the class. What is the best way to reach the course staff?</span> 
                                    <br/> <em>For discussions regarding course content, please directly email us through <a href="mailto:ccai9025-staff@googlegroups.com" className="text-blue-600 hover:text-blue-800 hover:underline">ccai9025-staff@googlegroups.com</a>. For all other inquiries, kindly reach out directly to the course instructors.</em>
                                </li><br/>
                                </ul>
                            </FadeIn>
                        </div>
                    </div>

                </div>



                <div className="w-48 hidden 3xl:block"></div>



            </div>



        </main>
    );
}
