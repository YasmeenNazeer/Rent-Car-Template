//src\app\rent\[productdetails]\page.tsx
import Image from "next/image"
import { Heart } from 'lucide-react'
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { RecentCars } from "@/components/recent-cars"
import PostCreator from "@/components/comments"


export default async  function CarDetails({searchParams}:{searchParams:Promise<{image:string,name:string,pricePerDay:number,seatingCapacity:string,transmission:string,fuelCapacity:number, type:String}>}) 
{
  const {image,name,pricePerDay,seatingCapacity,transmission,fuelCapacity,type} = await searchParams

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
    <Sidebar />
    <main className="flex-1 min-h-screen">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="rounded-2xl">
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Left Section */}
            <div className="flex-1">
              <div className="gap-8">
                <div className="flex flex-col items-center sm:items-start">
                  <div className="bg-[#3563E9] rounded-lg p-6 shadow-lg w-full max-w-[492px] mx-auto lg:mx-0">
                    <div className="flex flex-col items-start text-start">
                      <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">
                        {type} car with the best design and acceleration
                      </h1>
                      <p className="text-sm sm:text-base text-white mb-4 text-center sm:text-start">
                        Safety and comfort while driving a <br />
                        futuristic and elegant {type} car
                      </p>
                    </div>
                    <div className="flex justify-center overflow-hidden">
                      <Image
                        src={image}
                        alt="Sports Car"
                        width={380}
                        height={120}
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
  
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-6">
                    <Image
                      src={image}
                      alt={"car"}
                      width={120}
                      height={124}
                      className="bg-[#3563E9] rounded-lg w-[80px] h-[56px] sm:w-[96px] sm:h-[64px] object-contain"
                    />
                    <Image
                      src={"/blackcar.png"}
                      alt={"car"}
                      width={120}
                      height={124}
                      className="rounded-lg w-[80px] h-[56px] sm:w-[96px] sm:h-[64px]"
                    />
                    <Image
                      src={"/redcar.png"}
                      alt={"car"}
                      width={120}
                      height={124}
                      className="rounded-lg w-[80px] h-[56px] sm:w-[96px] sm:h-[64px]"
                    />
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Section */}
            <div className="flex flex-1 flex-col p-4 sm:p-6 bg-white rounded-md">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold">{name}</h2>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {"★".repeat(4)}
                      {"☆".repeat(1)}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">
                      440+ Reviewer
                    </span>
                  </div>
                </div>
                <button className="rounded-full p-2 hover:bg-gray-100">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                </button>
              </div>
  
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-[1.5]">
                <b>{name}</b> has become the embodiment of {name}&apos;s outstanding
                performance, inspired by the most unforgiving proving ground, the
                &quot;race track&quot;.
              </p>
  
              <div className="mt-6 grid grid-cols-2 gap-y-4 text-sm sm:text-base md:grid-cols-4">
                <div>
                  <p className="text-[#90A3BF] text-sm sm:text-base leading-6">
                    Type Car
                  </p>
                  <p className="font-semibold text-[#596780] mt-1 sm:mt-3 text-sm sm:text-base leading-6">
                    {type}
                  </p>
                </div>
                <div>
                  <p className="text-[#90A3BF] text-sm sm:text-base leading-6">
                    Steering
                  </p>
                  <p className="font-semibold text-[#596780] mt-1 sm:mt-3 text-sm sm:text-base leading-6">
                    {transmission}
                  </p>
                </div>
                <div>
                  <p className="text-[#90A3BF] text-sm sm:text-base leading-6">
                    Gasoline
                  </p>
                  <p className="font-semibold mt-1 sm:mt-3 text-[#596780] text-sm sm:text-base leading-6">
                    {fuelCapacity}
                  </p>
                </div>
                <div>
                  <p className="text-[#90A3BF] text-sm sm:text-base leading-6">
                    Capacity
                  </p>
                  <p className="font-semibold mt-1 sm:mt-3 text-[#596780] text-sm sm:text-base leading-6">
                    {seatingCapacity}
                  </p>
                </div>
              </div>
  
              <div className="mt-auto flex items-center justify-between pt-4 sm:pt-6">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg sm:text-2xl font-bold">
                      {pricePerDay}
                    </span>
                    <span className="text-gray-500 font-semibold text-xs sm:text-sm">
                      /day
                    </span>
                  </div>
                </div>
                <Link
                  href={`/rentalform/rentform?image=${image}&name=${name}&pricePerDay=${pricePerDay}&type=${type}`}
                >
                  <button className="rounded-lg bg-[#3563E9] px-4 py-2 sm:px-6 sm:py-2.5 text-white transition-colors hover:bg-[#4169E1]/90">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-5">
          <PostCreator blog_id={0} />
          {await RecentCars()}
        </div>
      </div>
    </main>
  </div>
  
  )
}
