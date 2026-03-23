import arifa11 from '@/assets/arifa11.jpg';
import arifa9 from '@/assets/arifa9.webp';
import arifa10 from '@/assets/arifa10.jpg';

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: arifa11, // ← gunakan file import,
    color: "from-blue-500/20 to-cyan-500/20",
    github: "#",
    demo: "#",
  },
  {
    title: "Learning Management System",
    description:
      "Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.",
    tags: ["Next.js", "TypeScript", "MongoDB", "WebRTC"],
    image: arifa10, // ← gunakan file import,
    color: "from-purple-500/20 to-pink-500/20",
    github: "#",
    demo: "#",
  },
 
 
  {
    title: "Video Editing Tutorial",
    description: "Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.",
    tags: ["Premiere Pro", "After Effects", "YouTube"],
    image: arifa9, // ← ini GIF,
    color: "from-red-500/20 to-orange-500/20",
    isContent: true,
    youtube: "#",
  },
  
];

export default function ProjectsCarousel() {
  const [projectIndex, setProjectIndex] = useState(0);

  // Autoplay setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const project = projects[projectIndex];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">Projects & Karya</h2>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={projectIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className={`h-full p-6 glass rounded-2xl shadow-card transition-all duration-300`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(e, { offset }) => {
                if (offset.x > 50) prevSlide();
                if (offset.x < -50) nextSlide();
              }}
            >
              <div
                className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}
              >
                <img 
  src={project.image} 
  alt={project.title} 
  className="w-full h-full object-cover rounded-xl"
/>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 justify-center">
                  {project.isContent && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                      Content
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold">{project.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-2 pt-2 flex-wrap">
                  {project.github && (
                    <Button variant="outline" size="sm" className="rounded-full" asChild>
                      <a href={project.github}>
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="rounded-full" asChild>
                      <a href={project.demo}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.youtube && (
                    <Button size="sm" className="rounded-full" asChild>
                      <a href={project.youtube}>
                        <Play className="h-4 w-4 mr-1" />
                        Watch
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 flex justify-center w-full gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all ${
                  i === projectIndex ? "w-4 bg-white" : "w-1 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}