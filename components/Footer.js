import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cta from "@/components/Home/Cta"
const Footer = () => {
  return (
    <>
    <Cta />
    <section className="py-10 bg-gray-200 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
               <Link href="/"> <Image className="w-16 h-16" src="/logo.png" alt="" width={300} height={300} /></Link>

                <p className="text-base leading-relaxed text-gray-600 mt-7">Amplify your online presence with our web and app development, social media marketing, video editing, and automation services. Your digital success, our expertise.</p>

                <Link href="https://wa.link/61bsyb" title="" className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-green-900 rounded-md hover:bg-green-800 focus:bg-red-900 mt-7 dark:bg-rose-900">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Live Chat
                </Link>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Company</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <Link href="/about" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> About </Link>
                    </li>

                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Watch Demo </Link>
                    </li>

                    <li>
                        <Link href="/career" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Career </Link>
                    </li>

                    <li>
                        <Link href="/contact" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Contact Us </Link>
                    </li>
                </ul>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <Link href="https://wa.link/61bsyb" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Customer Support </Link>
                    </li>

                    <li>
                        <Link href="/disclaimer" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Disclaimer Policy </Link>
                    </li>

                    <li>
                        <Link href="/terms" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms & Conditions </Link>
                    </li>

                    <li>
                        <Link href="/privacy" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </Link>
                    </li>
                </ul>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Resources</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Free Marketing Material </Link>
                    </li>

                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Development Tutorial </Link>
                    </li>

                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> How to - Videos </Link>
                    </li>

                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> YouTube Playlist </Link>
                    </li>
                </ul>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Extra Links</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Latest Updates </Link>
                    </li>

                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Trending Tech Topics </Link>
                    </li>

                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Online Business Tips </Link>
                    </li>

                    <li>
                        <Link href="https://youtube.com/@unboxxbusiness?sub_confirmation=1" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Online Marketing Tips </Link>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">© Copyright 2023, All Rights Reserved by Unboxx Business</p>

           
        </div>
    </div>
</section>
</>
  )
}

export default Footer
