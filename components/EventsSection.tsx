"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

export default function EventsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 1. سرعة الصورة (هادية)
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // 2. سرعة الـ Dots (ضعف السكرول)
  // القيمة دي (-200 لـ 200) هتخلي النقط تتحرك مسافة 400px خلال سكرول السيكشن
  // وده بيدي تأثير الـ "Fast Parallax"
  const dotsY = useTransform(scrollYProgress, [0, 1], [400, -100]);
  // الـ Dots اللي تحت تتحرك عكس اللي فوق لزيادة العمق
  const dotsYReverse = useTransform(scrollYProgress, [0, 1], [400, -100]);

  return (
    <section
      id="events"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 overflow-hidden bg-background"
    >
      {/* --- Animated Dots (Top Right) --- */}
      <motion.div
        style={{ y: dotsY }} // حركة السكرول السريعة
        animate={{ x: mousePosition.x / 50 }} // حركة الماوس (X فقط لمنع التعارض)
        className="absolute top-20 right-0 w-48 h-48 bg-[url('/imgs/dots.png')] bg-no-repeat opacity-40 hidden xl:block pointer-events-none"
      />

      {/* --- Animated Dots (Bottom Left) --- */}
      <motion.div
        style={{ y: dotsYReverse }} // حركة سكرول في اتجاه مختلف
        animate={{ x: -mousePosition.x / 50 }}
        className="absolute bottom-20 left-0 w-48 h-48 bg-[url('/imgs/dots.png')] bg-no-repeat opacity-40 hidden xl:block pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 relative group uppercase">
            Latest Events
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
          </h2>
          <div className="h-1 w-20 bg-primary/20 rounded-full" />
        </div>

        <div className="flex flex-wrap items-center gap-12 lg:flex-nowrap">
          {/* Image with Scroll Parallax */}
          <motion.div
            style={{ y: imgY }}
            className="hidden lg:block max-w-[450px]"
          >
            <Image
              src="/imgs/events.png"
              alt="Event Illustration"
              width={450}
              height={450}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Info & Countdown */}
          <div className="flex-1">
            {/* ... باقي كود الـ Countdown زي ما هو ... */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              className="flex justify-center gap-4 mb-10"
            >
              <TimeUnit value="15" unit="Days" />
              <TimeUnit value="08" unit="Hours" />
              <TimeUnit value="45" unit="Mins" />
              <TimeUnit value="55" unit="Secs" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-6">
                Tech Masters Event 2026
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Join the most anticipated tech gathering of the year. Explore
                the latest in Next.js 16 and React 19.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Subscribe Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-[600px] mx-auto bg-secondary/20 p-8 md:p-10 rounded-[50px] dark:bg-zinc-900/50"
        >
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 bg-background px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-primary outline-none transition-all"
            />
            <button className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function TimeUnit({ value, unit }: { value: string; unit: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex flex-col items-center border border-muted rounded-lg w-20 bg-background/50 backdrop-blur-sm group"
    >
      <div className="overflow-hidden h-16 flex items-center justify-center">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-black text-primary"
        >
          {value}
        </motion.span>
      </div>
      <span className="text-[10px] uppercase tracking-widest border-t border-muted w-full text-center py-2 group-hover:text-primary transition-colors">
        {unit}
      </span>
    </motion.div>
  );
}
