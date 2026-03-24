
import { useTranslation } from 'react-i18next';


import { motion } from 'framer-motion';

// 1. Perbaikan Struktur Data agar logis dan tidak tertukar
const skillsData = {
  IPA: [
    { name: 'Biologi', level: 95 },
    { name: 'Kimia', level: 90 },
    { name: 'Fisika', level: 88 },
   
   
  ],
  IPS: [
    { name: 'Sosiologi', level: 90 },
    { name: 'Sejarah', level: 85 },
    { name: 'Geografi', level: 88 },
    { name: 'Ekonomi', level: 82 },
    
  ],
  BAHASA: [
    { name: 'Bahasa Inggris', level: 95 },
    { name: 'Bahasa Indonesia', level: 80 },
    { name: 'Bahasa Arab', level: 75 },
  
    
  ],
};

// 2. Komponen SkillBar yang sudah diperbaiki tipenya
function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm md:text-base">{name}</span>
        <span className="text-xs md:text-sm text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block tracking-widest uppercase text-sm">Keahlian</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & Teknologi
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* 1. IPA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 glass rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-display text-xl font-bold">IPA</h3>
            </div>
            <div className="space-y-6">
              {skillsData.IPA.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* 2. IPS & Language Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 glass rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-display text-xl font-bold">IPS</h3>
            </div>
            <div className="space-y-6">
              {skillsData.IPS.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* 3. BAHASA & DevOps Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 glass rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-display text-xl font-bold">BAHASA</h3>
            </div>
            <div className="space-y-6">
              {skillsData.BAHASA.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section> 
  ); 
 }