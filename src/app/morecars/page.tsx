//src\app\morecars\page.tsx

import PickDrop from "@/components/pick-drop";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import { client } from "@/sanity/lib/client";

import { importCarData } from "@/services/api";

interface Car {
  brand: string;

  transmission: string;
  type: string;
  pricePerDay: number;
  name: string;
  seatingCapacity: string;
  image: string;
  fuelCapacity: string;
  heartImage: string;
}
export default async function MoreCars() {
 const res: Car[] = await client.fetch(
        "*[_type =='car'][]{ name, type, 'image':image.asset->url,'heartImage':heartImage.asset->url, transmission, fuelCapacity, pricePerDay,seatingCapacity}"
      );
      
      if (!res || res.length === 0) {
        importCarData();}

  return (
    <>
      <div className="flex ">
        <Sidebar />

        <div className="flex flex-col">
          {/*<PickDrop />*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[32px] py-[36px]">
            {res.slice(1, 16).map((item: Car, index: number) => (
              <div
                className="max-w-[304px] bg-white rounded-lg shadow-md p-[24px]"
                key={index}
              >
                {/* Header Section */}
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] leading-5 font-bold text-[#1A202C] font-sans">
                    {item.name}
                  </h2>
                  <Image
                    src={item.heartImage}
                    alt={"heart"}
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-sm text-[#90A3BF] mt-2 font-bold">
                  {item.type}
                </p>

                {/* Image Section */}
                <div className="my-[52px] mx-[16px]">
                  <Image
                    src={item.image}
                    alt="Car"
                    width={232}
                    height={72}
                    className="w-full object-cover"
                  />
                </div>

                {/* Features Section */}
                <div className="flex justify-between text-[#90A3BF] text-sm">
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/gas-station.png"}
                      alt={"gas"}
                      height={24}
                      width={24}
                    />
                    <span className="text-[#90A3BF]">{item.fuelCapacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/Car (1).png"}
                      alt={"type"}
                      height={24}
                      width={24}
                    />
                    <span className="text-[#90A3BF]">{item.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/profile-2user.png"}
                      alt={"users"}
                      height={24}
                      width={24}
                    />
                    <span className="text-[#90A3BF]">
                      {item.seatingCapacity}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    {item.pricePerDay}
                    <span className="text-sm text-[#90A3BF] font-bold">
                      /day
                    </span>
                  </p>

                  <Link
                    href={`/rent/productdetails?image=${item.image}&name=${item.name}&type=${item.type}&pricePerDay=${item.pricePerDay}&transmission=${item.transmission}&fuelCapacity=${item.fuelCapacity}&seatingCapacity=${item.seatingCapacity}`}
                  >
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full sm:w-[734px] h-[44px] mt-16 ml-0 sm:ml-[370px] flex flex-col sm:flex-row items-center sm:justify-between mb-[64px]">
            <div className="w-full sm:w-[156px] flex justify-center sm:justify-start">
              <Link
                href="/morecars"
                className="text-[16px] leading-6 hover:text-gray-600"
              >
                <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded">
                  Show more car
                </Button>
              </Link>
            </div>

            <span className="font-medium text-[14px] leading-[21px] text-center sm:text-right text-[#90A3BF] mt-4 sm:mt-0 w-full sm:w-auto mr-4">
              120 Car
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
