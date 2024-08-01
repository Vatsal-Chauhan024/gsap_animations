import React, { useEffect, useRef } from "react";
import firsImage from "../assets/01.jpg";
import secondImage from "../assets/02.jpg";
import thirdImage from "../assets/03.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


const Page1 = () => {

  const bg1 = useRef(null)
  const img_container = useRef(null)
  const img = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  const container = useRef(null)


  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
      })

      gsap.set(container.current, {
        marginTop: -container.current.offsetHeight
      })  
      gsap.timeline({
        scrollTrigger: {
          trigger: img_container.current,
          pin: img_container.current,
          scrub: 1,
          start: "0% 0%"
        }

      })
      .to(img.current, {transform: "translateZ(2200px"}, 0)
      .to(text1.current, {y:-800},0.05, "<")
      .to(text2.current, {y:-800},0.08, "<")
      .fromTo(container.current, {yPercent: 100, scaleY: 2, duration: 1}, {yPercent: 0, scaleY: 1})

    })

    return () => ctx.revert();
  }, [])



  return (
    <div className="relative">
      <div ref={bg1} className="bg bg-[#141414] absolute h-screen w-screen -z-10"></div>


      <section>
      <div ref={img_container} className="img-container perspective flex items-center justify-center h-screen w-screen">
        <img ref={img} className="image" src={firsImage} alt="error-carousel" />
        <div className="absolute flex flex-col justify-center items-center text-white">
          <h1 ref={text1} className="text-[190px]">
            <span className="text-stroke">Outlook</span> Above
          </h1>
          <p  ref = {text2} className="opacity-50 w-48 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
        <div ref={container} className=" container py-12 flex flex-wrap items-center justify-around">
          <div className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8">
            <img className="w-[450px] h-[350px] " src={secondImage} alt="" />
            <img src={thirdImage} alt="" className="w-[400px] h-[400px]"/>
          </div>
          <div className="col-1 flex flex-col gap-16">
            <img src={firsImage} alt="" className="w-[600px] h-[400px]"/>
            <img src={secondImage} alt="" className="w-[400px] h-[400px] last"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page1;
