import React from 'react';

const QuoteForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can add your form validation logic here.

    // If validation passes, you can submit the form to Netlify.
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(new FormData(e.target)).toString(),
      });

      if (response.ok) {
        // Redirect to the success page.
        window.location.href = '/success';
      } else {
        // Handle form submission error.
        console.error('Form submission failed:', response);
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  return (
    <form
      name="quote-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Netlify form fields */}
      <input type="hidden" name="form-name" value="quote-request" />
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Your name
          </label>
          <div className="mt-2.5 relative">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-base font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2.5 relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="project-brief" className="text-base font-medium text-gray-900">
            Project brief
          </label>
          <div className="mt-2.5 relative">
            <textarea
              name="project-brief"
              id="project-brief"
              placeholder="Enter your project brief"
              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="hidden">
          {/* Honeypot field to catch spam bots */}
          <label>
            Dont fill this out if you are human: <input name="bot-field" />
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuoteForm;
