import React, { useState, useEffect } from "react";
import Form from "./Form";

const Register = ({ setClick, setEmail, email, pw, setPw, setUser }) => {
  const [eyeSize, setEyeSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const dw = window.innerWidth / 15;
      const dh = window.innerHeight / 15;
      const x = event.pageX / dw;
      const y = event.pageY / dh;
      setEyeSize({ width: x, height: y });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="grid-container">
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
      </div>
      <div className="sendmail">
        <div className="panda">
          <div className="ear"></div>
          <div className="face">
            <div className="eye-shade"></div>
            <div className="eye-white">
              <div
                className="eye-ball"
                style={{
                  width: `${eyeSize.width}px`,
                  height: `${eyeSize.height}px`,
                }}
              ></div>
            </div>
            <div className="eye-shade rgt"></div>
            <div className="eye-white rgt">
              <div
                className="eye-ball"
                style={{
                  width: `${eyeSize.width}px`,
                  height: `${eyeSize.height}px`,
                }}
              ></div>
            </div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
          <div className="body"></div>
          <div className="foot">
            <div className="finger"></div>
          </div>
          <div className="foot rgt">
            <div className="finger"></div>
          </div>
        </div>
        <form>
          <div className="hand"></div>
          <div className="hand rgt"></div>
          <h1
            className="h1regi"
            style={{
              marginBottom: "30px",
              marginTop: "10px",
              marginLeft: "25%",
            }}
          >
            REGISTER
          </h1>
          <Form
            setClick={setClick}
            setEmail={setEmail}
            email={email}
            pw={pw}
            setPw={setPw}
            setUser={setUser}
          />
        </form>
      </div>
    </>
  );
};
export default Register;
