'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="text-center max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              404
            </h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-6"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-foreground/80 mb-8"
          >
take 


            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
            >
              Go Home
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full font-medium transition-all duration-300 inline-block text-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}