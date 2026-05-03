"use client";

import {
  motion,
  useScroll,
  useTransform,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  MapPin,
  Code2,
  Palette,
  Megaphone,
} from "lucide-react";

const servicesData = [
  { id: 1, title: "Security", icon: ShieldCheck },
  { id: 2, title: "Fixing Issues", icon: Wrench },
  { id: 3, title: "Location", icon: MapPin },
  { id: 4, title: "Coding", icon: Code2 },
  { id: 5, title: "Design", icon: Palette },
  { id: 6, title: "Marketing", icon: Megaphone },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="services"
        ref={sectionRef}
        aria-labelledby="services-title"
        className="relative overflow-hidden bg-secondary py-24 dark:bg-zinc-900/60 mt-10"
      >
        {/* --- Zigzag Top Divider --- */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 z-20 w-full h-[30px]" // ضفنا z-20 عشان نضمن إنها فوق الخلفية
          style={{
            backgroundColor: "bg-secondary",
            backgroundImage: `
      linear-gradient(135deg, white 25%, transparent 25%), 
      linear-gradient(225deg, white 25%, transparent 25%)
    `,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-6 mt-10">
          {/* Title Section */}
          <div className="mb-20 flex flex-col items-center">
            <h2
              id="services-title"
              className="relative group z-10 mb-4 cursor-default text-4xl font-bold tracking-tight"
            >
              Services
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </h2>
            <div
              aria-hidden="true"
              className="z-10 h-1 w-20 rounded-full bg-primary/20"
            />
          </div>

          <motion.ul
            role="list"
            style={{ y: yParallax }}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {servicesData.map((service, index) => {
              const Icon = service.icon;

              return (
                <li
                  key={service.id}
                  className="group relative flex flex-col bg-card shadow-[0_12px_20px_0_rgba(0,0,0,0.05)] transition-all duration-500 hover:!translate-y-[-20px] hover:shadow-2xl dark:bg-zinc-800/80 cursor-pointer"
                >
                  {/* Animated Top Border */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-[3px] left-1/2 h-[3px] w-0 -translate-x-1/2 bg-primary transition-all duration-500 group-hover:w-full pointer-events-none z-20"
                  />

                  {/* Icon & Title */}
                  <div className="flex flex-col items-center px-4 py-10 text-center">
                    <Icon
                      aria-hidden="true"
                      className="mb-6 h-16 w-16 text-muted-foreground/40 transition-colors duration-300 group-hover:text-primary"
                    />
                    <h3 className="text-2xl font-bold text-primary dark:text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="relative mt-auto flex items-center justify-end overflow-hidden bg-secondary/10 p-4 dark:bg-zinc-900/50">
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-0 z-20 flex h-full w-[80px] items-center justify-center bg-primary pr-3 text-3xl font-black text-primary-foreground"
                    >
                      0{index + 1}
                    </div>

                    <div
                      aria-hidden="true"
                      className="absolute left-[65px] top-0 z-10 h-full w-[50px] -skew-x-[30deg] bg-muted dark:bg-zinc-700"
                    />

                    <Link
                      href={`#service-${service.id}`}
                      aria-label={`Read more details about ${service.title} service`}
                      className="relative z-30 font-semibold text-primary transition-colors hover:text-primary/70"
                    >
                      Details
                    </Link>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </section>
    </LazyMotion>
  );
}
