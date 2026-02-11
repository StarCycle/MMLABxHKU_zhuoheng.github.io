'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export default function HeaderButtons() {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2">

      {/* ===== Desktop Buttons ===== */}
      <div className="hidden md:flex items-center gap-2">
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
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="bg-black text-white">
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="#paper">Paper</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#docs">Docs</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#github">GitHub</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#discord">Discord</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#wechat">WeChat</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* ===== Buy Button (Always Visible) ===== */}
      <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
        Buy MM-Hand
      </Button>

    </div>
  )
}
