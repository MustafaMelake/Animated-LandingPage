"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Users, Code, Globe, Banknote } from "lucide-react";

const statsData = [
  { id: 1, label: "Clients", value: "300", icon: Users },
  { id: 2, label: "Projects", value: "400", icon: Code },
  { id: 3, label: "Countries", value: "12", icon: Globe },
  { id: 4, label: "Revenue", value: "500K", icon: Banknote },
];

export default function StatsTicker() {
  const doubledStats = [...statsData, ...statsData];

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="stats"
        aria-labelledby="stats-heading"
        className="py-12 bg-primary/5 border-y border-primary/10 overflow-hidden"
      >
        <div className="mb-10 text-center">
          <h2
            id="stats-heading"
            className="text-2xl font-bold tracking-tight uppercase opacity-50"
          >
            Our Awesome Stats
          </h2>
        </div>

        <div className="flex overflow-hidden select-none">
          <motion.ul
            role="list"
            className="flex flex-nowrap gap-12 items-center"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 0 } }}
          >
            {doubledStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.li
                  key={index}
                  className="flex items-center gap-6 min-w-[250px] px-8 py-4 bg-card/40 dark:bg-zinc-800/20 backdrop-blur-sm rounded-xl border border-primary/5"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black tracking-tighter text-primary">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold uppercase text-muted-foreground tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>
    </LazyMotion>
  );
}
