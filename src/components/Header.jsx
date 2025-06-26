import React from 'react';

const Header = () => {

    return (
      <div>
         <p className="text-center text-sm text-black py-3 px-4">
      Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.{' '}
      <a href="#" className="text-blue-500 underline hover:text-blue-700">Shop</a>
    </p>
<header 
className='w-full h-screen bg-cover bg-center flex items-center justify-center text-white'
style={{backgroundImage: "url('/img/APPLE-AIRPODS.jpg')"}} >
{/* <h1 className='text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4'>🚀Welcom to MyWebsite</h1> */}
<button className='mt-6 px-6 py-3 border-2 border-blue-500 text-blue-700 bg-transparent font-semibold rounded-full hover:bg-blue-500 hover:text-white transition'>Shop</button>
</header>

 {/* Section 1 */}
     <section
      className="w-full h-96 bg-cover bg-center flex items-center justify-center text-white mt-5"
      style={{ backgroundImage: "url('/img/Desktop_mac.jpg')" }} // replace with your actual file path
    >
     <button className="bg-white text-black mt-80 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
  Learn more
</button>
    </section>

{/* Section 2 */}
      <section className="relative w-full h-[90vh] bg-white flex items-center justify-center">
  {/* Image */}
  <img
    src="/img/hero_macbook.jpg" // Replace with actual image path
    alt="MacBook"
    className="w-full h-full object-cover mt-20"
  />

  {/* Overlay Content */}
  <div className="absolute top-1/4 w-full text-center px-4 -mt-20">
    <h1 className="text-5xl font-bold text-black">MacBook Air</h1>
    <p className="text-[18px] font-semibold text-black mt-2">
      Sky blue colour<br />
      Sky high performance with M4.
    </p>
    <div className="flex justify-center gap-4 mt-6">
      <button className="bg-[#0071E3] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-400 transition">
        Learn more
      </button>
      <button className="text-[#0071E3] border border-[#0071E3] px-6 py-2 rounded-full hover:bg-[#0071E3] hover:text-white transition">
        Buy
      </button>
    </div>
    <p className="mt-6 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
    Built for Apple Intelligence
  </p>
  </div>
   
</section>


<section className="relative md:flex">
  {/* iOS 18 Section */}
  <div
    className="space-y-3 text-center bg-cover bg-center h-[70vh] w-full md:max-w-full m-2"
    style={{ backgroundImage: "url('/img/deskImage1.jpg')" }}
  >
    <h1 className="text-5xl font-bold pt-2">iOS 18</h1>
    <p className="text-[20px] font-normal pb-4">
      Personalise your iPhone with <br />
      10 new Indian languages
    </p>
    <span className="text-blue-600 text-lg pb-4 hover:opacity-80 hover:underline">
      Learn More
    </span>
  </div>

  {/* iPad Air Section */}
  <div
    className="space-y-3 text-center bg-cover bg-center h-[70vh] w-full md:max-w-full m-2"
    style={{ backgroundImage: "url('/img/deskImage2.jpg')" }}
  >
    <h1 className="text-5xl font-bold pt-8">iPad Air</h1>
    <p className="text-[20px] font-normal">
      Now supercharged by the M3 chip.
    </p>
    <div>
      <button className="bg-[#0071E3] text-white px-4 py-2 rounded-full mr-3 hover:bg-blue-400">
        Learn more
      </button>
      <button className="text-[#0071E3] border border-[#0071E3] px-5 py-2 rounded-full hover:bg-[#0071E3] hover:text-white">
        Buy
      </button>
    </div>
  </div>

  {/* Footer Text Overlay */}
  <div className="absolute left-36 bottom-7 md:left-[70%]">
    <span className="text-xl bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
      Built for Apple Intelligence
    </span>
  </div>
</section>


<section className="relative md:flex">
  {/* MacBook Pro Section */}
  <div
    className="space-y-3 text-center bg-cover bg-center h-[70vh] w-full md:max-w-full m-2 z-10 relative"
    style={{ backgroundImage: "url('/img/deskImage3.jpg')" }}
  >
    <h1 className="text-5xl font-bold text-white pt-9">MacBook Pro</h1>
    <p className="text-[20px] font-normal text-white">A work of smart</p>
    <div>
      <button className="bg-[#0071E3] text-white px-4 py-2 rounded-full mr-3 hover:bg-blue-400">
        Learn more
      </button>
      <button className="text-[#0071E3] border border-[#0071E3] px-5 py-2 rounded-full hover:bg-[#0071E3] hover:text-white">
        Buy
      </button>
    </div>
    <div className="absolute top-[450px] left-[35%] md:left-[15%]">
      <span className="text-xl bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
        Built for Apple Intelligence
      </span>
    </div>
  </div>

  {/* iPhone Section */}
  <div
    className="space-y-2 text-center bg-cover bg-center h-[70vh] w-full md:max-w-full m-2"
    style={{ backgroundImage: "url('/img/deskImage4.jpg')" }}
  >
    <h1 className="text-5xl font-bold pt-8">iPhone</h1>
    <p className="text-[20px] font-normal">Meet the iPhone 16 family.</p>
    <div>
      <button className="bg-[#0071E3] text-white px-4 py-2 rounded-full mr-3 hover:bg-blue-400">
        Learn more
      </button>
      <button className="text-[#0071E3] border border-[#0071E3] px-5 py-2 rounded-full hover:bg-[#0071E3] hover:text-white">
        Shop iPhone
      </button>
    </div>
    <div>
      <span className="text-xl bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
        Built for Apple Intelligence
      </span>
    </div>
  </div>
</section>




</div>  

    );
    
};

export default Header;