'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const teamMembers = [
    {
      name: "John Doe",
      role: "Principal Architect",
      quote: "Architecture is the thoughtful making of space.",
      image: "/placeholder.jpg"
    },
    {
      name: "Jane Smith",
      role: "Senior Interior Designer",
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      image: "/placeholder.jpg"
    },
    {
      name: "Robert Johnson",
      role: "Landscape Designer",
      quote: "The details are not the details. They make the design.",
      image: "/placeholder.jpg"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CREO</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-foreground/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Creating timeless spaces and objects that reflect your personality
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl font-bold mb-6">Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Story</span></h2>
                <p className="text-lg text-foreground/80 mb-6">
                  Established in 2019, CREO has grown from a small design studio to a multidisciplinary creative design studio. 
                  Our journey began with a simple vision: to make people live in their dream home with their comfort and happiness.
                </p>
                <p className="text-lg text-foreground/80 mb-6">
                  What started as a passion project has evolved into a comprehensive design solution that encompasses architecture, 
                  interiors, layout planning, landscaping, and construction. Our team of talented designers brings together 
                  diverse expertise to create holistic living experiences.
                </p>
                <p className="text-lg text-foreground/80">
                  Today, we continue to push boundaries in design while staying true to our core values of customer-centricity, 
                  quality, and innovation. Every project we undertake is a testament to our commitment to transforming spaces 
                  and, more importantly, lives.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h3 className="text-3xl font-bold mb-4">Since 2019</h3>
                    <p className="text-xl">Transforming spaces, enhancing lives</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={ref} className="py-20 bg-foreground/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Values</span></h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-black/20 rounded-2xl p-8 shadow-lg border border-foreground/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Customer Centricity</h3>
                <p className="text-foreground/80">

                  We prioritize our clients&apos; needs and aspirations, ensuring every design decision reflects their vision and lifestyle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-black/20 rounded-2xl p-8 shadow-lg border border-foreground/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Quality Excellence</h3>
                <p className="text-foreground/80">
                  We maintain the highest standards in design and execution, delivering exceptional results at competitive pricing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-black/20 rounded-2xl p-8 shadow-lg border border-foreground/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-foreground/80">
                  We constantly explore new ideas, materials, and techniques to create cutting-edge designs that stand the test of time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span></h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Meet the talented professionals who bring your dream spaces to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-black/20 rounded-2xl p-8 shadow-lg border border-foreground/10 transition-all duration-300 text-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>


                  <p className="text-foreground/80 italic">&quot;{member.quote}&quot;</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}