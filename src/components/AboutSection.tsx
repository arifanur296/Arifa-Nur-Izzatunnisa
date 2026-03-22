import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  const accordionData = [
    {
      title: "Passionate Developer",
      content: "Saya adalah seorang Fullstack Web Developer dengan passion yang kuat dalam menciptakan solusi digital yang inovatif. Dengan pengalaman lebih dari 5 tahun, saya telah membantu berbagai klien mewujudkan ide mereka menjadi aplikasi yang powerful."
    },
    {
      title: "Content Creator",
      content: "Selain coding, saya aktif berbagi ilmu melalui platform digital. Saya percaya bahwa mengajar adalah cara terbaik untuk memperdalam pemahaman kita sendiri tentang teknologi yang terus berkembang."
    },
    
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block tracking-widest uppercase text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl relative z-10">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 flex items-center justify-center">
                <motion.span 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-9xl"
                >
                  👨‍💻
                </motion.span>
              </div>
            </div>
            {/* Floating Card */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-card z-20 border border-white/20"
            >
              <p className="font-display font-bold text-3xl text-primary">5+ Tahun</p>
              <p className="text-sm font-medium text-muted-foreground">Dedikasi Coding</p>
            </motion.div>
          </motion.div>

          {/* Right: Content & Accordion */}
          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-primary/10 overflow-hidden bg-background/50"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-display font-bold text-lg md:text-xl">{item.title}</span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${activeAccordion === i ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 text-muted-foreground leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-2xl text-center border border-white/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
 } 