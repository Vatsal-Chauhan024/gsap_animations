import React from "react";
import image__1 from "../assets/01.jpg"
import image__2 from "../assets/02.jpg"
import "./Page3.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page3 = () => {

  useGSAP(() => {
    let timeline = gsap.timeline({repeat: -1, })


    timeline.fromTo(".text-content1", {
      xPercent: -100,
    }, {
      xPercent: 0,
      duration: 1
    })
  
    timeline.fromTo(".img__image-1", {
      xPercent: 100
    }, {
      xPercent: 0,
      duration: 1
    }, "<")


    timeline.add(() => {}, "+=3")

    timeline.to(".text-content1", {
      xPercent: -100
    });
    timeline.to(".img__image-1", {
      xPercent: 100
    }, "<")




    timeline.fromTo(".text-content2", {
      xPercent: -100,
    }, {
      xPercent: 0,
      duration: 1
    })
  
    timeline.fromTo(".img__image-2", {
      xPercent: 100
    }, {
      xPercent: 0,
      duration: 1
    }, "<")


    timeline.add(() => {}, "+=3")

    timeline.to(".text-content2", {
      xPercent: -100
    });
    timeline.to(".img__image-2", {
      xPercent: 100
    }, "<")

  }, [])

  

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="slider-container h-screen">
        <div className="silder-wrapper h-full w-full flex justify-center">
          <div className="left w-1/2 flex-1">
            <div className="text text-content1">
              <h1>Title 1</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                sed nihil et suscipit nemo accusantium, sunt voluptatem magni
                consequuntur facilis accusamus eaque sapiente iste itaque quo
                soluta aspernatur repellendus quia?
              </p>
              </div>
              <div className="text text-content2">
                <h1>Title 2</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto fugiat sint amet optio voluptatem eius, eos dolore
                  rem explicabo quidem pariatur, deserunt soluta, facere sunt
                  provident eligendi. Repudiandae, sunt cumque?
                </p>
              </div>
   
          </div>
          <div className="right w-1/2 flex-1">
          <div className="img__image-1">
            <img src={image__1} alt="" />
          </div>
          <div className="img__image-2">
            <img src={image__2} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
