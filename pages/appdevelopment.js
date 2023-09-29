import React from 'react'
import { NextSeo } from 'next-seo';
import Ctas from '@/components/Appd/Ctas'
import Layout from '@/components/Layout'
import Appfeature from '@/components/Appd/Appfeature'
import Details from '@/components/Appd/Details'
import Form from '@/components/Home/Form'

const appdevelopment = () => {
  return (
   <>
<NextSeo
        title="App Development | Unboxx Business"
        description="Har Kisi Ke Pass Aaj Mobile Phone or Internet Hota Hain , Agar Apka Business Unke Mobile Par Store Ho Jayein Toh Business Badhega hi Badhega, Woh Bhi Sirf Ek Chai ☕ Ki Cost Mein"
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'App Development | Unboxx Business',
          description: 'Har Kisi Ke Pass Aaj Mobile Phone or Internet Hota Hain , Agar Apka Business Unke Mobile Par Store Ho Jayein Toh Business Badhega hi Badhega, Woh Bhi Sirf Ek Chai ☕ Ki Cost Mein',
          images: [
            {
              url: 'https://unboxxbusiness.com/ap.png',
              width: 1200,
              height: 630,
              alt: 'App Development Offer',
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
<Ctas />
<Appfeature />
<Details />
<Form />
   </Layout>
   </>
  )
}

export default appdevelopment
