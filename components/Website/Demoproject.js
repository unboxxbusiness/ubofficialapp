import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Demoproject = () => {
  return (
   
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-gray-900">
  
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Live Demo</h2>
    <p className="mt-1 text-gray-600 dark:text-gray-400">Experience Our Demo Projects: See Innovation in Action</p>
  </div>
 
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
   
    <Link className="group rounded-xl overflow-hidden" href="https://manufacturer-app.vercel.app/">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <Image className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/furni.png" alt="Image Description" width={1920} height={1280}/>
        <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          Sponsored
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Manufacturer Web App 
        </h3>
        <p className="mt-3 text-gray-800 dark:text-gray-200">
        Explore Our Manufacturer Web App Demo: Revolutionize Your Production!
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p>
      </div>
    </Link>
   
    <Link className="group rounded-xl overflow-hidden" href="https://education-app-phi.vercel.app/">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <Image className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/edu.png" alt="Image Description" width={1920} height={1280}/>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Educational Web App
        </h3>
        <p className="mt-3 text-gray-800 dark:text-gray-200">
        Empower Your Audience: Offer Courses and Digital Products Through Your Own Branded App!
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p>
      </div>
    </Link>
   
    <Link className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')]" href="https://wa.link/61bsyb">
      <div className="flex-auto p-4 md:p-6">
        <h3 className="text-xl text-white/[.9] group-hover:text-white"><span className="font-bold">LIMITED TIME OFFER</span> Dont Miss Out! Get Started with Unboxx Business: Website Development Starting at Just ₹5999!</h3>
      </div>
      <div className="pt-0 p-4 md:p-6">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
          Visit the site
          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </Link>
    
  </div>
 
</div>

  )
}

export default Demoproject
