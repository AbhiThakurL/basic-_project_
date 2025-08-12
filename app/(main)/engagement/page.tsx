'use client';

export default function EngagementPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          User Engagement Metrics
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Understand how users interact with your platform in real time.
        </p>
      </section>

      {/* Metrics Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Active Users',
            value: '1,872',
            trend: '+6.4%',
            icon: '🟢',
          },
          {
            title: 'Daily Comments',
            value: '532',
            trend: '+3.1%',
            icon: '💬',
          },
          {
            title: 'Likes',
            value: '8,341',
            trend: '+7.8%',
            icon: '❤️',
          },
          {
            title: 'Shares',
            value: '1,129',
            trend: '+5.2%',
            icon: '🔁',
          },
          {
            title: 'Avg. Session Length',
            value: '4m 02s',
            trend: '+2.3%',
            icon: '⏳',
          },
          {
            title: 'Return Rate',
            value: '47.6%',
            trend: '+1.5%',
            icon: '🔄',
          },
        ].map((item, index) => (
          <div
            key={index}
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

      {/* CTA */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Want deeper user insights?
          </h2>
          <p className="mt-4 text-gray-600">
            Connect heatmaps, session replays, and retention analysis tools.
          </p>
          <div className="mt-8">
            <a
              href="/product"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
