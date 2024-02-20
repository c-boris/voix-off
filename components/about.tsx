"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Prestations");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Prestations</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
        – Enregistrement de voix off pub pour tous vos projets publicitaires audio ou vidéo pour la télévision, la radio ou encore le web.</p>
        <p className="mb-3">
– Enregistrement de voix off en mode narratif pour documentaire, livre audio, audio guide, voice over, film d’animation.
</p>
<p className="mb-3">
– Enregistrement de voix off explicative pour vos tutoriels, vos cours en ligne, vos formations, vos jeux vidéo, vos applications mobiles ou votre attente et votre répondeur téléphonique.
</p>
<p className="mb-3">
– Enregistrement de voix off institutionnelle ou informative pour vos projets corporate-entreprise : vidéo web, films d’entreprise, vidéo de campagne de sensibilisation.
</p>
<p className="mb-3">
– Enregistrement de voix off de voix jouée pour habiller vos projets audiovisuels.

      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
