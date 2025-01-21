import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function Sidebar() {
  return (
    <div className="hidden w-[360px] bg-white flex-col gap-8 pr-6 p-5 md:flex">
      <div>
        <h3 className="mb-4 text-sm font-medium uppercase text-gray-500">Type</h3>
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="sport" checked />
            <Label htmlFor="sport">Sport (10)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="suv" checked />
            <Label htmlFor="suv">SUV (12)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="mpv" />
            <Label htmlFor="mpv">MPV (16)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="sedan" />
            <Label htmlFor="sedan">Sedan (20)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="coupe" />
            <Label htmlFor="coupe">Coupe (14)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="hatchback" />
            <Label htmlFor="hatchback">Hatchback (14)</Label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-medium uppercase text-gray-500">Capacity</h3>
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="2person" checked />
            <Label htmlFor="2person">2 Person (10)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="4person"/>
            <Label htmlFor="4person">4 Person (14)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="6person" />
            <Label htmlFor="6person">6 Person (12)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="8more" checked />
            <Label htmlFor="8more">8 or More (16)</Label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-medium uppercase text-gray-500">Price</h3>
        <Slider defaultValue={[100]} max={100} step={1} />
        <div className="mt-2">
          <div className="text-sm">Max. $100.00</div>
        </div>
      </div>
    </div>
  )
}

