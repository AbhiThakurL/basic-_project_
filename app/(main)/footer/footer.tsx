'use client';

import Link from 'next/link';

export default function FooterPage() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">YourBrand</h2>
          <p className="text-sm text-gray-400">
            Powerful tools for your business. Streamline everything in one place.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/product" className="hover:text-white">Overview</Link></li>
            <li><Link href="/features" className="hover:text-white">Features</Link></li>
            <li><Link href="/analytics" className="hover:text-white">Analytics</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="https://twitter.com" target="_blank" className="hover:text-white">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" className="hover:text-white">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 px-6 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
