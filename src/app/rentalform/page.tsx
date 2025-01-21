'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {  Shield, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function CarRentalForm() {
  return (
    <div className="container mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]  flex-col lg:flex-row">
        {/* Left Column - Forms */}
        <div className="space-y-4 sm:space-y-6">
          {/* Billing Info Section */}
          <div className="space-y-3 sm:space-y-4 bg-white p-4 sm:p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold">Billing Info</h2>
              <span className="text-sm text-muted-foreground ">Step 1 of 4</span>
            </div>
            <p className="text-sm text-muted-foreground">Please enter your billing info</p>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="bg-[#F6F7F9]"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone number"className="bg-[#F6F7F9]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Address"className="bg-[#F6F7F9]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="town">Town / City</Label>
                <Input id="town" placeholder="Town or city"className="bg-[#F6F7F9]" />
              </div>
            </div>
          </div>

          {/* Rental Info Section */}
          <div className="space-y-3 sm:space-y-4 bg-white p-4 sm:p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold">Rental Info</h2>
              <span className="text-sm text-muted-foreground">Step 2 of 4</span>
            </div>
            <p className="text-sm text-muted-foreground">Please select your rental date</p>
            
            {/* Pick-Up Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-600 text-[#3563E9]" />
                <span className="font-medium">Pick - Up</span>
              </div>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pickup-location">Locations</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="la">Los Angeles</SelectItem>
                      <SelectItem value="ch">Chicago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickup-date">Date</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="next-week">Next Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickup-time">Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your time"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="12pm">12:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Drop-Off Section */}
            <div className="space-y-4 bg-white rounded-lg p-4 sm:p-6">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-600" />
                <span className="font-medium">Drop - Off</span>
              </div>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="dropoff-location">Locations</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="la">Los Angeles</SelectItem>
                      <SelectItem value="ch">Chicago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dropoff-date">Date</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="next-week">Next Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dropoff-time">Time</Label>
                  <Select>
                    <SelectTrigger >
                      <SelectValue placeholder="Select your time"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="12pm">12:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="space-y-3 sm:space-y-4 bg-white rounded-lg p-4 sm:p-6">
            <div className="flex items-center justify-between ">
              <h2 className="text-lg sm:text-xl font-semibold">Payment Method</h2>
              <span className="text-sm text-muted-foreground">Step 3 of 4</span>
            </div >
            <p className="text-sm text-muted-foreground">Please enter your payment method</p>
            
            <RadioGroup defaultValue="credit-card" className="space-y-4 ">
              {/* Credit Card Option */}
              <div className="rounded-lg border  p-4 bg-[#F6F7F9]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" className="bg-[#3563E9] text-[#3563E9]" />
                    <Label htmlFor="credit-card">Credit Card</Label>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/visa.png" alt="Visa" width={92} height={20} className="h-5 w-[92px]" />
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="Card number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiration">Expiration Date</Label>
                    <Input id="expiration" placeholder="DD/MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-holder">Card Holder</Label>
                    <Input id="card-holder" placeholder="Card holder" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" />
                  </div>
                </div>
              </div>

              {/* PayPal Option */}
              <div className="rounded-lg border p-4 bg-[#F6F7F9] ">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <Image src="/paypal.png" alt="PayPal" width={50} height={24} />
                </div>
              </div>

              {/* Bitcoin Option */}
              <div className="rounded-lg border p-4 bg-[#F6F7F9]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bitcoin" id="bitcoin" />
                    <Label htmlFor="bitcoin">Bitcoin</Label>
                  </div>
                  <Image src="/bitcoin.png" alt="Bitcoin" width={28} height={20} />
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Confirmation Section */}
          <div className="space-y-3 sm:space-y-4 bg-white rounded-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold">Confirmation</h2>
              <span className="text-sm text-muted-foreground">Step 4 of 4</span>
            </div>
            <p className="text-sm text-muted-foreground">We are getting to the end. Just few clicks and your rental is ready!</p>

            <div className="space-y-4 ">
              <div className="flex items-center space-x-2 bg-[#F6F7F9] rounded-lg py-[16px] px-[12px]">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing" className="text-sm">
                  I agree with sending an Marketing and newsletter emails. No spam, promised!
                </Label>
              </div>
              <div className="flex items-center space-x-2 bg-[#F6F7F9] rounded-lg py-[16px] px-[12px]">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree with our terms and conditions and privacy policy.
                </Label>
              </div>
            </div>
            
            <Button className="w-32 bg-[#3563E9] hover:bg-[#3563E9]">Rent Now</Button> 

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5" />
              <span className="text-black">All your data are safe</span>
            </div>
            <p className="text-xs text-muted-foreground">
              We are using the most advanced security to provide you the best experience ever.
            </p>
          </div>
        </div>

        {/* Right Column - Rental Summary */}
        <div className="lg:pl-6 mb-6 lg:mb-0 order-first lg:order-last">
          <Card className="lg:sticky lg:top-4 p-4 sm:p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-[4px]">Rental Summary</h2>
                <p className="text-sm text-muted-foreground">
                  Prices may change depending on the length of the rental and the price of your rental car
                </p>
              </div>

              <div className="flex items-start gap-4 ">
                <div className="h-[80px] w-[100px] sm:h-[108px] sm:w-[132px] overflow-hidden rounded-lg bg-blue-600 mt-4 sm:mt-8">
                  <Image
                    src="/car2.svg"
                    alt="Nissan GT-R"
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mt-4 sm:mt-12">Nissan GT - R</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 fill-current text-yellow-400/50" />
                    <span className="text-sm text-muted-foreground">440+ Reviewer</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground  ">Subtotal</span>
                  <span>$80.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>$0</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Input placeholder="Apply promo code" />
                <Button variant="outline">Apply now</Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-semibold">
                  <span>Total Rental Price</span>
                  <span>$80.00</span>
                </div>
                <p className="text-sm text-muted-foreground">Overall price and includes rental discount</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

