import React from 'react'
import Image from 'next/image'

const Testi = () => {
  return (
   
<div className="relative overflow-hidden dark:bg-gray-950">
  <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">

    <div aria-hidden="true" className="flex absolute left-0 -z-[1]">
      <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
    </div>
  
    <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div className="hidden lg:block lg:col-span-2">
        <Image className="rounded-xl" src="/graph.jpg" alt="Image Description" width={1920} height={1280}/>
      </div>
    

      <div className="lg:col-span-4">
    
        <blockquote>
         

          <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-gray-200">
            SEO Ka Mtlb Sirf Website ko Optimize karna nhi hain , seo ka use brand build karne , traffic build karne, trust , or leads generation mein bhi madad karta hain
          </p>

          <footer className="mt-6">
            <div className="flex items-center">
              <div className="lg:hidden flex-shrink-0">
                <Image className="h-12 w-12 rounded-full" src="/user.png" alt="Image Description" width={1920} height={1280}/>
              </div>
              <div className="ml-4 lg:ml-0">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Anuj Sharma
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Digital Marketing Expert
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
      
      </div>
    
    </div>

  </div>
</div>

  )
}

export default Testi
