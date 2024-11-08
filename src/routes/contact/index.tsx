import { component$ } from '@builder.io/qwik';
import { routeAction$, type DocumentHead, Form } from '@builder.io/qwik-city';
import { Resend } from 'resend';

export const useContactAction = routeAction$(async (data) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'galdaninfotech@gmail.com', // Replace with your email
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Sorry, something went wrong. Please try again later.',
    };
  }
});

export default component$(() => {
  const action = useContactAction();

  return (
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p class="mt-2 text-sm text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div class="mt-8">
          <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <Form action={action} class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div class="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div class="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </Form>

            {action.value?.success && (
              <div class="mt-4 p-4 bg-green-50 rounded-md">
                <p class="text-sm text-green-700">{action.value.message}</p>
              </div>
            )}

            {action.value?.success === false && (
              <div class="mt-4 p-4 bg-red-50 rounded-md">
                <p class="text-sm text-red-700">{action.value.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Contact Us',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with us. We\'d love to hear from you!',
    },
  ],
};