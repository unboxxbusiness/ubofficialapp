import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'
import { NextSeo } from 'next-seo';

const terms = () => {
  return (
<>
<NextSeo
        title="Terms Policy | Unboxx Business"
        description="you agree to comply with and be bound by these Terms and Conditions"
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'Terms Policy | Unboxx Business',
          description: 'you agree to comply with and be bound by these Terms and Conditions',
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

<h1>Terms and Conditions for Unboxx Business</h1>

<h2>1. Acceptance of Terms</h2>
<p>you agree to comply with and be bound by these Terms and Conditions</p>

<h2>2. Services Offered</h2>
<p>Unboxx Business provides various services related to web design , app development , digital marketing & other Digital servcies. These services are subject to these Terms and Conditions.</p>

<h2>3. User Conduct</h2>
<p>You agree to use our services for lawful purposes only and not to engage in any activity that may harm, disrupt, or interfere with our services or the rights of other users.</p>

<h2>4. Privacy Policy</h2>
<p>Your use of our services is also governed by our <Link href="/privacy">Privacy Policy</Link>. By using our services, you consent to the collection and use of your personal information as outlined in the Privacy Policy.</p>

<h2>5. Intellectual Property</h2>
<p>All content, trademarks, logos, and intellectual property displayed on our website and services are the property of Unboxx Business and are protected by applicable intellectual property laws. You may not use, reproduce, or distribute any of our intellectual property without our prior written consent.</p>

<h2>6. Limitation of Liability</h2>
<p>We make no warranties or representations about the accuracy, completeness, or reliability of our services. We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our services.</p>

<h2>7. Termination</h2>
<p>We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for any conduct that we believe violates these Terms and Conditions or is harmful to other users or us.</p>

<h2>8. Changes to Terms</h2>
<p>We may modify or update these Terms and Conditions at any time without prior notice. Your continued use of our services after any changes constitute your acceptance of the revised terms.</p>

<h2>9. Governing Law</h2>
<p>These Terms and Conditions are governed by and construed in accordance with the laws of Delhi. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Delhi.</p>

<h2>10. Contact Information</h2>
<p>If you have any questions or concerns regarding these Terms and Conditions or our services, please contact us at info@unboxxbusiness.com.</p>

<p>Last Updated: 01|Aug|2023</p>



</article>


 </Layout>
 </>
  )
}

export default terms
