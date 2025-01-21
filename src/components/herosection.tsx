import React from 'react'
import Image from 'next/image'
import PickDrop from './pick-drop'
import Link from 'next/link'
import { Button } from './ui/button'
import CarsSection from './carsection'




async function HeroSection() {
  return (
    <>
   <div className="w-full flex justify-center items-center py-[32px] px-[64px] gap-[32px] ">
  {/* Hide this image on small screens */}
  <div >
    <Image src="/left-car.svg" alt="car" width={640} height={360} />
  </div>
  
  
  <div className="hidden sm:block">
    <Image src="/r-car.svg" alt="car" width={640} height={360} />
  </div>
</div>

    <PickDrop/>
    
        {await CarsSection()}
       
    
    <div className=" w-full sm:w-[734px] h-[44px] mt-16 ml-0 sm:ml-[370px] flex flex-col sm:flex-row items-center  sm:justify-between mb-[64px] ">
  <div className="w-full sm:w-[156px] flex justify-center sm:justify-start ">
    <Link
      href="/morecars"
      className="text-[16px] leading-6 hover:text-gray-600"
    >
      <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded">
        Show more car
      </Button>
    </Link>
  </div>

  <span className="font-medium text-[14px] leading-[21px] text-center sm:text-right text-[#90A3BF] mt-4 sm:mt-0 w-full sm:w-auto">
    120 Car
  </span>
</div>




 


 </>
  )
}

export default HeroSection