import { NextSeo } from 'next-seo';
import Form from '@/components/Home/Form'
import Layout from '@/components/Layout'
import Faq from '@/components/Socialw/Faq'
import Featured from '@/components/Socialw/Featured'
import Gallery from '@/components/Socialw/Gallery'
import React from 'react'

const social = () => {
  return (
    <>
 <NextSeo
        title="Social Media Management| Unboxx Business"
        description="Ab Community Local Nahi Online Banyein Taki Business Local Nhi Global Ho"
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'Social Media Management| Unboxx Business',
          description: 'Ab Community Local Nahi Online Banyein Taki Business Local Nhi Global Ho',
          images: [
            {
              url: 'https://unboxxbusiness.com/socialm.png',
              width: 1200,
              height: 630,
              alt: 'unboxx business offer',
            },
          ],
          type: 'website',
          locale: 'en_US',
          site_name: 'unboxxbusiness.com',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@unboxxbusiness',
        }}
        canonical="https://www.unboxxbusiness.com/"
        noindex={false}
        nofollow={false}
        additionalMetaTags={[
          {
            name: 'author',
            content: 'Anuj Sharma',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          
        ]}
      />


    <Layout>
    <Gallery />
    <Featured />
    <Faq />
    <Form />
    </Layout>
    </>
  )
}

export default social
