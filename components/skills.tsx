"use client";

import { Card, CardFooter, Image } from "@nextui-org/react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { Fade } from "react-awesome-reveal";

export default function Skills() {
  const { ref } = useSectionInView("Studio");

  return (
    <section id="studio" ref={ref} className="mb-28  scroll-mt-28 sm:mb-40">
      <SectionHeading>Home studio</SectionHeading>
      <Fade delay={200}>
        <div className="max-w-[900px] gap-4 grid grid-cols-12 grid-rows-2 ">
          <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="cards/card-example-4.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Micro
                  </p>
                  <p className="text-tiny text-white/60">RØDE NT2-A</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="cards/card-example-3.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Casque studio dynamique
                  </p>
                  <p className="text-tiny text-white/60">SONY MDR-7506</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="cards/card-example-2.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Rideau et Absorbeurs acoustiques
                  </p>
                  <p className="text-tiny text-white/60">500 g/m² | 25 kg/m3</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="cards/card-example-6.webp"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Carte son
                  </p>
                  <p className="text-tiny text-white/60">
                    SOLID STATE LOGIC SSL 2+
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="cards/card-example-5.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Station de travail
                  </p>
                  <p className="text-tiny text-white/60">ADOBE AUDITION</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Fade>
    </section>
  );
}
