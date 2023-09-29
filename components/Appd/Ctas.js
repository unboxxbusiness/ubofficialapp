import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Ctas = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div className="absolute inset-0">
        <Image className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="/appbg.jpg" alt="" width={1920} height={1280}/>
    </div>

    <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

    <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">7B+ Active Mobile Users</h2>
            <p className="mt-4 mb-4 text-base text-gray-200">Har Kisi Ke Pass Aaj Mobile Phone or Internet Hota Hain , Agar Apka Business Unke Mobile Par Store Ho Jayein Toh Business Badhega hi Badhega, Woh Bhi Sirf Ek Chai ☕ Ki Cost Mein </p>

            <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="https://wa.link/61bsyb">
          Get started
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Link>
        </div>
    </div>
</section>

  )
}

export default Ctas
