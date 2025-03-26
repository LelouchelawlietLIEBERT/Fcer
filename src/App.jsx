import "./App.css";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import { useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Intro from "./components/Intro";
import Sendmail from "./components/Sendmail";
import Gbl2 from "./components/Gbl2";
import Gbl4 from "./components/Gbl4";
import Register from "./components/Register";
import Message from "./components/Message";
import Gbl5 from "./components/Gbl5";
import Gbl3 from "./components/Gbl3";

function App() {
  const toggleSlide = (x) => {
    var slide1 = document.querySelector("#slide1");
    var slide2 = document.querySelector("#slide2");

    if (x === "down") {
      slide2.style.height = "100vh";
      setTimeout(() => {
        slide2.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      slide2.style.height = "0px";
      slide1.style.height = "100vh";
      setTimeout(() => {
        slide1.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };
  const [user, setUser] = useState([]);
  const [click, setClick] = useState("no");
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();

  var con =
    click === "no" ? (
      <div className="sliders">
        <div className="container">
          <div id="slide1" className="slide">
            <div className="slide-content">
              <Welcome setClick={setClick} />
              <button
                className="toggle-btn"
                id="toggleBtn1"
                             onClick={() => {
                  toggleSlide("down");
                }}
              >
                <img src="down-arrows (2).png" style={{ width: "100%" }} />
              </button>
            </div>
          </div>
          <div id="slide2" className="slidee" style={{ height: "0" }}>
            <div className="slide-content">
              <h1
                style={{
                  marginBottom: "-30px",
                  textAlign: "center",
                }}
                className="asc"
              >
                PROJECTS
              </h1>
              <Projects />
              <button
                className="toggle-btn"
                id="toggleBtn2"
                style={{ position: "relative", top: "-60px", zIndex: 100 }}
                onClick={() => {
                  toggleSlide("up");
                }}
              >
                <img src="up-arrow.png" alt="" style={{ width: "100%" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : click === "regi" ? (
      <>
        <Gbl2 />
        <Gbl3 />
        <Sendmail />
      </>
    ) : click === "club" ? (
      <>
        <Gbl4 />
        <Register
          setClick={setClick}
          setEmail={setEmail}
          email={email}
          pw={pw}
          setPw={setPw}
          setUser={setUser}
        />
      </>
    ) : click === "msg" ? (
      <>
        <Gbl5 />
        <Message email={email} />
      </>
    ) : (
      <>
        <GlobalStyles />
        <Intro />
      </>
    );

  return <>{con}</>;
}

export default App;
