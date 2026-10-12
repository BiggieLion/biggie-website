"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroCard } from "@/components/cards/HeroCard";
import { AboutCard } from "@/components/cards/AboutCard";
import { SkillsCard } from "@/components/cards/SkillsCard";
import { DiscordCard } from "@/components/cards/DiscordCard";
import { MusicCard } from "@/components/cards/MusicCard";
import { WeatherCard } from "@/components/cards/WeatherCard";
import { SocialCard } from "@/components/cards/SocialCard";
import { ProjectCard, projects } from "@/components/cards/ProjectCard";

export function BentoGrid() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const quietItem = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.05 },
    },
  };

  return (
    <main className="relative z-[1] min-h-screen px-4 py-8 md:px-8 md:py-14 flex items-start md:items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
      >
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <HeroCard />
        </motion.div>
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <AboutCard />
        </motion.div>

        <div id="projects" className="contents">
          {projects.slice(0, 4).map((project) => (
            <motion.div key={project.name} variants={item} className="lg:col-span-1">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="lg:col-span-1">
          <ProjectCard project={projects[4]} />
        </motion.div>
        <motion.div variants={item} className="lg:col-span-1">
          <SocialCard />
        </motion.div>
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <SkillsCard />
        </motion.div>

        <motion.div variants={quietItem} className="lg:col-span-1">
          <WeatherCard />
        </motion.div>
        <motion.div variants={quietItem} className="lg:col-span-1">
          <MusicCard />
        </motion.div>
        <motion.div variants={quietItem} className="sm:col-span-2 lg:col-span-2">
          <DiscordCard />
        </motion.div>
      </motion.div>
    </main>
  );
}
