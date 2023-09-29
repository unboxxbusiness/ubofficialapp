import React from 'react'
import Link from 'next/link'
const Cta = () => {
  return (
   
   
<div className="bg-gradient-to-r from-purple-600 to-blue-400">
  <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    
    <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div className="text-center md:text-left md:order-2 md:flex md:justify-end md:items-center">
        <p className="mr-5 inline-block text-sm font-semibold text-white">
          Ready to get started?
        </p>
        <Link className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-white font-medium text-white hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="https://courses.unboxxbusiness.com">
          Log in
        </Link>
      </div>


      <div className="flex items-center">
        <Link className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="https://youtube.com/@unboxxbusiness?sub_confirmation=1">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
          </svg>
          Watch demo
        </Link>
        <span className="inline-block border-r border-white/[.3] w-px h-5 mx-2"></span>
        <Link className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="https://youtube.com/@unboxxbusiness?sub_confirmation=1">
          Explore whats new
        </Link>
      </div>
   
    </div>

  </div>
</div>

 
  )
}

export default Cta
