"use client";

import { Search, Settings2, SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BsBellFill, BsHeartFill } from "react-icons/bs";

function Header() {
  return (
    <div className="w-full px-[16px] sm:px-[32px] md:px-[65px]">
      {/* Label div */}
      <div className="py-[32px] sm:py-[50px] px-[2px] sm:px-[32px] flex items-center justify-between bg-[#FFFFFF]">
        {/* <Logo div */}
        <div className="gap-3 items-center flex justify-between">
          <Image src="/logo.svg" alt="logo" width={32} height={32}></Image>
          <h1 className="text-[24px] sm:text-[32px] leading-[28px] sm:leading-[40px] font-bold">
            High Fidelity Dashboard - Home Rent
          </h1>
        </div>
        {/* Date div */}
        <div className="gap-2 flex items-center justify-start">
          <span className="font-sans text-sm sm:text-lg font-medium leading-[20px] sm:leading-[25px] text-[#666666]">
            Last Updated:
          </span>
          <span className="font-sans text-sm sm:text-lg font-bold leading-[20px] sm:leading-[25px] text-black">
            8 Aug 2022
          </span>
        </div>
      </div>

      {/* Top nav */}
      <nav className="h-[124px] bg-[#FFFFFF] border-b border-[rgba(195,212,233,0.4)] px-4 mt-[50px] sm:mt-[100px]">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between flex-wrap">
          {/* Logo */}
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

          {/* Right Actions */}
          <div className="sm:flex items-center gap-5 mt-4 sm:mt-0 hidden ">
            {/* Like Button */}
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)]"
            >
              <BsHeartFill className="h-6 w-6 text-[#596780]" />
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Button
                size="icon"
                variant="outline"
                className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)]"
              >
                <BsBellFill className="h-6 w-6 text-[#596780]" />
              </Button>
              <span className="absolute -top-0.5 right-0.5 h-[11px] w-[11px] bg-[#FF4423] rounded-full" />
            </div>

            {/* Settings */}
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)]"
            >
              <SettingsIcon className="h-6 w-6 text-[#596780]" />
            </Button>

            {/* Profile */}
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 p-0 rounded-full border-[rgba(195,212,233,0.4)] overflow-hidden"
            >
              <Image
                src="/t-img.png"
                alt="Profile"
                width={44}
                height={44}
              ></Image>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

