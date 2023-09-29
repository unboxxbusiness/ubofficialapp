import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '@/components/Layout'
import Main from '@/components/Website/Main'
import Webfeature from '@/components/Website/Webfeature'
import Demoproject from '@/components/Website/Demoproject'
import Form from '@/components/Home/Form'


const web = () => {
  return (
    <>
    <NextSeo
        title="Website Development Company | Unboxx Business"
        description="Aapki dukaan ya business agar offline ya local hain use global banane ka sabse best tarika hain website bana kar online 24*7 wala business shop open karna just per day chai ☕ cost mein"
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'Website Development Company | Unboxx Business',
          description: 'Aapki dukaan ya business agar offline ya local hain use global banane ka sabse best tarika hain website bana kar online 24*7 wala business shop open karna just per day chai ☕ cost mein',
          images: [
            {
              url: 'https://unboxxbusiness.com/weboffer.png',
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
   <Main />
   <Webfeature />
   <Demoproject />
   <Form />
   </Layout>
    </>
  )
}

export default web
