"use client";

import { motion } from "framer-motion";
import { HeroCard } from "@/components/cards/HeroCard";
import { AboutCard } from "@/components/cards/AboutCard";
import { SkillsCard } from "@/components/cards/SkillsCard";
import { DiscordCard } from "@/components/cards/DiscordCard";
import { MusicCard } from "@/components/cards/MusicCard";
import { WeatherCard } from "@/components/cards/WeatherCard";
import { SocialCard } from "@/components/cards/SocialCard";
import { ProjectCard, projects } from "@/components/cards/ProjectCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function BentoGrid() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8 md:py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-auto"
      >
        {/* Row 1: Hero (2 cols), About (2 cols) */}
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <HeroCard />
        </motion.div>
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <AboutCard />
        </motion.div>

        {/* Row 2: Projects (3 cols) + Social (1 col) */}
        <div id="projects" className="contents">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              variants={item}
              className={i < 3 ? "lg:col-span-1 sm:col-span-1" : "sm:col-span-1 lg:col-span-2"}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Row 3: Skills (2 cols), Social (1 col), Music (1 col) */}
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <SkillsCard />
        </motion.div>
        <motion.div variants={item} className="lg:col-span-1">
          <SocialCard />
        </motion.div>
        <motion.div variants={item} className="lg:col-span-1">
          <MusicCard />
        </motion.div>

        {/* Row 4: Discord (2 cols), Weather (2 cols) */}
        <motion.div variants={item} className="sm:col-span-1 lg:col-span-2">
          <DiscordCard />
        </motion.div>
        <motion.div variants={item} className="lg:col-span-1">
          <WeatherCard />
        </motion.div>
      </motion.div>
    </main>
  );
}
