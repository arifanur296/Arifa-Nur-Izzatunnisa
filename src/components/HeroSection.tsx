import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: Github, label: 'Github' },
    { icon: Linkedin, label: 'Linkedin' },
    { icon: Youtube, label: 'Youtube' },
    { icon: Instagram, label: 'Instagram' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero py-20 lg:py-0">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* SISI KIRI: FOTO BULAT + BORDER + GLOW */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              {/* Efek Pendaran di Belakang (Shadow Glow) */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-500"></div>
              
              <img 
                src="/path-to-your-photo.jpg" 
                alt="Arifa Nur Izzatunnisa"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full object-cover border-4 border-primary shadow-glow z-10"
              />
            </div>
          </div>

          {/* SISI KANAN: TEKS */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="mb-6">
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary">
                
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              
              <br />
              <span className="text-gradient">Arifa's Portofolio</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Saya membangun aplikasi web yang indah dan fungsional, 
              serta membagikan pengetahuan melalui konten yang inspiratif.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" className="rounded-full px-8 shadow-glow">Lihat Projects</Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">Hubungi Saya</Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              {socials.map((social, index) => (
                <a key={index} href="#" className="p-3 rounded-full glass hover:shadow-glow transition-all">
                  <social.icon className="h-5 w-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float z-20"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </button>
    </section>
  );
 }