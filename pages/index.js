import { NextSeo } from 'next-seo';
import Feature from "@/components/Home/Feature"
import Form from "@/components/Home/Form"
import Logo from "@/components/Home/Logo"
import Ser from "@/components/Home/Ser"
import Testimonial from "@/components/Home/Testimonial"
import Video from "@/components/Home/Video"
import Layout from "@/components/Layout"


export default function Home() {
  return (
   
    <>
    <NextSeo
        title="Apka Apna Custom Branded App Book Karein"
        description="Digital Presence Hogi Tabhi Business ki Pehchaan Hogi isliye website design ho ya app development phir chahe social media marketing sab services milegi ek platform par"
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'Apka Apna Custom Branded App Book Karein',
          description: 'Digital Presence Hogi Tabhi Business ki Pehchaan Hogi isliye website design ho ya app development phir chahe social media marketing sab services milegi ek platform par',
          images: [
            {
              url: 'https://unboxxbusiness.com/uboffer.png',
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
    <Form />
  <Logo />
    <Ser />
    <Feature />
    <Video />
    <Testimonial />
    </Layout>
    
  
    </>
  )
}
