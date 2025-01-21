
import { RecentCars } from "@/components/recent-cars"
import CarDetails from "@/components/car-details"
import { Sidebar } from "@/components/sidebar"
import Reviews from "@/components/review"
import PostCreator from "@/components/comments"


export default function CarRental() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <main className=" min-h-screen">
        <CarDetails/>
        <div className="mt-5">
           
        <PostCreator blog_id={0}/>
         <RecentCars />
        </div>
      </main>
    </div>
  )
}

