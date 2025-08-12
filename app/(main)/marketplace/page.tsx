'use client';

export default function MarketplacePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Explore Our Marketplace
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover apps, plugins, and integrations that extend the power of our platform.
        </p>
      </section>

      {/* Marketplace Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Slack Integration',
            desc: 'Get real-time updates and actions directly in your Slack channels.',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
          },
          {
            title: 'Google Analytics',
            desc: 'Track user behavior and measure KPIs with GA4 support.',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
          },
          {
            title: 'Salesforce Sync',
            desc: 'Bi-directional CRM sync with Salesforce for contacts and pipelines.',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
          },
          {
            title: 'Zapier Automation',
            desc: 'Connect with 5,000+ apps and automate repetitive tasks.',
            logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
          },
          {
            title: 'Stripe Payments',
            desc: 'Accept payments, manage subscriptions, and handle invoices securely.',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
          },
          {
            title: 'Notion Sync',
            desc: 'Link notes, tasks, and wikis directly from your Notion workspace.',
            logo: 'https://cdn.worldvectorlogo.com/logos/notion.svg',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col items-center text-center"
          >
            <img src={item.logo} alt={item.title} className="h-12 w-12 mb-4 object-contain" />
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            <a
              href="#"
              className="mt-4 inline-block text-indigo-600 text-sm font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Build on Our Marketplace
          </h2>
          <p className="mt-4 text-gray-600">
            Are you a developer? Publish your own app or integration to reach more users.
          </p>
          <div className="mt-8">
            <a
              href="/developers"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500"
            >
              Join as Developer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
