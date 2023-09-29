import { NextSeo } from 'next-seo';
import Connect from '@/components/Abouts/Connect'
import Info from '@/components/Abouts/Info'
import Form from '@/components/Home/Form'
import Logo from '@/components/Home/Logo'
import Layout from '@/components/Layout'
import React from 'react'

const about = () => {
  return (
    <>
<NextSeo
        title="About Us | Unboxx Business"
        description="Hamara Bs Ek Hi Aim Hain Local Business Owners Ko affordable cost par digital tech solutions provide karna."
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'About Us | Unboxx Business',
          description: 'Hamara Bs Ek Hi Aim Hain Local Business Owners Ko affordable cost par digital tech solutions provide karna.',
          images: [
            {
              url: 'https://unboxxbusiness.com/logo.png',
              width: 1200,
              height: 630,
              alt: 'About Us Offer',
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

<Info />

<Logo />
<Connect />
<Form />


        </Layout>
        </>
  )
}

export default about
