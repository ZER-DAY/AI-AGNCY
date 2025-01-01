"use client";

import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { useMousePosition } from "./Hero";
import Link from "next/link";
import { useSpring, useTransform, motion } from "framer-motion";

export const CallToAction = () => {
  const { xProgress, yProgress } = useMousePosition(); // Obtener la posición del mouse en relación con el ancho y alto de la ventana

  // Cuando el ratón se mueve -> parallax de los planetas
  const springX = useSpring(xProgress); // Se le aplica una animación spring a xProgress (pos x del mouse)
  const springY = useSpring(yProgress); // Se le aplica una animación spring a yProgress (pos y del mouse)

  const translateLargeX = useTransform(springX, [0, 1], ["-25%", "25%"]); // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateLargeY = useTransform(springY, [0, 1], ["-25%", "25%"]); // Transforma el valor de springY en un valor de movimiento -> animacion de los planetas

  const translateMediumX = useTransform(springX, [0, 1], ["-50%", "50%"]); // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateMediumY = useTransform(springY, [0, 1], ["-50%", "50%"]); // Transforma el valor de springY en un valor de movimiento -> animacion de los planetas

  const translateSmallX = useTransform(springX, [0, 1], ["-200%", "200%"]); // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateSmallY = useTransform(springY, [0, 1], ["-200%", "200%"]);

  return (
    <section dir="rtl">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute -z-10 inset-0 radial-gradient"></div>
            <div className="absolute -z-10 inset-0">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}
              >
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-y-[200px] -translate-x-[200px] rotate-45"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}
              >
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-y-[200px] translate-x-[200px] -rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateMediumX,
                  y: translateMediumY,
                }}
              >
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-x-[500px] rotate-90"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateMediumX,
                  y: translateMediumY,
                }}
              >
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-y-[100px] translate-x-[500px] -rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateSmallX,
                  y: translateSmallY,
                }}
              >
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-y-[250px] -translate-x-[400px] rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateSmallX,
                  y: translateSmallY,
                }}
              >
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="translate-y-[150px] translate-x-[400px] -rotate-45"
                />
              </motion.div>
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold text-center leading-tight bg-gradient-to-l from-blue-500 to-white text-transparent bg-clip-text">
              ابدأ رحلتك نحو النجاح مع
              <span className="pt-3 font-extrabold text-4xl text-amber-400">
                <span> وكالة الأصيل</span>
                {/* <span
                  className="absolute top-full left-0 w-full h-4 linear-gradient -translate-y-1/2"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "top",
                    maskRepeat: "no-repeat",
                  }}
                ></span> */}
              </span>
            </h2>
            <p className="text-center text-2xl mt-8 max-w-2xl mx-auto leading-tight bg-gradient-to-l from-blue-500 to-white text-transparent bg-clip-text">
              اسجل نفسك الآن مع وكالة الأصيل وابدأ في تعبئة بياناتك. نحن نقدم لك
              خدمات مبتكرة تساعدك على تعزيز تواجدك الرقمي وتطوير محتواك بطرق
              احترافية، لتحقيق التميز والإبداع في عالمك الرقمي.
            </p>
            <div className="flex justify-center mt-10 ">
              <Link href="/newuser" passHref>
                <Button variant="secondary">سجل الان</Button>
              </Link>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
