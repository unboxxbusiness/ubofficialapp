import { NextSeo } from 'next-seo';
import Auto from '@/components/Business/Auto'
import Mainf from '@/components/Business/Mainf'
import Steps from '@/components/Business/Steps'
import Form from '@/components/Home/Form'
import Layout from '@/components/Layout'
import React from 'react'

const businessautomation = () => {
  return (
    
<>
<NextSeo
        title="Business Automation | Unboxx Business"
        description="Income Agar Passive Nahi Hain Mtlb Aap Business Nahi Kar Rahe , Kyunki Business Woh Hota Hain jahan se apko continous income hota rahe bina apke involvement ke"
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'Business Automation | Unboxx Business',
          description: 'Income Agar Passive Nahi Hain Mtlb Aap Business Nahi Kar Rahe , Kyunki Business Woh Hota Hain jahan se apko continous income hota rahe bina apke involvement ke',
          images: [
            {
              url: 'https://unboxxbusiness.com/ba.png',
              width: 1200,
              height: 630,
              alt: 'Business Automation Offer',
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
<Auto />
<Steps />
<Mainf />
<Form />

</Layout>

</>

  )
}

export default businessautomation
