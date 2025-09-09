'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Principal Architect",
      bio: "With over 15 years of experience in architectural design, Alex leads our team with a vision for innovative and sustainable design solutions.",
      quote: "Architecture is the thoughtful making of space.",
      expertise: ["Residential Design", "Sustainable Architecture", "Project Management"],
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Senior Interior Designer",
      bio: "Sarah brings creativity and functionality together, crafting interiors that are both beautiful and practical for everyday living.",
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      expertise: ["Luxury Interiors", "Space Planning", "Color Theory"],
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Landscape Designer",
      bio: "Michael specializes in creating outdoor spaces that seamlessly blend with the natural environment and enhance the overall property aesthetic.",
      quote: "The details are not the details. They make the design.",
      expertise: ["Garden Design", "Hardscaping", "Native Plant Landscaping"],
      image: "/placeholder.jpg"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Construction Manager",
      bio: "Emma ensures that our design visions are flawlessly executed through meticulous project management and quality control.",
      quote: "Quality is never an accident; it is always the result of high intention.",
      expertise: ["Project Coordination", "Quality Assurance", "Budget Management"],
      image: "/placeholder.jpg"
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Urban Designer",
      bio: "David focuses on creating cohesive urban environments that enhance community living and promote sustainable development.",
      quote: "Cities are the greatest creations of humanity.",
      expertise: ["Urban Planning", "Public Spaces", "Community Development"],
      image: "/placeholder.jpg"
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Design Consultant",
      bio: "Priya brings a global perspective to our projects with expertise in both traditional and contemporary design approaches.",
      quote: "Good design is as little design as possible.",
      expertise: ["Cultural Design", "Material Innovation", "User Experience"],
      image: "/placeholder.jpg"
    }
  ];

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
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-foreground/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Meet the talented professionals who bring your dream spaces to life
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={ref} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experts</span></h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Our multidisciplinary team of designers and architects is dedicated to creating exceptional spaces
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-black/20 rounded-2xl overflow-hidden shadow-lg border border-foreground/10 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-tr from-secondary to-primary opacity-80 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                          <span className="text-4xl font-bold">{member.name.charAt(0)}</span>
                        </div>
                        <h3 className="text-2xl font-bold">{member.name}</h3>
                        <p className="text-lg text-white/90">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-foreground/80 italic mb-4">&quot;{member.quote}&quot;</p>
                    <p className="text-foreground/80 mb-6">{member.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <button className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary/10 flex items-center justify-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary/10 flex items-center justify-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary/10 flex items-center justify-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </button>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented designers and architects to join our growing team.
              </p>
              <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Open Positions
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}