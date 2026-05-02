"use client";

import {
  domAnimation,
  LazyMotion,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function DiscountSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    isDesktop ? [0.8, 1, 1, 1] : [1, 1, 1, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.85, 1],
    isDesktop ? [0, 1, 1, 0, 1] : [1, 1, 1, 1, 1]
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        id="discount"
        className="relative z-10 h-auto lg:h-[200vh] bg-background antialiased shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"
      >
        <motion.div
          style={{ scale, opacity }}
          className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col lg:flex-row overflow-hidden"
        >
          {/* --- Left Side: Content --- */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-primary py-16 lg:py-0 text-white overflow-hidden min-h-[400px] lg:min-h-0">
            <div className="relative z-10 text-center px-6 lg:px-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-6 tracking-tight uppercase">
                We Have A Discount
              </h2>
              <p className="max-w-md mx-auto mb-8 lg:mb-10 leading-relaxed text-white/80 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi asperiores consectetur.
              </p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
              >
                <Image
                  src="/imgs/discount.png"
                  alt="Discount Background"
                  fill
                  className="object-cover pointer-events-none"
                  sizes="50vw"
                />
              </motion.div>
            </div>
          </div>

          {/* --- Right Side: Form --- */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-background py-16 lg:py-0">
            <div className="w-full max-w-md px-6 lg:px-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 lg:mb-8 text-center uppercase tracking-tighter">
                Request A Discount
              </h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full p-4 bg-secondary/40 border-b-2 border-transparent focus:border-primary outline-none transition-all rounded-t-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full p-4 bg-secondary/40 border-b-2 border-transparent focus:border-primary outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="sr-only">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell Us About Your Project"
                    className="w-full p-4 h-32 bg-secondary/40 border-b-2 border-transparent focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-primary text-primary-foreground font-black text-lg shadow-2xl shadow-primary/20 hover:brightness-110 transition-all"
                >
                  SEND REQUEST
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </LazyMotion>
  );
}
