export default function RentalForm() {
    return (
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16 py-8 bg-gray-50">
        {/* Billing Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Billing Info</h2>
            <p className="text-sm text-gray-500">Step 1 of 4</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">Please enter your billing info</p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Phone Number</label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Town / City</label>
              <input
                type="text"
                placeholder="Town or city"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
  
        {/* Rental Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Rental Info</h2>
            <p className="text-sm text-gray-500">Step 2 of 4</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">Please select your rental date</p>
          <form className="space-y-6 mt-4">
            {/* Pick-Up Section */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Pick-Up</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600">Locations</label>
                  <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Date</label>
                  <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your date</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Time</label>
                  <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
  
            {/* Drop-Off Section */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Drop-Off</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600">Locations</label>
                  <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Date</label>
                  <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your date</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Time</label>
                  <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  