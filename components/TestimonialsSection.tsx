"use client";

import { domAnimation, LazyMotion, motion, Variants } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Mohamed Farag",
    title: "Full Stack Developer",
    img: "/imgs/avatar-01.png",
    rate: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    id: 2,
    name: "Mohamed Ibrahim",
    title: "Full Stack Developer",
    img: "/imgs/avatar-02.png",
    rate: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    id: 3,
    name: "Shady Nabil",
    title: "Full Stack Developer",
    img: "/imgs/avatar-03.png",
    rate: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    id: 4,
    name: "Amr Hendawy",
    title: "Full Stack Developer",
    img: "/imgs/avatar-04.png",
    rate: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    id: 5,
    name: "Sherief Ashraf",
    title: "Full Stack Developer",
    img: "/imgs/avatar-05.png",
    rate: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    id: 6,
    name: "Osama Mohamed",
    title: "Full Stack Developer",
    img: "/imgs/avatar-06.png",
    rate: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
];

export default function Testimonials() {
  // Schema.org Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonialsData.map((t, i) => ({
      "@type": "Review",
      position: i + 1,
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
      reviewRating: { "@type": "Rating", ratingValue: t.rate },
    })),
  };
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section id="testimonials" className="py-24 bg-secondary/20">
        {/* إضافة الـ Structured Data للموقع */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="container mx-auto px-6 pt-10">
          {/* Title Section */}
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4 relative group cursor-default">
              Testimonials
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
            </h2>
            <div className="h-1 w-20 bg-primary/20 rounded-full" />
          </div>
          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {testimonialsData.map((testimonial) => (
              <motion.figure // Semantic Tag: figure
                key={testimonial.id}
                variants={cardVariants}
                className="relative rounded-2xl bg-card p-6 shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-zinc-900/80 border border-border/50"
              >
                {/* Avatar Picture */}
                <div className="absolute -top-12 right-0 w-24 h-24 rounded-full border-[10px] border-background bg-background overflow-hidden z-10">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={80} // تحسين الأداء بتحديد المقاس
                    height={80}
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="pt-4">
                  <figcaption className="mb-4">
                    <h3 className="text-lg font-bold leading-none mb-2">
                      {testimonial.name}
                    </h3>
                    <cite className="text-sm text-primary font-medium not-italic">
                      {testimonial.title}
                    </cite>
                  </figcaption>

                  {/* Stars - Accessibility labels */}
                  <div
                    className="flex gap-1 mb-4"
                    aria-label={`Rating: ${testimonial.rate} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${i < testimonial.rate ? "fill-yellow-500 text-yellow-500" : "text-muted/30"}`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground leading-relaxed italic text-sm">
                    {testimonial.text}
                  </blockquote>
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}
