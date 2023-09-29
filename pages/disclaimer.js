import { NextSeo } from 'next-seo';
import Layout from '@/components/Layout'
import React from 'react'

const disclaimer = () => {
  return (

<>
<NextSeo
        title="Disclaimer Policy | Unboxx Business"
        description="This Disclaimer Policy applies to the website and services provided by Unboxx Business"
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'Disclaimer Policy | Unboxx Business',
          description: 'This Disclaimer Policy applies to the website and services provided by Unboxx Business',
          images: [
            {
              url: 'https://unboxxbusiness.com/logo.png',
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

<article className="prose max-w-none px-10 py-10 prose-a:text-blue-600 hover:prose-a:text-blue-500">
<h1>Disclaimer Policy for Unboxx Business</h1>

<h2>1. Introduction</h2>
<p>This Disclaimer Policy applies to the website and services provided by Unboxx Business (referred to as we, us, or our). By accessing our website and using our services you acknowledge and agree to the terms and conditions outlined in this policy. If you do not agree with any part of this policy please refrain from using our website and services.</p>

<h2>2. Information Accuracy</h2>
<p>While we make every effort to provide accurate and up-to-date information we do not guarantee the accuracy, completeness, or reliability of any content on our website or in our services. The information provided is for general informational purposes only and should not be considered as professional advice. Users are encouraged to verify any information independently before making decisions based on it.</p>

<h2>3. External Links</h2>
<p>Our website may contain links to external websites or third-party content. These links are provided for convenience and informational purposes only. We do not endorse or have control over the content, policies, or practices of these external websites. We are not responsible for any harm or losses incurred through interactions with external websites linked from our platform.</p>

<h2>4. Business Services</h2>
<p>Any services or products offered by Unboxx Business are provided on an as-is and as-available basis. We do not make any warranties or guarantees, express or implied, regarding the quality, suitability, or availability of our services. Users are solely responsible for their decisions and actions related to our services.</p>

<h2>5. Limitation of Liability</h2>
<p>Under no circumstances shall Unboxx Business or its affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages, including but not limited to loss of data, revenue, or profits, arising from the use of our website or services. This limitation of liability applies to the fullest extent permitted by applicable law.</p>

<h2>6. Changes to Policy</h2>
<p>We reserve the right to modify or update this Disclaimer Policy at any time. Any changes will be effective immediately upon posting on our website. Users are encouraged to review this policy regularly to stay informed about our practices.</p>

<h2>7. Contact Information</h2>
<p>If you have any questions or concerns regarding this Disclaimer Policy or any other aspect of our services please contact us at [Contact Information].</p>

<p>Last Updated: 01|Aug|2023</p>


</article>


    </Layout>
    </>

  )
}

export default disclaimer
