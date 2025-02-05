"use client";

import { Search, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="w-full relative">
      {/* User Button on Small Screens */}
      <div className="absolute top-4 right-4 sm:hidden">
        <UserButton />
      </div>
      
      {/* Top nav */}
      <nav className="h-[124px] bg-[#FFFFFF] border-b border-[rgba(195,212,233,0.4)] px-4">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between flex-wrap">
          {/* Left Side - Logo */}
          <h1 className="text-[24px] sm:text-[32px] font-bold text-[#3563E9] leading-[32px] sm:leading-[48px]">
            MORENT
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-[449px] w-full h-[44px] mt-4 sm:mt-0">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search className="h-6 w-6 text-[#596780]" />
            </div>
            <Input
              className="h-11 pl-12 pr-12 border-[rgba(195,212,233,0.4)] text-[#596780]"
              placeholder="Search something here"
              type="search"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-transparent"
            >
              <Settings2 className="h-6 w-6 text-[#596780]" />
            </Button>
          </div>

          {/* Right Side - User Button for Larger Screens */}
          <div className="hidden sm:flex items-center gap-5 mt-4 sm:mt-0">
            <UserButton />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
