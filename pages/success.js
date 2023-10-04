import Layout from '@/components/Layout'
import React from 'react'

const success = () => {
  return (
    <Layout>
    <div>
       <section className="bg-white dark:bg-gray-900 px-10 py-10">
    <div className="py-20 px-20 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">Success</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Thank You For Inquiry Submission</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Our team will get in touch with you within 24 hours.</p>
        </div>   
    </div>
</section>
    </div>
    </Layout>
  )
}

export default success
