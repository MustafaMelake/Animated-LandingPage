"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  domAnimation,
  LazyMotion,
} from "framer-motion";

const featuresData = [
  {
    id: "quality",
    title: "QUALITY",
    desc: "Every line of code is meticulously crafted. We deliver production-grade applications that perform flawlessly under pressure, ensuring a premium experience.",
  },
  {
    id: "time",
    title: "TIME",
    desc: "Speed is a feature. We utilize cutting-edge stacks to guarantee rapid delivery without sacrificing robust architecture or SEO performance.",
  },
  {
    id: "passion",
    title: "PASSION",
    desc: "We don't just build websites; we engineer digital masterpieces. Our passion for modern web technologies reflects in the solutions we provide.",
  },
];

const FeatureCard = ({
  feature,
  progress,
  index,
  total,
}: {
  feature: any;
  progress: any;
  index: number;
  total: number;
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [100, 0, 0, -100]
  );

  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="max-w-md border border-white/10 bg-black/80 p-12 backdrop-blur-md shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]">
        <h3 className="mb-6 text-5xl font-black tracking-tighter text-white">
          {feature.title}
        </h3>
        <p className="text-lg leading-relaxed text-gray-400 font-medium">
          {feature.desc}
        </p>

        <div className="mt-8 h-[2px] w-12 bg-white/20" />
      </div>
    </motion.div>
  );
};

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        id="features"
        className="relative h-[400vh] bg-black"
        aria-label="Core Features" // SEO
      >
        <h2 className="sr-only">Our Core Features and Values</h2>

        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          >
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 container mx-auto flex justify-end h-full items-center px-6 md:px-12">
            <div className="relative h-[50vh] w-full md:w-1/2">
              {featuresData.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  index={index}
                  total={featuresData.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar - Improved for Accessibility */}
          <motion.div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            className="absolute bottom-0 left-0 h-1.5 bg-white z-20"
            style={{
              width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
            }}
          />
        </div>
      </section>
    </LazyMotion>
  );
}
