import React from 'react'
import Image from 'next/image'



const Gallery = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24 dark:bg-gray-950">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">Kbhi Bhi Kahin Se Bhi Business Karein Social Media Se</h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600 dark:text-gray-300">Ab Community Local Nahi Online Banyein Taki Business Local Nhi Global Ho</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
                <Image className="w-full" src="/social1.png" alt="" width={1920} height={1280}/>
            </div>

            <div>
                <Image className="w-full" src="/social2.png" alt="" width={1920} height={1280}/>
            </div>

            <div>
                <Image className="w-full" src="/social3.png" alt="" width={1920} height={1280}/>
            </div>
        </div>

    </div>
</section>

  )
}

export default Gallery
