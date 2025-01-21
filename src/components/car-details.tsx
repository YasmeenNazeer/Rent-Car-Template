
"use client"

import Image from "next/image"
import { Heart } from 'lucide-react'
import Link from "next/link"

export default function CarDetails() {
  return (
    <div className=" max-w-7xl p-8">
      <div className="rounded-2xl">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left Section */}
          <div className="flex-1">
          <div className=' gap-[32px]'>

  
  <div className="flex flex-col items-center md:items-start">
  
  <Image
    src={"/r-car.svg"}
    alt={"car"}
    width={492}
    height={360}
    className="w-full md:w-[500px] h-auto"
  />


  <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
    <Image  src={"/car2.svg"}  alt={"car"}  width={120}  height={124}
    className="bg-[#3563E9] rounded-lg w-[96px] h-[64px] md:w-[120px] md:h-[124px]"
    />
    <Image
      src={"/blackcar.png"}
      alt={"car"}
      width={120}
      height={124}
      className="rounded-lg w-[96px] h-[64px] md:w-[120px] md:h-[124px]"
    />
    <Image
      src={"/redcar.png"}
      alt={"car"}
      width={120}
      height={124}
      className="rounded-lg w-[96px] h-[64px] md:w-[120px] md:h-[124px]"
    />
  </div>
</div>



  
  </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-1 flex-col p-6 bg-white rounded-md">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Nissan GT - R</h2>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {"★".repeat(3)}
                    {"☆".repeat(1)}
                  </div>
                  <span className="text-sm text-gray-500">440+ Reviewer</span>
                </div>
              </div>
              <button className="rounded-full p-2 hover:bg-gray-100">
                <Heart className="h-6 w-6 text-red-500" />
              </button>
            </div>

            <p className="mt-4 text-gray-600">
              NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-y-4 text-sm md:grid-cols-4">
              <div>
                <p className="text-gray-500">Type Car</p>
                <p className="font-medium">Sport</p>
              </div>
              <div>
                <p className="text-gray-500">Steering</p>
                <p className="font-medium">Manual</p>
              </div>
              <div>
                <p className="text-gray-500">Capacity</p>
                <p className="font-medium">70L</p>
              </div>
              <div>
                <p className="text-gray-500">Person</p>
                <p className="font-medium">2 Person</p>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between pt-6">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">$80.00</span>
                  <span className="text-gray-500">/days</span>
                </div>
                <p className="text-sm text-gray-500">$100.00</p>
              </div>
              <Link href={"/rentalform"}>
              <button className="rounded-lg bg-[#3563E9] px-6 py-2.5 text-white transition-colors hover:bg-[#4169E1]/90">
                Rent Now
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

