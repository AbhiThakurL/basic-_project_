'use client';

import Link from 'next/link';

export default function ProductPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Discover Our Powerful Product
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Everything you need to grow your business — all in one platform.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-indigo-600 px-6 py-3 text-white text-sm font-semibold shadow hover:bg-indigo-500"
          >
            Get Started
          </Link>
          <Link
            href="/demo"
            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What You Get</h2>
            <p className="mt-4 text-gray-600">
              Our product is designed to give you an edge in every aspect of your workflow.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Analytics Dashboard',
                desc: 'Track performance in real-time with intuitive dashboards.',
                icon: '📊',
              },
              {
                title: 'Customer Engagement',
                desc: 'Tools to keep your customers coming back.',
                icon: '💬',
              },
              {
                title: 'Advanced Security',
                desc: 'Built-in protection and role-based access control.',
                icon: '🔒',
              },
              {
                title: 'Fast Integrations',
                desc: 'Easily connect with your favorite apps and services.',
                icon: '⚡',
              },
              {
                title: 'Automation Tools',
                desc: 'Automate repetitive tasks with smart workflows.',
                icon: '🤖',
              },
              {
                title: '24/7 Support',
                desc: 'We’re always here to help — anytime, anywhere.',
                icon: '📞',
              },
            ].map((feature, idx) => (
              <div key={idx} className="rounded-lg bg-white p-6 shadow hover:shadow-md transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to get started?</h2>
          <p className="mt-4 text-indigo-200">
            Sign up today and start transforming your business within minutes.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-block rounded-md bg-white px-6 py-3 text-indigo-600 font-semibold shadow hover:bg-gray-100"
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
