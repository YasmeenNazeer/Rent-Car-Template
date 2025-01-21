import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function PickDrop() {
  return (
   <>
      <section className="w-full px-[24px] py-[32px] lg:px-[64px] lg:py-[32px]">
        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-[1fr_auto_1fr] ">

          {/* Left Card */}
          <div className="rounded-[10px] ">
            <Card className="h-auto lg:h-[133px] bg-white">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
                  </div>
                  <span className="text-[#1A202C] font-semibold">Pick - Up</span>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                  {/* Locations */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C] text-[16px] leading-6">Locations</label>
                    <Select>
                      <SelectTrigger className="w-full text-xs text-[#90A3BF] border-none  bg-white">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                    </Select>
                  </div>
                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C] text-[16px] leading-6">Date</label>
                    <Select>
                      <SelectTrigger className="w-full text-xs text-[#90A3BF] border-none  bg-white">
                        <SelectValue placeholder="Select your date" />
                      </SelectTrigger>
                    </Select>
                  </div>
                  {/* Time */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C] text-[16px] leading-6">Time</label>
                    <Select>
                      <SelectTrigger className="w-full text-xs text-[#90A3BF] border-none  bg-white">
                        <SelectValue placeholder="Select your time" />
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>



          {/* Middle Item */}
          <div className="flex justify-center items-center">
            <Image src="/mid-item.svg" alt="hero" width={80} height={80} />
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-[10px]">
            <Card className="h-auto lg:h-[133px] bg-white">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
                  </div>
                  <span className="text-[#1A202C] font-semibold">Drop - Off</span>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                  {/* Locations */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C] text-[16px] leading-6">Locations</label>
                    <Select>
                      <SelectTrigger className="w-full text-xs text-[#90A3BF] border-none  bg-white">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                    </Select>
                  </div>
                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C] text-[16px] leading-6">Date</label>
                    <Select>
                      <SelectTrigger className="w-full text-xs text-[#90A3BF] border-none  bg-white">
                        <SelectValue placeholder="Select your date" />
                      </SelectTrigger>
                    </Select>
                  </div>
                  {/* Time */}
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#1A202C] text-[16px] leading-6">Time</label>
                    <Select>
                      <SelectTrigger className="w-full text-xs text-[#90A3BF] border-none  bg-white">
                        <SelectValue placeholder="Select your time" />
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickDrop;
