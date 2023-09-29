import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 dark:bg-red-400">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="/logob1.png" alt="" width={500} height={500}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="/logob2.png" alt="" width={500} height={500}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="/logob6.png" alt="" width={500} height={500}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="/logob3.png" alt="" width={500} height={500}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="/logob4.png" alt="" width={500} height={500}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="/logob5.png" alt="" width={500} height={500}/>
            </div>
        </div>
    </div>
</section>


  )
}

export default Logo
