
import Image from "next/image"


import { Button } from "@/components/ui/button"


import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { importCarData } from "@/services/api"


interface Car {
  brand: string;
  
  transmission: string;
  type: string;
  pricePerDay: number;
  name: string;
  seatingCapacity:string;
  image: string;
  fuelCapacity:string;
  heartImage:string
}
export async function RecentCars() {
       
       const res: Car[] = await client.fetch(
               "*[_type =='car'][]{ name, type, 'image':image.asset->url,'heartImage':heartImage.asset->url, transmission, fuelCapacity, pricePerDay,seatingCapacity}"
             );
             
             if (!res || res.length === 0) {
               importCarData();}
       




  return (
    <div className="w-full max-w-[1200px] px-4 md:px-6 mb-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#90A3BF]">Recent Car</h2>
        <Button variant="link" className="text-[#3563E9]">View All</Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


     
      {res.slice(7,13).map((item:Car, index:number) => (
              <div className="max-w-[304px] bg-white rounded-lg shadow-md p-[24px]" key={index}>
                {/* Header Section */}
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] leading-5 font-bold text-[#1A202C] font-sans">{item.name}</h2>
                   <Image  src={item.heartImage} alt={"heart"} width={24} height={24}/> 
                </div>
                <p className="text-sm text-[#90A3BF] mt-2 font-bold">{item.type}</p>

                {/* Image Section */}
                <div className="my-[52px] mx-[16px]">
                  <Image
                    src={item.image} // Replace this with the car image URL
                    alt="Car"
                    width={232}
                    height={72}
                    className="w-full object-cover"
                  />
                </div>

                {/* Features Section */}
                <div className="flex justify-between text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                      <Image src={"/gas-station.png"} alt={"gas"} height={24} width={24}/>
                    <span className="text-[#90A3BF]">{item.fuelCapacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                     <Image src={"/Car (1).png"} alt={"type"} height={24} width={24}/>
                    <span className="text-[#90A3BF]">{item.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src={"/profile-2user.png"} alt={'users'} height={24} width={24}/>
                    <span className="text-[#90A3BF]">{item.transmission}</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">{item.pricePerDay}<span className="font-semibold text-gray-500 text-[18px]">/ day</span></p>

                  <Link href={`/`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Rent Now
                  </button></Link>
                </div>
              </div>
            ))}





      </div>
    </div>
  )
}

