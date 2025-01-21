//src\app\dashboard\[id]\page.tsx
import React from "react";

import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import DashboardLayout from "@/components/dashboard";
import CarRentalDashboard from "@/components/topcars";

export default async function DashboardPage({ searchParams,}: { searchParams: Promise<{image: string;name: string;   pricePerDay: number;   type: string; }>;}) {
  const { image, name, pricePerDay, type } = await searchParams;

  return (
    <>
      <div className="flex">
        <DashboardLayout />


 <main className="flex-1 p-4 sm:p-6 lg:p-8 ">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 place-items-center">
    <Card className="p-4 sm:p-6 lg:p-8 w-full max-w-md lg:max-w-none">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-[#1A202C]">
        Details Rental
      </h2>

      {/* Map placeholder */}
    
      <div className=" bg-gray-100 rounded-lg mb-4 sm:mb-6">
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28924.91694621434!2d67.01077341703248!3d24.860734712424983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1a52f160c3%3A0xa93f5b8eddf274da!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1674488602253!5m2!1sen!2s"
        width="100%"
        height="272"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>

      {/* Car details */}
      <div className="flex items-center gap-4 mb-8 sm:mb-8">
        <div className="w-32 h-16 sm:w-[132px] sm:h-[70px] bg-[#3563E9] rounded-lg flex items-center justify-center">
          <Image
            src={image}
            alt="car"
            width={486}
            height={272}
            className="w-28 sm:w-[116px] h-9 sm:h-[36px] object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#1A202C] text-lg sm:text-xl lg:text-2xl">
            {name}
          </h3>
          <div className="flex items-center justify-between text-sm sm:text-base text-[#3D5278]">
            <p>{type} Car</p>
            <span className="sm:hidden">#9761</span>
          </div>
        </div>
        <span className="hidden sm:inline text-[#3D5278] text-sm sm:text-base">#9761</span>
      </div>

      {/* Pickup/Dropoff Form */}
      <div className="space-y-6 sm:space-y-8">
        {/* Pick-Up Section */}
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-4">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-600"></div>
            <span className="font-semibold text-[#1A202C] text-[16px] leading-6">Pick-Up</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-[#1A202C] text-[19px] leading-6 mb-1 font-bold">Location</label>
              <button className="w-full p-2 border rounded-lg flex items-center justify-between">
                <span className="text-[15px] leading-4 text-[#90A3BF]">Kota Semarang</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div>
              <label className="block text-[#1A202C] text-[19px] leading-6 mb-1 font-bold">Date</label>
              <button className="w-full p-2 border rounded-lg flex items-center justify-between">
                <span  className="text-[15px] leading-4 text-[#90A3BF]">20 July 2022</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div>
              <label className="block text-[#1A202C] text-[19px] leading-6 mb-1 font-bold">Time</label>
              <button className="w-full p-2 border rounded-lg flex items-center justify-between">
                <span  className="text-[15px] leading-4 text-[#90A3BF]">07:00</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-4">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-blue-600"></div>
            <span className="font-semibold text-[#1A202C] text-[16px] leading-6">Drop-Off</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-[#1A202C] text-[19px] leading-6 mb-1 font-bold">Location</label>
              <button className="w-full p-2 border rounded-lg flex items-center justify-between">
                <span  className="text-[15px] leading-4 text-[#90A3BF]">Kota Semarang</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div>
              <label className="block text-[#1A202C] text-[19px] leading-6 mb-1 font-bold">Date</label>
              <button className="w-full p-2 border rounded-lg flex items-center justify-between">
                <span  className="text-[15px] leading-4 text-[#90A3BF]">21 July 2022</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div>
              <label className="block text-[#1A202C] text-[19px] leading-6 mb-1 font-bold">Time</label>
              <button className="w-full p-2 border rounded-lg flex items-center justify-between">
                <span  className="text-[15px] leading-4 text-[#90A3BF]">01:00</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg sm:text-xl">Total Rental Price</p>
            <p className="text-sm text-[#90A3BF]">
              Overall price and includes rental discount
            </p>
          </div>
          <span className="mt-2 sm:mt-0 text-2xl font-bold text-[#1A202C]">
            {pricePerDay}
          </span>
        </div>
      </div>
    </Card>

    <CarRentalDashboard />
  </div>
</main>



      </div>
    </>
  );
}
