import React from 'react'

const Statis = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 dark:bg-gray-900">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white">SEO Report </h2>
            <p className="mt-3 text-xl leading-relaxed text-gray-600 dark:text-white md:mt-8">Every Month SEO Growth Report Se Aap Pata Laga Saktein Hain Ki Online Apke Business Ka kya status hain, Jaise Example Ke Liye </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 1M+ </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900 dark:text-gray-200">Monthly Traffic</p>
                <p className="text-base mt-0.5 text-gray-500 dark:text-gray-200">#1 Ranking on Search</p>
            </div>

            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4000+</span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900 dark:text-gray-200">Lead generation</p>
                <p className="text-base mt-0.5 text-gray-500 dark:text-gray-200">Monthly Free of Cost</p>
            </div>

            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 2k </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900 dark:text-gray-200">Users Onboarding Monthly</p>
                <p className="text-base mt-0.5 text-gray-500 dark:text-gray-200">Without Any Ads</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default Statis
