import { NextSeo } from 'next-seo';
import Layout from '@/components/Layout'
import React from 'react'

const privacy = () => {
  return (
    <>
    <NextSeo
        title="Privacy Policy | Unboxx Business"
        description="This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you interact with our website and services."
        keywords={['Responsive Web Design', 'SEO Optimization', 'Mobile App Design', 'Social Media Marketing', 'Google Analytics']}
        openGraph={{
          title: 'Privacy Policy| Unboxx Business',
          description: 'This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you interact with our website and services.',
          images: [
            {
              url: 'https://unboxxbusiness.com/logo.png',
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

<article className="prose max-w-none px-10 py-10 prose-a:text-blue-600 hover:prose-a:text-blue-500">
<h1>Privacy Policy for Unboxx Business</h1>

<h2>1. Introduction</h2>
<p>Unboxx Business (referred to as we, us, or our) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you interact with our website and services.</p>

<h2>2. Information We Collect</h2>
<p>We may collect the following types of personal information:</p>
<ul>
    <li>Contact Information: Name, email address, phone number, and other contact details.</li>
    <li>Log Data: Information about your device, IP address, browser type, and browsing activity.</li>
    <li>Usage Information: Details about your interactions with our website and services.</li>
    <li>Cookies and Tracking Technologies: We may use cookies and similar technologies to enhance your experience.</li>
</ul>

<h2>3. How We Use Your Information</h2>
<p>We use your personal information for the following purposes:</p>
<ul>
    <li>To provide and maintain our services.</li>
    <li>To respond to inquiries and requests.</li>
    <li>To personalize your experience.</li>
    <li>To improve our website and services.</li>
    <li>To send periodic updates and promotional materials (you can opt out at any time).</li>
</ul>

<h2>4. Disclosure of Your Information</h2>
<p>We may share your personal information with:</p>
<ul>
    <li>Service Providers: Third-party service providers who assist us in operating our website and providing our services.</li>
    <li>Legal Requirements: When required by law or to protect our rights and interests.</li>
</ul>

<h2>5. Data Security</h2>
<p>We employ reasonable security measures to protect your personal information. However, please be aware that no method of transmission over the internet is completely secure.</p>

<h2>6. Your Choices</h2>
<p>You have the right to:</p>
<ul>
    <li>Access, correct, or delete your personal information.</li>
    <li>Opt out of receiving promotional communications.</li>
    <li>Disable cookies in your browser settings.</li>
</ul>

<h2>7. Changes to this Privacy Policy</h2>
<p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website.</p>

<h2>8. Contact Us</h2>
<p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at [Contact Information].</p>

<p>Last Updated: 01|Aug|2023</p>

</article>

    </Layout>
    </>
  )
}

export default privacy
