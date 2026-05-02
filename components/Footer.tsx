"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Phone, Heart } from "lucide-react";
import { LuFacebook, LuTwitter, LuYoutube } from "react-icons/lu";

const socialLinks = [
  {
    id: 1,
    icon: LuFacebook,
    href: "https://facebook.com",
    color: "hover:bg-[#1877f2]",
    label: "Follow us on Facebook",
  },
  {
    id: 2,
    icon: LuTwitter,
    href: "https://twitter.com",
    color: "hover:bg-[#1da1f2]",
    label: "Follow us on Twitter",
  },
  {
    id: 3,
    icon: LuYoutube,
    href: "https://youtube.com",
    color: "hover:bg-[#ff0000]",
    label: "Subscribe to our Youtube",
  },
];

const importantLinks = [
  { title: "Important Link 1", href: "#" },
  { title: "Important Link 2", href: "#" },
  { title: "Important Link 3", href: "#" },
  { title: "Important Link 4", href: "#" },
  { title: "Important Link 5", href: "#" },
];

const galleryImages = [
  "/imgs/gallery-01.png",
  "/imgs/gallery-02.png",
  "/imgs/gallery-03.jpg",
  "/imgs/gallery-04.png",
  "/imgs/gallery-05.jpg",
  "/imgs/gallery-06.png",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191919] text-[#b9b9b9] pt-16 pb-6 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Box 1: Brand & Social */}
        <div className="flex flex-col gap-6">
          <h2 className="text-white text-3xl font-black tracking-tighter uppercase">
            MELAKE
          </h2>
          <nav aria-label="Social Media Links">
            <ul className="flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`w-12 h-12 bg-[#313131] flex items-center justify-center text-[#b9b9b9] hover:text-white transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={24} aria-hidden="true" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="leading-relaxed text-sm md:text-base">
            Building high-performance MERN stack applications with Next.js 16.
            Focused on SEO, speed, and production-grade architecture.
          </p>
        </div>

        {/* Box 2: Quick Links */}
        <nav aria-label="Quick Links">
          <ul className="flex flex-col">
            {importantLinks.map((link, index) => (
              <li
                key={index}
                className="border-b border-[#444] last:border-0 group"
              >
                <a
                  href={link.href}
                  className="py-3.5 flex items-center transition-all duration-300 group-hover:pl-4 group-hover:text-white"
                >
                  <span
                    className="text-primary mr-3 font-bold text-lg"
                    aria-hidden="true"
                  >
                    »
                  </span>
                  <span className="text-sm md:text-base font-medium">
                    {link.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Box 3: Contact Info */}
        <address className="flex flex-col gap-8 not-italic">
          <div className="flex items-start gap-4">
            <MapPin
              className="text-primary shrink-0 mt-1"
              size={24}
              aria-hidden="true"
            />
            <span className="text-sm md:text-base leading-snug">
              Egypt, Giza, Inside The Sphinx, Room Number 220
            </span>
          </div>
          <div className="flex items-start gap-4">
            <Clock
              className="text-primary shrink-0 mt-1"
              size={24}
              aria-hidden="true"
            />
            <span className="text-sm md:text-base">
              Business Hours: <time>10:00</time> To <time>18:00</time>
            </span>
          </div>
          <div className="flex items-start gap-4">
            <Phone
              className="text-primary shrink-0 mt-1"
              size={24}
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 text-sm md:text-base font-semibold text-white/90">
              <a
                href="tel:+20123456789"
                className="hover:text-primary transition-colors"
              >
                +20123456789
              </a>
              <a
                href="tel:+20198765432"
                className="hover:text-primary transition-colors"
              >
                +20198765432
              </a>
            </div>
          </div>
        </address>

        {/* Box 4: Image Gallery */}
        <div className="grid grid-cols-3 gap-2">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="border-[3px] border-white/10 overflow-hidden aspect-square relative group bg-[#313131]"
            >
              <Image
                src={src}
                alt={`Portfolio project highlight ${index + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 100px"
                className="object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-[#444] text-center">
        <p className="flex items-center justify-center gap-2 text-white/80 text-sm font-semibold tracking-wide">
          &copy; {currentYear} <span className="text-primary">ELZERO</span>.
          Made With
          <Heart
            className="text-red-600 fill-red-600 animate-pulse"
            size={16}
            aria-hidden="true"
          />
          By{" "}
          <span className="hover:text-primary transition-colors cursor-pointer">
            Mustafa
          </span>
        </p>
      </div>
    </footer>
  );
}
