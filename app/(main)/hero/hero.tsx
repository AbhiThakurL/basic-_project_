'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="  bg-white py-20 ">
      <div className="max-w-7xl mx-auto  px-4 flex flex-col-reverse lg:flex-row items-center  gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Build Faster with <br className="hidden sm:inline" />
            <span className="text-indigo-600">Next.js & Tailwind</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Launch modern websites with blazing speed, great SEO, and responsive designs — all in one stack.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              href="/signup"
              className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-md text-base font-semibold hover:bg-indigo-500 transition"
            >
              Get Started
            </Link>
            <Link
              href="/product"
              className="inline-block px-6 py-3 text-indigo-600 bg-gray-100 rounded-md text-base font-semibold hover:bg-gray-200 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
      <div className="max-w-4xl mx-auto text-center flex items-center justify-center px-10">
     

        {/* Hero Image Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=' '
        >
          <img
            src="https://images.unsplash.com/photo-1653033912341-9595a1beda17?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="App Screenshot"
            className='w-[50%] h-[60%] rounded-full '
          />
        
          
        </motion.div>
      </div>



      </div>
    </section>
  );
}
