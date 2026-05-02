"use client";

import { motion, Variants, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LuFacebook, LuTwitter, LuLinkedin, LuYoutube } from "react-icons/lu";
import { IconType } from "react-icons";

const teamData = [
  {
    id: 1,
    name: "Name",
    desc: "Simple Short Description",
    img: "/imgs/team-01.jpg",
  },
  {
    id: 2,
    name: "Name",
    desc: "Simple Short Description",
    img: "/imgs/team-02.jpg",
  },
  {
    id: 3,
    name: "Name",
    desc: "Simple Short Description",
    img: "/imgs/team-03.jpg",
  },
  {
    id: 4,
    name: "Name",
    desc: "Simple Short Description",
    img: "/imgs/team-04.jpg",
  },
  {
    id: 5,
    name: "Name",
    desc: "Simple Short Description",
    img: "/imgs/team-05.jpg",
  },
  {
    id: 6,
    name: "Name",
    desc: "Simple Short Description",
    img: "/imgs/team-06.jpg",
  },
  {
    id: 7,
    name: "Name",
    desc: "Simple Short Description",
    img: "/imgs/team-07.jpg",
  },
  {
    id: 8,
    name: "Name",
    desc: "Simple Short Description",
    img: "/imgs/team-08.jpg",
  },
];

export default function Team() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="team"
        className="py-24 bg-background"
        aria-labelledby="team-heading"
      >
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col items-center mb-20 text-center">
            <h2
              id="team-heading"
              className="text-4xl font-bold tracking-tight mb-4 relative group cursor-default"
            >
              Our Professional Team
              <span
                className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Meet the experts behind our production-grade digital solutions.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {teamData.map((member) => (
              <motion.figure // Semantic Figure
                key={member.id}
                variants={cardVariants}
                className="group relative z-0 flex w-full flex-col overflow-hidden pt-12"
              >
                {/* Background Layers */}
                <div className="absolute bottom-0 right-0 top-0 z-[-2] w-[calc(100%-60px)] rounded-2xl bg-secondary dark:bg-zinc-900/40" />
                <div className="absolute bottom-0 right-0 top-0 z-[-1] w-0 rounded-2xl bg-primary/10 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-[calc(100%-60px)]" />

                <div className="relative z-10 flex items-center">
                  {/* Member Image */}
                  <div className="relative h-[280px] w-[calc(100%-60px)] overflow-hidden rounded-2xl shadow-sm transition-all duration-500">
                    <Image
                      src={member.img}
                      alt={`Photo of ${member.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Social Links with Aria Labels */}
                  <nav
                    className="flex w-[60px] flex-col items-center justify-center gap-5"
                    aria-label={`Social links for ${member.name}`}
                  >
                    <SocialIcon
                      href="#"
                      icon={LuFacebook}
                      label="Facebook"
                      hoverColor="hover:text-blue-600"
                    />
                    <SocialIcon
                      href="#"
                      icon={LuTwitter}
                      label="Twitter"
                      hoverColor="hover:text-sky-500"
                    />
                    <SocialIcon
                      href="#"
                      icon={LuLinkedin}
                      label="LinkedIn"
                      hoverColor="hover:text-blue-700"
                    />
                    <SocialIcon
                      href="#"
                      icon={LuYoutube}
                      label="YouTube"
                      hoverColor="hover:text-red-600"
                    />
                  </nav>
                </div>

                <figcaption className="relative z-10 ml-[60px] pb-6 pt-5 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground italic">
                    {member.desc}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}

function SocialIcon({
  href,
  icon: Icon,
  label,
  hoverColor,
}: {
  href: string;
  icon: IconType; // TypeScript Correct Type
  label: string;
  hoverColor: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`text-muted-foreground/60 transition-all duration-300 hover:scale-125 ${hoverColor}`}
    >
      <Icon size={20} />
    </Link>
  );
}
