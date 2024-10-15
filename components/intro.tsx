"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // État pour gérer l'affichage de la vidéo
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoVisible(true); // Afficher la vidéo après un délai
    }, 1500); // Délai en millisecondes

    return () => clearTimeout(timer); // Nettoyer le timer
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] z-10 mt-28 "
    >
      {/* Affichage conditionnel de la vidéo */}
      {isVideoVisible && (
        <video
          autoPlay
          loop
          controls
          muted
          playsInline
          className="h-screen absolute inset-0 object-cover xl:h-auto -z-10 -top-10"
        >
          <source src="/gotwet.mp4" type="video/mp4" />
        </video>
      )}

      <motion.h1
        className="px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-4xl text-gray-100 font-bold tracking-tight sm:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Julie Voix Off
        </span>

        <p className="text-2xl mb-4 text-gray-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          La voix de vos projets
        </p>
      </motion.h1>

      <div
        ref={ref}
        className="mb-4 max-w-[53rem] scroll-mt-28 text-center sm:mb-8"
      >
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-sm:hidden">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white/80 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mb-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-white text-gray-700 hover:text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/50 dark:text-gray-950"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Me contacter{" "}
          <BsArrowDown className="group-hover:translate-x-1 transition " />
        </Link>
      </motion.div>
    </section>
  );
}
