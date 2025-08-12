'use client';

export default function FeaturesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Powerful Features That Scale With You
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the tools that help you grow faster, smarter, and more efficiently.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Real-Time Analytics',
            desc: 'Track performance instantly with detailed reports and visualizations.',
            icon: '📈',
          },
          {
            title: 'Collaboration Tools',
            desc: 'Chat, share, and work together from anywhere in real-time.',
            icon: '🤝',
          },
          {
            title: 'AI-Powered Suggestions',
            desc: 'Boost productivity with intelligent automation and smart workflows.',
            icon: '🤖',
          },
          {
            title: 'Custom Integrations',
            desc: 'Connect with your favorite tools using our open API and integrations.',
            icon: '🔌',
          },
          {
            title: 'Role-Based Access',
            desc: 'Manage access levels and protect data with detailed permission controls.',
            icon: '🛡️',
          },
          {
            title: 'Mobile App',
            desc: 'Stay connected with our fully responsive iOS & Android apps.',
            icon: '📱',
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to explore all features?
          </h2>
          <p className="mt-4 text-gray-600">
            Start your free trial today and unlock the full potential of our platform.
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
