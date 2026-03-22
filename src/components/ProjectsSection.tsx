"use client";

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: '🛒', 
    isImageFile: false, // Set true jika 'image' berisi path file (misal: '/img.png')
    color: 'from-blue-500/20 to-cyan-500/20',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    image: '📚',
    isImageFile: false,
    color: 'from-purple-500/20 to-pink-500/20',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Seri tutorial video editing dengan 100+ episode.',
    tags: ['Premiere Pro', 'After Effects'],
    image: '🎬',
    isImageFile: false,
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: 'https://youtube.com',
  },
];

export default function ProjectsSection() {
  // Setup Embla dengan Autoplay 3 detik & Loop
  // Kita definisikan plugin di luar hook agar TypeScript tidak bingung (tanda merah hilang)
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [autoplay]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} // Jika ini merah, pastikan framer-motion versi terbaru
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects & Karya</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto group">
          {/* Viewport: Bisa di-drag dengan mouse/jari */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4" ref={emblaRef}>
            <div className="flex -ml-4">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
                  <div className="h-full p-6 bg-background/50 backdrop-blur-md border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 my-4">
                    
                    {/* Visual Area: motion.img atau motion.span */}
                    <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                      {project.isImageFile ? (
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          whileHover={{ scale: 1.1 }}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <motion.span 
                          className="text-6xl select-none"
                          whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                          {project.image}
                        </motion.span>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      
                      {/* Tombol dengan Target Blank (Aman & Tab Baru) */}
                      <div className="flex gap-2 pt-4">
                        {project.github && (
                          <Button variant="outline" size="sm" className="rounded-full" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" /> Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" className="rounded-full" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" /> Demo
                            </a>
                          </Button>
                        )}
                        {project.youtube && (
                          <Button size="sm" className="rounded-full" asChild>
                            <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                              <Play className="h-4 w-4 mr-1" /> Watch
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi Manual di samping */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 shadow-md rounded-full z-10 hidden md:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 shadow-md rounded-full z-10 hidden md:flex"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}