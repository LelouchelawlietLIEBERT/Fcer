import { useEffect } from "react";
import styles from "../css/start.module.css";
import Menubar from "./Menubar";

const Welcome = ({ setClick }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      particlesJS(styles["particles-js"], {
        particles: {
          number: {
            value: 118,
            density: { enable: true, value_area: 394.18498312888255 },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className={styles.Bodycon}>
        <div id={styles["particles-js"]}></div>
        <Menubar setClick={setClick} />
        <div className={styles["count-particles"]}>
          <div className={styles["container"]}>
            <p className={styles["glitch"]}>
              <span aria-hidden="true">WELCOME</span>
              WELCOME
              <span aria-hidden="true">WELCOME</span>
            </p>
          </div>
          <h3 className={styles["hde"]}>
            TO THE<strong> FIGHT CLUB !!!</strong>
          </h3>
          <button
            className={styles["button-57"]}
            role="button"
            onClick={() => {
              setClick("club");
            }}
          >
            <span className={styles["text"]}>REGISTER</span>
            <span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "12px", marginTop: "5px" }}>
                  REGISTER
                </div>
                <div
                  style={{
                    marginTop: "5px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "white",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/share (1).png"
                    alt="Share Icon"
                  />
                </div>
              </div>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Welcome;
