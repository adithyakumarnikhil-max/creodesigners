'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-foreground/80"
          >
            Loading...
          </motion.p>
        </div>
      </div>
    </MainLayout>
  );
}