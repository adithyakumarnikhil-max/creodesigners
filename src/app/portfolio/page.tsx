'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'interior', name: 'Interior' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Modern Villa Design',
      category: 'residential',
      description: 'Contemporary villa with open floor plan and sustainable materials',
      image: '/placeholder.jpg'
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'commercial',
      description: 'Innovative workspace design promoting collaboration and productivity',
      image: '/placeholder.jpg'
    },
    {
      id: 3,
      title: 'Luxury Apartment',
      category: 'interior',
      description: 'Elegant interior design with custom furniture and smart home integration',
      image: '/placeholder.jpg'
    },
    {
      id: 4,
      title: 'Garden Retreat',
      category: 'landscape',
      description: 'Serene outdoor space with water features and native plant landscaping',
      image: '/placeholder.jpg'
    },
    {
      id: 5,
      title: 'Urban Loft',
      category: 'residential',
      description: 'Industrial-chic loft conversion with modern amenities',
      image: '/placeholder.jpg'
    },
    {
      id: 6,
      title: 'Restaurant Design',
      category: 'commercial',
      description: 'Contemporary dining space with custom lighting and acoustic solutions',
      image: '/placeholder.jpg'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Portfolio</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-foreground/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Explore our diverse range of successful projects and design solutions
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-foreground/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white dark:bg-black/20 text-foreground hover:bg-foreground/10'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={ref} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span></h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Discover our latest work and see how we transform spaces into extraordinary experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-black/20 rounded-2xl overflow-hidden shadow-lg border border-foreground/10 transition-all duration-300 group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-primary px-6 py-3 rounded-full font-medium">
                        View Project
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-3">
                      {filters.find(f => f.id === project.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/80">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '200+', label: 'Projects Completed' },
                { value: '50+', label: 'Happy Clients' },
                { value: '5', label: 'Years Experience' },
                { value: '25+', label: 'Team Members' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-white"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-xl">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}