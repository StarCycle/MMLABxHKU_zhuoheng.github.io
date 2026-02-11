'use client'


import { redirect, usePathname } from 'next/navigation'



export default function Redirect() {



    const pathname = usePathname()

    
    // project
    if (
        pathname.toLowerCase().startsWith('/kai0')
        || pathname.toLowerCase().startsWith('/research/kai0')
    ) {
        if (
            pathname.toLowerCase().startsWith('/research/kai0rl')
            || pathname.toLowerCase().startsWith('/research/kai0-rl')
            || pathname.toLowerCase().startsWith('/kai0rl')
            || pathname.toLowerCase().startsWith('/kai0-rl')
            || pathname.toLowerCase().startsWith('/research/rise')
            || pathname.toLowerCase().startsWith('/rise')
        ) {
            redirect('https://opendrivelab.com/kai0-rl')
        } else {
            redirect('/research/kai0/')
        }
    }
    if (
        pathname.toLowerCase().startsWith('/foldanything')
    ) {
        redirect('/research/kai0/')
    }
    if (
        pathname.toLowerCase().startsWith('/sparsevideonav')
        || pathname.toLowerCase().startsWith('/research/sparsevideonav')
        || pathname.toLowerCase().startsWith('/mm-videonav')
        || pathname.toLowerCase().startsWith('/research/mm-videonav')
    ) {
        redirect('https://opendrivelab.com/SparseVideoNav')
    }
    if (
        pathname.toLowerCase().startsWith('/mm-hand')
        || pathname.toLowerCase().startsWith('/research/mm-hand')
    ) {
        redirect('/research/MM-Hand')
    }
    if (
        pathname.toLowerCase().startsWith('/egohumanoid')
        || pathname.toLowerCase().startsWith('/kaidata')
        || pathname.toLowerCase().startsWith('/research/egohumanoid')
        || pathname.toLowerCase().startsWith('/research/kaidata')
    ) {
        redirect('https://opendrivelab.com/EgoHumanoid')
    }


    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
