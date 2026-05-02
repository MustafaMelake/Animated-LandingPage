"use client";

import { domAnimation, LazyMotion, motion, Variants } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    img: "/imgs/hosting-basic.png",
    price: 15,
    features: [
      "10GB HDD Space",
      "5 Email Addresses",
      "2 Subdomains",
      "4 Databases",
      "Basic Support",
    ],
    isPopular: false,
  },
  {
    id: 2,
    title: "Advanced",
    img: "/imgs/hosting-advanced.png",
    price: 25,
    features: [
      "20GB HDD Space",
      "10 Email Addresses",
      "5 Subdomains",
      "8 Databases",
      "Advanced Support",
    ],
    isPopular: true,
  },
  {
    id: 3,
    title: "Professional",
    img: "/imgs/hosting-professional.png",
    price: 45,
    features: [
      "50GB HDD Space",
      "20 Email Addresses",
      "10 Subdomains",
      "20 Databases",
      "Professional Support",
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
  // SEO: Structured Data for Pricing
  const pricingSchema = {
    "@context": "pricingPlans",
    "@type": "ItemList",
    itemListElement: pricingPlans.map((plan, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        name: plan.title,
        price: plan.price,
        priceCurrency: "USD",
        description: plan.features.join(", "),
      },
    })),
  };
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="pricing"
        className="md:sticky md:top-[-130px] relative z-0 py-16 md:py-24 mb-20 md:mb-40 lg:mb-60 bg-secondary/20 dark:bg-zinc-900/40 overflow-hidden"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
        />
        <div className="absolute top-40 right-0 w-48 h-48 bg-[url('/imgs/dots.png')] bg-no-repeat opacity-30 animate-pulse hidden xl:block" />
        <div className="absolute bottom-40 left-0 w-48 h-48 bg-[url('/imgs/dots.png')] bg-no-repeat opacity-30 animate-pulse hidden xl:block" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 relative group uppercase text-center">
              Pricing Plans
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
            </h2>
            <div className="h-1 w-16 md:w-20 bg-primary/20 rounded-full" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} // استخدمنا stretch عشان الكروت كلها تاخد نفس الطول
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={cardVariants} // ضفنا h-full هنا عشان الكارت يتمط لو اللي جنبه أطول منه
                className={`group relative z-0 overflow-hidden bg-card dark:bg-zinc-800 shadow-[0_8px_20px_0_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-2xl flex flex-col h-full rounded-2xl ${
                  plan.isPopular
                    ? "lg:-translate-y-4 shadow-primary/10 border-2 border-primary/20"
                    : "border border-border/50"
                }`}
              >
                <div className="absolute top-0 right-0 z-[-1] w-0 h-1/2 bg-secondary/40 dark:bg-zinc-700/30 transition-all duration-500 ease-in-out group-hover:w-full" />
                <div className="absolute bottom-0 left-0 z-[-1] w-0 h-1/2 bg-secondary/40 dark:bg-zinc-700/30 transition-all duration-500 ease-in-out group-hover:w-full" />
                {plan.isPopular && (
                  <div className="absolute right-4 md:right-5 top-0 w-8 md:w-10 bg-primary text-primary-foreground font-bold text-sm md:text-lg pt-6 pb-8 flex justify-center shadow-lg [writing-mode:vertical-rl] z-10">
                    Most Popular
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-[16px] md:border-[20px] border-transparent border-b-card dark:border-b-zinc-800 transition-colors duration-500" />
                  </div>
                )}
                <div className="text-center pt-8 pb-6 border-b border-muted/50 px-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                    {plan.title}
                  </h3>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-6">
                    <Image
                      src={plan.img}
                      alt={`${plan.title} icon`}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-black text-primary mb-1">
                      ${plan.price}
                    </span>

                    <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Per Month
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow">
                  <ul className="space-y-4 md:space-y-5">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm md:text-base text-muted-foreground font-medium"
                      >
                        <Check
                          className="w-4 h-4 md:w-5 md:h-5 text-primary mr-3 shrink-0"
                          strokeWidth={3}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 md:p-8 pt-0 mt-auto flex justify-center w-full">
                  <a
                    href="#"
                    className={`w-full sm:w-max px-8 py-3 rounded-full font-bold text-center transition-colors duration-300 border-2 ${
                      plan.isPopular
                        ? "bg-primary border-primary text-primary-foreground hover:bg-transparent hover:text-primary"
                        : "bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Choose Plan
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}
