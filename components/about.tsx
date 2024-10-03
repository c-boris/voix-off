"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const { ref } = useSectionInView("Prestations");

  return (
    <motion.section
      ref={ref}
      className="mt-40 mb-28 max-w-[60rem] leading-8 sm:mb-40 scroll-mt-28 z-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="prestations"
    >
      <SectionHeading>Prestations</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-8 px-4 text-gray-700 dark:text-white/70">
        <Fade direction="left">
          <p className="text-4xl font-bold sm:text-right">
            Enregistrement de voix off pub pour tous vos projets publicitaires
            audio ou vidéo pour la télévision, la radio ou encore le web.
          </p>
        </Fade>

        <p className="text-lg">
          Enregistrement de voix off en mode narratif pour documentaire, livre
          audio, audio guide, voice over, film d’animation.
          <br />
          Enregistrement de voix off explicative pour vos tutoriels, vos cours
          en ligne, vos formations, vos jeux vidéo, vos applications mobiles ou
          votre répondeur téléphonique.
        </p>

        <p className="text-lg sm:text-right">
          Enregistrement de voix off institutionnelle ou informative pour vos
          projets corporate-entreprise : vidéo web, films d’entreprise, vidéo de
          campagne de sensibilisation.
        </p>
        <Fade direction="up">
          <p className="text-4xl font-bold">
            Enregistrement de voix off jouée pour accompagner vos projets
            audiovisuels.
          </p>
        </Fade>
      </div>
    </motion.section>
  );
}
