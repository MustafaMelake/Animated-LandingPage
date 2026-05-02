"use client";

import { motion, Variants, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronsDown } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen w-full overflow-hidden bg-background pt-20 flex items-center justify-center">
        {/* Background Blur */}
        <div
          className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
            >
              Welcome, To <br />
              <span className="text-primary italic">Melake World</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Here I&apos;m gonna share everything about my Skills. Animations I
              make, Scroll animations I do, SEO and Performance.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="#features"
                className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
              >
                Explore Features
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
            >
              <Image
                src="/imgs/landing-image.png"
                alt="Illustration representing Elzero World"
                fill
                sizes="(max-width: 768px) 300px, 450px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Down Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link
            href="#articles"
            aria-label="Scroll down to articles section"
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold group-hover:text-foreground transition-colors">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronsDown
                className="w-6 h-6 text-primary"
                aria-hidden="true"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Shape Divider */}
        <Link href="#stats" aria-label="Go to statistics section">
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="relative block w-full h-[60px] fill-background"
            >
              <path d="M1200 120L0 120L0 0L1200 120Z"></path>
            </svg>
          </div>
        </Link>
      </section>
    </LazyMotion>
  );
}
