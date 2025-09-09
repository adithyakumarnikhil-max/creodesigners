'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      id: 'architecture',
      title: 'Architecture',
      description: 'Creating the structural framework and overall design concept for residential and commercial spaces.',
      details: [
        'Conceptual design and planning',
        'Building permits and documentation',
        'Structural engineering coordination',
        'Sustainable design solutions',
        '3D visualization and rendering'
      ],
      image: '/placeholder.jpg'
    },
    {
      id: 'interiors',
      title: 'Interiors',
      description: 'Detailed finishing of spaces with space planning, material selection, and decorative elements.',
      details: [
        'Space planning and layout optimization',
        'Material and finish selection',
        'Custom furniture design',
        'Lighting design',
        'Soft furnishing consultation'
      ],
      image: '/placeholder.jpg'
    },
    {
      id: 'layout',
      title: 'Layout Planning',
      description: 'Optimizing space utilization and flow within a given area for efficient use.',
      details: [
        'Functional space analysis',
        'Traffic flow optimization',
        'Zoning and segmentation',
        'Storage solutions',
        'Accessibility planning'
      ],
      image: '/placeholder.jpg'
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      description: 'Extending the design vision to outdoor spaces with garden design and natural elements.',
      details: [
        'Outdoor living space design',
        'Garden and plant selection',
        'Hardscaping and softscaping',
        'Water features and irrigation',
        'Seasonal maintenance planning'
      ],
      image: '/placeholder.jpg'
    },
    {
      id: 'construction',
      title: 'Construction',
      description: 'End-to-end execution of designed concepts with proper quality control.',
      details: [
        'Project management and coordination',
        'Quality assurance and control',
        'Timeline and budget management',
        'Vendor and contractor coordination',
        'Final inspection and handover'
      ],
      image: '/placeholder.jpg'
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
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-foreground/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A comprehensive range of design services to transform your space into a dream home
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={ref} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Complete <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Design Solutions</span></h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                From initial concept to final construction, we provide end-to-end services for your dream home
              </p>
            </motion.div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:grid-flow-col-dense'} gap-12 items-center`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <h3 id={service.id} className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-foreground/80 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="mt-8 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-8">
                          <h4 className="text-3xl font-bold mb-4">{service.title}</h4>
                          <p className="text-xl">Professional Service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">

                Let our expert team create the dream home you&apos;ve always envisioned with our comprehensive design services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}