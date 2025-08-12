'use client';

export default function AnalyticsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Real-Time Analytics Dashboard
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Monitor user behavior, track performance, and make smarter decisions with data.
        </p>
      </section>

      {/* Analytics Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Visitors Today',
            value: '4,320',
            trend: '+8.5%',
            icon: '👥',
          },
          {
            title: 'Page Views',
            value: '12,890',
            trend: '+3.2%',
            icon: '📄',
          },
          {
            title: 'Bounce Rate',
            value: '32.5%',
            trend: '-1.1%',
            icon: '📉',
          },
          {
            title: 'Avg. Session Time',
            value: '3m 45s',
            trend: '+6.9%',
            icon: '⏱️',
          },
          {
            title: 'Signups',
            value: '210',
            trend: '+12.4%',
            icon: '📝',
          },
          {
            title: 'Conversions',
            value: '78',
            trend: '+9.7%',
            icon: '💰',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow border p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm text-green-600 font-medium">{item.trend}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{item.value}</h3>
            <p className="text-gray-600">{item.title}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Need deeper insights?
          </h2>
          <p className="mt-4 text-gray-600">
            Upgrade to Pro and unlock advanced reporting, export options, and more.
          </p>
          <div className="mt-8">
            <a
              href="/pricing"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500"
            >
              View Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
