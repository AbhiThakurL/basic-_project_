'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HeaderPage() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl p-4 lg:px-8 flex items-center justify-between" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DIOX</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12' // X icon
                  : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' // Hamburger
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Product with dropdown */}
          <div className="relative">
            <button
              onClick={() => setProductMenuOpen(!isProductMenuOpen)}
              className="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
            >
              Product
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                />
              </svg>
            </button>

            {isProductMenuOpen && (
              <div className="absolute z-20 mt-3 w-56 rounded-md bg-white shadow-lg ring-1 ring-gray-200">
                <div className="py-2">
                  <Link href="/analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Analytics
                  </Link>
                  <Link href="/engagement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Engagement
                  </Link>
                  <Link href="/security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Security
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Other menu items */}
          <Link href="/features" className="text-sm font-semibold text-gray-900">Features</Link>
          <Link href="/marketplace" className="text-sm font-semibold text-gray-900">Marketplace</Link>
          <Link href="/company" className="text-sm font-semibold text-gray-900">Company</Link>
        </div>

        {/* Login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu items */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-6">
          <div className="space-y-2">
            <Link href="/product" className="block text-sm font-semibold text-gray-900">
              Product
            </Link>
            <Link href="/features" className="block text-sm font-semibold text-gray-900">
              Features
            </Link>
            <Link href="/marketplace" className="block text-sm font-semibold text-gray-900">
              Marketplace
            </Link>
            <Link href="/company" className="block text-sm font-semibold text-gray-900">
              Company
            </Link>
            <Link href="/login" className="block text-sm font-semibold text-gray-900">
              Log in &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
