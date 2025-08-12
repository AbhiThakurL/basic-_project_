'use client';

export default function SecurityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Enterprise-Grade Security
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your data is protected with industry-leading practices. We take security, privacy, and compliance seriously.
        </p>
      </section>

      {/* Key Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Data Encryption',
            desc: 'All data is encrypted in-transit (TLS 1.3) and at-rest (AES-256) to ensure confidentiality.',
            icon: '🔒',
          },
          {
            title: 'Role-Based Access',
            desc: 'Control who sees what with customizable role-based permissions for teams and users.',
            icon: '🧑‍💻',
          },
          {
            title: 'Compliance',
            desc: 'We’re compliant with GDPR, SOC 2, and CCPA to meet enterprise-grade requirements.',
            icon: '📜',
          },
          {
            title: '24/7 Monitoring',
            desc: 'Automated threat detection and human-monitored alerts protect you around the clock.',
            icon: '🛰️',
          },
          {
            title: 'Backups & Recovery',
            desc: 'Daily backups and geo-redundancy ensure your data is never lost — even in worst-case scenarios.',
            icon: '💾',
          },
          {
            title: 'Audit Logs',
            desc: 'Full transparency into account changes, access history, and user activity.',
            icon: '📊',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Want to talk to our security team?
          </h2>
          <p className="mt-4 text-gray-600">
            Contact us to learn more about our infrastructure, policies, and enterprise solutions.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500"
            >
              Contact Security
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
