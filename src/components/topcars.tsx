



import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { MoreVertical, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CarRentalDashboard() {
  const rentalData = [
    { name: "Sport Car", value: 17439 },
    { name: "SUV", value: 9478 },
    { name: "Coupe", value: 18197 },
    { name: "Hatchback", value: 12510 },
    { name: "MPV", value: 14406 },
  ];

  const transactions = [
    {
      id: 1,
      name: "Nissan GT - R",
      category: "Sport Car",
      date: "20 July",
      price: 80.0,
      image: "/Car2.svg",
    },
    {
      id: 2,
      name: "Koegnigseg",
      category: "Sport Car",
      date: "19 July",
      price: 99.0,
      image: "/car1.svg",
    },
    {
      id: 3,
      name: "Rolls - Royce",
      category: "Sport Car",
      date: "18 July",
      price: 96.0,
      image: "/Car3.svg",
    },
    {
      id: 4,
      name: "CR - V",
      category: "SUV",
      date: "17 July",
      price: 80.0,
      image: "/Car02.png",
    },
  ];

  const totalRentals = rentalData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className=" space-y-4 max-w-4xl mx-auto mb-[150px]">
      {/* Top 5 Car Rental Section */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Top 5 Car Rental</h2>
          <button className="p-2">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Circular Image Placeholder */}
          <div className="relative h-40 w-40 mx-auto">
            <Image
              src="/Chart.png"
              alt="Donut Chart Placeholder"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-xl font-bold">
                {Intl.NumberFormat().format(totalRentals)}
              </div>
              <div className="text-sm text-gray-500">Rental Car</div>
            </div>
          </div>

          {/* Rental Data List */}
          <div className="space-y-3">
            {rentalData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>{item.name}</span>
                </div>
                <span className="font-medium">
                  {Intl.NumberFormat().format(item.value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Recent Transactions Section */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recent Transaction</h2>
          <Link href="/morecars">
          <button className="text-blue-600 text-sm flex items-center">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </button></Link>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={transaction.image}
                  alt={transaction.name}
                  width={114}
                  height={38}
                  className="w-20 h-12 object-contain rounded-lg"
                />
                <div>
                  <h3 className="font-medium">{transaction.name}</h3>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
              <div className="text-right ml-8">
                <p className="font-medium">${transaction.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}