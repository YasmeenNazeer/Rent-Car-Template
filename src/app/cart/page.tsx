"use client";

import {
  Car,
  Fuel,
  Users,
  Gauge,
  ShipWheelIcon as SteeringWheel,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import image from "next/image";
import Link from "next/link";
import {  sanityUserPost } from "@/services/userApi";


interface Icar{
  name: string;
  pricePerDay: number;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  image: string;
}

export default function RentNow() {
   const router=  useRouter()

  const searchParam = useSearchParams();
  const [cartItems, setCartItems] = useState<Icar[]>([]);

useEffect(()=>{
 
  const cart =   localStorage.getItem("cart")
  const upDatedCart = cart ? JSON.parse(cart):[] 

  const name = searchParam.get("name");
  const pricePerDay = searchParam.get("pricePerDay");
  const type = searchParam.get("type");
  const fuelCapacity = searchParam.get("fuelCapacity");
  const transmission = searchParam.get("transmission");
  const seatingCapacity = searchParam.get("seatingCapacity");
  const image = searchParam.get("image");

  if(name && pricePerDay && type && fuelCapacity && transmission && seatingCapacity && image){
    const isDuplicate= upDatedCart.some((item:Icar)=> item.name === name)

    if(!isDuplicate){
      upDatedCart.push({name,pricePerDay,type,fuelCapacity,transmission,seatingCapacity,image})
    }
    
    localStorage.setItem("cart",JSON.stringify(upDatedCart))
    setCartItems(upDatedCart)
    router.replace("/cart")
 }
},[searchParam,router])

   function handleRemoveItem(index:number){
    const removeCard=[...cartItems] 
    removeCard.splice(index ,1)

    
    localStorage.setItem("cart",JSON.stringify(removeCard))
    setCartItems(removeCard)
   }

   useEffect(()=>{
     sanityUserPost()
   },[])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 md:text-3xl text-blue-600 font-serif">Ride Booked</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Car Details Section */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item:Icar, index: number) => {
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt="Car Image"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                        <p className="text-muted-foreground font-semibold">{item.type}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Car className="h-5 w-5 text-primary" />
                          <span className="text-[17px]">{item.transmission}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-5 w-5 text-primary" />
                          <span className="text-[17px]">{item.fuelCapacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          <span className="text-[17px]">{item.seatingCapacity}</span>
                        </div>
                       
                        <div className="flex items-center gap-2">
                          <h1 className="text-[17px]">price per day:</h1>
                          <span className="twxt-[17px] font-semibold">{item.pricePerDay}</span>
                          
                        </div>
                        <Button variant="ghost" size="default" onClick={()=>{handleRemoveItem(index)}}>
                        <Trash2 className="w-4 h-4">

                        </Trash2>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
         



          <Card>
            <CardHeader>
              <CardTitle>Rental Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Pickup Date</label>
                  <input
                    type="date"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Return Date</label>
                  <input
                    type="date"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1">

        {cartItems.map((item:Icar, index: number) => {
            return (
          <Card key={index} >
            <CardHeader>
              <CardTitle>Rental Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Daily Rate</span>
                  <span className="font-medium">{item.pricePerDay}</span>
                </div>
                
                <Separator />
               
               
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span className="font-medium">$
                    00.00</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{item.pricePerDay}</span>
                </div>
              </div>
                <Link href={"/rentalform"}>  
              <Button className="w-full" size="lg">
                Proceed to Payment
              </Button></Link>
                
              <p className="text-sm text-muted-foreground text-center">
                By proceeding, you agree to our terms and conditions
              </p>
            </CardContent>
          </Card>
 );
})}

          
        </div>
      </div>
    </div>
  );
}