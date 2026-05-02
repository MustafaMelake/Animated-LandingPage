"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  MessageSquare,
  User,
  CheckCircle,
  Calendar,
  Server,
  BarChart,
  Percent,
  ChevronDown,
  X,
  Menu,
} from "lucide-react";

const mainLinks = [
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
];

const megaMenuCol1 = [
  { name: "Stats", icon: BarChart, href: "#stats" },
  { name: "Testimonials", icon: MessageSquare, href: "#testimonials" },
  { name: "Team Members", icon: User, href: "#team" },
  { name: "Our Skills", icon: CheckCircle, href: "#our-skills" },
];

const megaMenuCol2 = [
  { name: "Events", icon: Calendar, href: "#events" },
  { name: "Pricing Plans", icon: Server, href: "#pricing" },
  { name: "Request A Discount", icon: Percent, href: "#discount" },
];

export default function Navbar() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsVisible(false);
      setIsHovered(false);
      setIsMobileOpen(false);
    } else {
      setIsVisible(true);
    }
  });
  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };
  return (
    <motion.header
      variants={{
        visible: {
          y: 0,
          height: isMobileOpen ? "100dvh" : isHovered ? "20rem" : "5rem",
        },
        hidden: { y: "-100%", height: "5rem" },
      }}
      initial={{ height: "5rem" }}
      animate={isVisible ? "visible" : "hidden"}
      onMouseEnter={() => !isMobileOpen && setIsHovered(true)}
      onMouseLeave={() => !isMobileOpen && setIsHovered(false)}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-black/90"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-black dark:text-white"
          >
            Melake
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="flex items-center">
                <button
                  onMouseEnter={() => !isMobileOpen && setIsHovered(true)}
                  onMouseLeave={() => !isMobileOpen && setIsHovered(false)}
                  aria-expanded={isHovered}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-blue-600 cursor-pointer focus:outline-none"
                >
                  Other Links{" "}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isHovered ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 -mr-2 text-gray-600 dark:text-gray-300 relative z-10"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isHovered && !isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="hidden md:grid grid-cols-2 gap-10 py-10 border-t border-gray-100 dark:border-gray-800"
              role="menu"
            >
              <ul className="space-y-4">
                {megaMenuCol1.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400"
                      >
                        <Icon className="h-5 w-5 text-blue-500" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="space-y-4">
                {megaMenuCol2.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400"
                      >
                        <Icon className="h-5 w-5 text-blue-500" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              className="md:hidden flex flex-col h-[calc(100dvh-5rem)] overflow-y-auto pb-10"
            >
              <div className="flex flex-col gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                {/* Main Links on Mobile */}
                <ul className="flex flex-col gap-4">
                  {mainLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="block text-xl font-semibold text-gray-800 dark:text-gray-100"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="h-px w-full bg-gray-100 dark:bg-gray-800" />

                {/* Mega Menu Links on Mobile (Combined) */}
                <div>
                  <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">
                    Other Links
                  </p>
                  <ul className="flex flex-col gap-5">
                    {[...megaMenuCol1, ...megaMenuCol2].map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={handleLinkClick}
                            className="flex items-center gap-4 text-lg font-medium text-gray-600 dark:text-gray-400"
                          >
                            <Icon className="h-6 w-6 text-blue-500 shrink-0" />
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
