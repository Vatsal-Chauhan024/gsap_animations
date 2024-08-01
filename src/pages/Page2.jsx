import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ImageComponent from "../components/ImageComponent";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".image-container").forEach((container, index) => {
      const q = gsap.utils.selector(container);

      console.log(gsap.utils.toArray(q(".imagepiece")))

      gsap.utils.toArray(q(".imagepiece")).forEach((piece, i) => {
        gsap.from(piece, {
          x: (i+1) * 1200,
          duration: 2.5,
          scrollTrigger: {
            trigger: `.image-${index + 1}`,
            start: "top bottom",
            toggleActions: "play none none reverse"
          },
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-8 bg-neutral-900 py-[15rem] px-20">
      <ImageComponent imgNum="1" position="place-self-end" />
      <ImageComponent imgNum="2" position="place-self-center" />
      <ImageComponent imgNum="3" position="place-self-start" />
    </div>
  );
};

export default Page2;
