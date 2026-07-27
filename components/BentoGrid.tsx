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

// projects[0] pt2-backend-v2
// projects[1] pt2-frontend
// projects[2] pt2-ai
// projects[3] Introducción a Mongoose
// projects[4] hours-backend

export function BentoGrid() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8 md:py-12 flex items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
      >
        {/* Row 1: Hero (2 cols) | About (2 cols) */}
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <HeroCard />
        </motion.div>
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <AboutCard />
        </motion.div>

        {/* Row 2: pt2-backend | pt2-frontend | pt2-ai | Mongoose (1 col each) */}
        <div id="projects" className="contents">
          {projects.slice(0, 4).map((project) => (
            <motion.div key={project.name} variants={item} className="lg:col-span-1">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Row 3: hours-backend (1) | Connect (1) | Tech Stack (2) */}
        <motion.div variants={item} className="lg:col-span-1">
          <ProjectCard project={projects[4]} />
        </motion.div>
        <motion.div variants={item} className="lg:col-span-1">
          <SocialCard />
        </motion.div>
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <SkillsCard />
        </motion.div>

        {/* Row 4: Weather (1) | Music (1) | Discord (2) */}
        <motion.div variants={item} className="lg:col-span-1">
          <WeatherCard />
        </motion.div>
        <motion.div variants={item} className="lg:col-span-1">
          <MusicCard />
        </motion.div>
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <DiscordCard />
        </motion.div>
      </motion.div>
    </main>
  );
}
