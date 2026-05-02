"use client";

import {
  domAnimation,
  LazyMotion,
  motion,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const skillsData = [
  { name: "Next.js", target: 98 },
  { name: "TypeScript", target: 95 },
  { name: "Prisma", target: 99 },
  { name: "Framer", target: 97 },
];

export default function SkillsSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="our-skills" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4 relative group uppercase">
              Our Skills
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
            </h2>
            <div
              className="h-1 w-20 bg-primary/20 rounded-full"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden lg:block w-1/2"
            >
              <Image
                src="/imgs/skills.png"
                alt="Technical Skills Visualization"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Right Side: Skills Bars */}
            <ul className="w-full lg:w-1/2 space-y-10" role="list">
              {skillsData.map((skill, index) => (
                <li key={index}>
                  <SkillBar name={skill.name} target={skill.target} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

function SkillBar({ name, target }: { name: string; target: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(target);
    }
  }, [isInView, springValue, target]);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold uppercase tracking-wide">{name}</h3>
        <motion.span className="text-primary font-black border border-primary/20 rounded px-2 py-1 text-sm">
          <motion.span>{displayValue}</motion.span>%
        </motion.span>
      </div>

      <div className="h-8 bg-secondary/30 rounded-sm relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${target}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
}
