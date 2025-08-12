'use client';

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          About Our Company
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We build tools to empower modern businesses and create a positive impact on the world.
        </p>
      </section>

      {/* Mission + Vision */}
      <section className="max-w-5xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-3 text-gray-600">
            To deliver world-class solutions that help businesses grow faster, work smarter, and connect deeply with their customers.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mt-3 text-gray-600">
            To become the most trusted platform for business intelligence, collaboration, and growth by 2030.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-3 text-center">
          {[
            { label: 'Customers', value: '15,000+' },
            { label: 'Team Members', value: '120+' },
            { label: 'Countries Served', value: '35+' },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-indigo-600">{stat.value}</h3>
              <p className="text-sm text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Meet the Team</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Aman Verma',
              title: 'Founder & CEO',
              image: 'https://randomuser.me/api/portraits/men/32.jpg',
            },
            {
              name: 'Priya Sharma',
              title: 'Head of Product',
              image: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            {
              name: 'Rahul Joshi',
              title: 'Lead Engineer',
              image: 'https://randomuser.me/api/portraits/men/85.jpg',
            },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto w-28 h-28 rounded-full object-cover"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Join Our Mission</h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-100">
          Want to be a part of a fast-growing and impact-driven company? Check out our careers.
        </p>
        <div className="mt-6">
          <a
            href="/careers"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100"
          >
            View Careers
          </a>
        </div>
      </section>
    </div>
  );
}
