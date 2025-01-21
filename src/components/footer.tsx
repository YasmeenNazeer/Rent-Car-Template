import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 mr-[60px] ml-[60px] 
        sm:mr-4 sm:ml-4">
          <div className="lg:col-span-4">
            <h1 className="text-3xl font-bold tracking-tight text-[#3563E9]">
              MORENT
            </h1>
            <p className="mt-4 text-base text-[#13131399]">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xl font-semibold text-black">About</h3>
            <ul className="mt-6 space-y-4">
              <li className="text-[#13131399]">How it works</li>
              <li className="text-[#13131399]">Featured</li>
              <li className="text-[#13131399]">Partnership</li>
              <li className="text-[#13131399]">Business Relation</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">Community</h3>
            <ul className="mt-6 space-y-4">
              <li className="text-[#13131399]">Events</li>
              <li className="text-[#13131399]">Blog</li>
              <li className="text-[#13131399]">Podcast</li>
              <li className="text-[#13131399]">Invite a friend</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">Socials</h3>
            <ul className="mt-6 space-y-4">
              <li className="text-[#13131399]">Discord</li>
              <li className="text-[#13131399]">Instagram</li>
              <li className="text-[#13131399]">Twitter</li>
              <li className="text-[#13131399]">Facebook</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 mx-[60px] sm:mx-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-base font-semibold text-[#1A202C] text-center md:text-left">&copy;2022 MORENT. All rights reserved</p>
            <div className="flex justify-center gap-8 md:justify-start">
              <Link href="#" className="text-base font-semibold text-[#1A202C]">
                Privacy & Policy
              </Link>
              <Link href="#" className="text-base font-semibold text-[#1A202C]">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
