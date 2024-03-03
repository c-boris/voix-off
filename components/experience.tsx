"use client";

import { Card, Image, CardHeader } from "@nextui-org/react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { Fade } from "react-awesome-reveal";

export default function Experience() {
  const { ref } = useSectionInView("Conditions");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Conditions</SectionHeading>
      <Fade delay={200}>
        <div className="max-w-[900px] gap-4 grid grid-cols-12 grid-rows-1 ">
          <Card className="col-span-12 sm:col-span-12 h-[380px] sm:h-[240px] dark:bg-white/10">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <div className="pt-4 pb-4 px-5 sm:pl-10 sm:pr-2 sm:pt-4  flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">Travaillons Ensemble</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  Prise de contacte par mail ou téléphone. Nous échangeons sur
                  votre projet. <br />
                  Suivant le nombre de mots et le support de diffusion, je vous
                  établis un devis.
                </p>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  A partir du texte validé, annoté pour la phonétique et
                  éventuellement time codé, <br />
                  vous me briefez sur l’intention et le style que vous
                  souhaitez.
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card className="h-[200px] sm:h-[260px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <div className="pt-4 pb-4 px-5 sm:pl-10 sm:pr-2 sm:pt-4  flex flex-col h-full sm:group-even:ml-[18rem]">
                <Fade direction="left">
                  <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                    24h plus tard, je vous envoie le(s) fichier(s) audio prêts à
                    l’emploi, avec ou sans traitement selon vos souhaits ! Au
                    format simple .wav ou mp3 ou spécifique pour la téléphonie.
                  </p>
                </Fade>
              </div>
            </CardHeader>
          </Card>

          <Card className="w-full h-[300px] col-span-12 sm:col-span-7">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="cards/card-example-7.jpg"
            />
          </Card>
        </div>
      </Fade>
    </section>
  );
}
