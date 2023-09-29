import { NextSeo } from 'next-seo';

import Form from '@/components/Home/Form'
import Layout from '@/components/Layout'
import Seod from '@/components/Seop/Seod'
import Statis from '@/components/Seop/Statis'
import Testi from '@/components/Seop/Testi'
import React from 'react'

const seo = () => {
  return (
    <>
<NextSeo
        title="SEO Services | Unboxx Business"
        description="SEO Ka Mtlb Sirf Website ko Optimize karna nhi hain , seo ka use brand build karne , traffic build karne, trust , or leads generation mein bhi madad karta hain"
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'SEO Services| Unboxx Business',
          description: 'SEO Ka Mtlb Sirf Website ko Optimize karna nhi hain , seo ka use brand build karne , traffic build karne, trust , or leads generation mein bhi madad karta hain',
          images: [
            {
              url: 'https://unboxxbusiness.com/seor.png',
              width: 1200,
              height: 630,
              alt: 'Seo Example Report',
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
<Testi />
<Statis />
<Seod />
<Form />

    </Layout>
    </>
  )
}

export default seo
