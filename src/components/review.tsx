import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"

interface Review {
  id: number
  name: string
  role: string
  company: string
  date: string
  rating: number
  content: string
  image: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Stanton",
    role: "CEO",
    company: "Bukalapak",
    date: "21 July 2022",
    rating: 4,
    content: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    image: "/t-img.png",
  },
  {
    id: 2,
    name: "Skylar Dias",
    role: "CEO",
    company: "Amazon",
    date: "20 July 2022",
    rating: 4,
    content: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    image: "/f-img.jpeg",
  },
]

export default function Reviews() {
  return (
    <Card className="w-full max-w-4xl mx-auto mb-8 border-none rounded-md">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <span className="inline-flex items-center justify-center w-8 h-6 text-sm font-medium text-white bg-[#3563E9] rounded-lg">
            13
          </span>
        </div>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={review.id}>
              <div className="flex items-start gap-4">
                <Image
                  src={review.image}
                  alt={"image"}
                  width={56}
                  height={56}
                  className="w-12 h-12 rounded-full object-cover" >

                  </Image>
                <div className="flex-1 min-w-0 " >
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="font-semibold text-base">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {review.role} at {review.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 ">
                      <div className="flex ">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {review.content}
                  </p>
                </div>
              </div>
              {index < reviews.length - 1 && (
                <div className="my-6 border-b border-transparent" />
              )}
            </div>
          ))}
        </div>
        <button className="flex items-center justify-center w-full mt-6 py-2 text-sm text-[#90A3BF]">
          Show All
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </Card>
  )
}

