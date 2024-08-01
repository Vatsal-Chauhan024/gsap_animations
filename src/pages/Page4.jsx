import React from "react";
import "./Page4.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page4 = () => {
  useGSAP(() => {
    
    gsap.fromTo(
      ".loading-page",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 1.5,
        delay: 3.5
      }
    );

    gsap.fromTo(".logo-name", {
        y:50, opacity: 0
    }, {
        opacity: 1,
        y: 0,
        duration:2,
        delay: 0.5
    })

  }, []);

  return (
    <div className="container">
      <p>Welcome</p>

      <div className="loading-page">
        <svg xmlns="http://www.w3.org/2000/svg" id="svg" viewBox="0 0 512 512">
          <path d="M415.4 512h-95.1L212.1 357.5v91.1L125.7 512H28V29.8L68.5 0h108.1l123.7 176.1V63.5L386.7 0h97.7v461.5zM38.8 35.3V496l72-52.9V194l215.5 307.6h84.8l52.4-38.2h-78.3L69 13zm82.5 466.6l80-58.8v-101l-79.8-114.4v220.9L49 501.9h72.3zM80.6 10.8l310.6 442.6h82.4V10.8h-79.8v317.6L170.9 10.8zM311 191.7l72 102.8V15.9l-72 53v122.7z" />
        </svg>

        <div className="name-container">
          <div className="logo-name">Nullx</div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
