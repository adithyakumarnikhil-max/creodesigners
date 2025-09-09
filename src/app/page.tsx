'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      title: 'Architecture',
      description: 'Creating the structural framework and overall design concept for residential and commercial spaces.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Interiors',
      description: 'Detailed finishing of spaces with space planning, material selection, and decorative elements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Layout Planning',
      description: 'Optimizing space utilization and flow within a given area for efficient use.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: 'Landscaping',
      description: 'Extending the design vision to outdoor spaces with garden design and natural elements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Construction',
      description: 'End-to-end execution of designed concepts with proper quality control.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  // Auto rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Intersection Observer for animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-secondary/10 to-background z-0"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-primary/10 via-secondary/5 to-transparent z-0"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-center lg:text-left"
              >
                <motion.h1 
                  className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  DESIGN YOUR <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DREAM HOME</span> WITH CREO
                </motion.h1>
                <motion.p 
                  className="text-xl text-foreground/90 mb-10 max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  We are a one-stop solution for complete home designing. Our multidisciplinary team of designers creates timeless spaces and objects that reflect your personality.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Get Started
                  </button>
                  <button className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Portfolio
                  </button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-secondary/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <h2 className="text-5xl font-bold mb-6">Since 2019</h2>
                      <p className="text-2xl font-medium">Creating dream homes with comfort & happiness</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/20"
                  animate={{ 
                    y: [0, -25, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/20"
                  animate={{ 
                    y: [0, 25, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* Services Section */}
        <section ref={ref} className="py-20 bg-gradient-to-b from-background to-foreground/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span></h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-lg">
                We offer a comprehensive range of design services to transform your space into a dream home.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -15 }}
                  className={`bg-white/80 dark:bg-black/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 transition-all duration-500 cursor-pointer hover:shadow-2xl ${
                    activeService === index ? 'ring-4 ring-primary/30' : ''
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="text-primary mb-6 p-4 rounded-2xl bg-primary/10 w-20 h-20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-primary font-semibold">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/80 to-primary/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-10">
                      <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
                      <p className="text-2xl font-medium">To make people live in their dream home with their comfort & happiness</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Customer Centric <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Approach</span></h2>
                <p className="text-xl text-foreground/80 mb-10 leading-relaxed">
                  We are committed to being the best customer centric company where customers can discover their dream home and feel that everything is possible with CREO.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-2xl mr-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Quality at Competitive Pricing</h3>
                      <p className="text-foreground/80 leading-relaxed">We deliver excellent quality at very less price without compromising on design excellence.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-2xl mr-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">End-to-End Execution</h3>
                      <p className="text-foreground/80 leading-relaxed">From design conceptualization to construction execution, we handle every aspect seamlessly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-2xl mr-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Attention to Detail</h3>
                      <p className="text-foreground/80 leading-relaxed">Our team focuses on removing flaws and adding aesthetics to provide comfort through design.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-foreground/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Client <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Testimonials</span></h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-lg">
                Hear what our satisfied clients have to say about their experience with CREO.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 dark:bg-black/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">C{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Client Name</h4>
                      <p className="text-foreground/60 text-sm">Bangalore</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic leading-relaxed mb-6">
                    &quot;Excellent quality at very less price. CREO team made our dream home a reality. My family is very happy with the design & quality. The attention to detail in every aspect, especially our pooja unit, was remarkable.&quot;
                  </p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}