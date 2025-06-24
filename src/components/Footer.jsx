import React from 'react';

const Footer = () => {

    return (
        <>
        <footer className="bg-gray-100">
  {/* Legal Disclaimers */}
  <div className="mt-4 flex flex-col justify-center">
    <div className="text-xs text-gray-500 font-sans mt-11 mx-5 md:mx-60">
      <p>
        ◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers...
      </p>
      <br />
      <p>Representative example:</p>
      <br />
      <p>
        A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a...
      </p>
      <br />
      <p>
        ‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only...
      </p>
      <br />
      <p>
        *Apple Education Pricing is available to current and newly accepted college students and their parents...
      </p>
      <br />
      <p>
        1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad...
      </p>
      <br />
      <p>2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.</p>
      <br />
      <p>
        Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max...
      </p>
      <br />
      <p>A subscription is required for Apple TV+.</p>
      <br />
      <p>
        Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
      </p>
    </div>
  </div>

  {/* Divider */}
  <div className="border border-gray-300 h-[1px] mt-8 mx-60" />

  {/* Footer Link Sections */}
  <div className="flex flex-wrap justify-center items-start">
    <div className="flex space-x-32">
      {/* Column 1 */}
      <div className="mt-3 p-5">
        <ul className="space-y-1">
          <li className="text-sm font-semibold">Shop and Learn</li>
          {[
            "Store", "Mac", "iPad", "Watch", "AirPods", "Tv & Home",
            "Entertainment", "Accessories", "store", "Support"
          ].map((item, i) => (
            <li key={i}>
              <a href="#" className="text-xs text-gray-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>
        <ul className="space-y-1 mt-3">
          <li className="text-sm font-semibold">Apple Wallet</li>
          <li className="text-xs text-gray-600 hover:underline">Wallet</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="mt-3 p-5">
        <ul className="space-y-2">
          <li className="text-sm font-semibold">Account</li>
          <li className="text-xs text-gray-600 hover:underline">Manage Your Apple Account</li>
          <li className="text-xs text-gray-600 hover:underline">Apple Store Account</li>
          <li className="text-xs text-gray-600 hover:underline">iCloud.com</li>
        </ul>
        <ul className="space-y-2 mt-3">
          <li className="text-sm font-semibold">Entertainment</li>
          {[
            "Apple One", "Apple TV+", "Apple Music", "Apple Arcade",
            "Apple Podcasts", "Apple Books", "App Store"
          ].map((item, i) => (
            <li key={i} className="text-xs text-gray-600 hover:underline">{item}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Column 3 & 4 */}
    <div className="flex items-start space-x-32">
      <div className="p-5 mb-20">
        <ul className="space-y-2">
          <li className="text-sm font-semibold">Apple Store</li>
          {[
            "Find a Store", "Genius Bar", "Today at Apple", "Group Reservations",
            "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme",
            "Order Status", "Shopping Help"
          ].map((item, i) => (
            <li key={i} className="text-xs text-gray-600 hover:underline">{item}</li>
          ))}
        </ul>
      </div>

      <div className="pr-9 md:mb-16">
        <ul className="space-y-2">
          <li className="text-sm font-semibold">For Business</li>
          <li className="text-xs text-gray-600 hover:underline">Apple and Business</li>
          <li className="text-xs text-gray-600 hover:underline">Shop for Business</li>
        </ul>
        <ul className="space-y-2 mt-3">
          <li className="text-sm font-semibold">For Education</li>
          <li className="text-xs text-gray-600 hover:underline">Apple and Education</li>
          <li className="text-xs text-gray-600 hover:underline">Shop for Education</li>
          <li className="text-xs text-gray-600 hover:underline">Shop for University</li>
        </ul>
        <ul className="space-y-2 mt-3">
          <li className="text-sm font-semibold">For Healthcare</li>
          <li className="text-xs text-gray-600 hover:underline">Apple in Healthcare</li>
          <li className="text-xs text-gray-600 hover:underline">Mac in Healthcare</li>
          <li className="text-xs text-gray-600 hover:underline">Health on Apple Watch</li>
        </ul>
      </div>
    </div>

    {/* Column 5 */}
    <div className="w-full md:w-auto">
      <div className="p-5 ml-4">
        <ul className="space-y-2">
          <li className="text-sm font-semibold">Apple Values</li>
          {[
            "Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"
          ].map((item, i) => (
            <li key={i} className="text-xs text-gray-600 hover:underline">{item}</li>
          ))}
        </ul>
        <ul className="space-y-2 mt-3">
          <li className="text-sm font-semibold">About Apple</li>
          {[
            "Newsroom", "Apple Leadership", "Career Opportunities", "Investors",
            "Ethics & Compliance", "Events", "Contact Apple"
          ].map((item, i) => (
            <li key={i} className="text-xs text-gray-600 hover:underline">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Final Links */}
  <div className="w-[400px] mx-5 mt-10 md:w-full md:mx-56 p-3">
    <p className="text-xs text-gray-600">
      More ways to shop: <span className="text-blue-500 underline">Find an Apple Store</span> or 
      <span className="text-blue-500 underline"> other retailer </span>near you. Or call 
      <span className="text-blue-500 underline"> 000800 040 1966.</span>
    </p>
  </div>

  {/* Final Divider */}
  <div className="border border-gray-400 h-[1px] mt-6 mx-5 md:mx-56" />

  {/* Bottom Bar */}
  <div className="mt-6 pb-4 text-xs text-gray-600 flex flex-col md:flex-row md:items-center md:mx-[200px]">
    <p className="mx-8">Copyright © 2025 Apple Inc. All rights reserved.</p>
    <p className="mx-8">
      Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map
    </p>
  </div>
</footer>

        </>
    )
}

export default Footer;