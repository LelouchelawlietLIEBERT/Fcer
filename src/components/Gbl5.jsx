import { createGlobalStyle } from "styled-components";

const Gbl5 = createGlobalStyle`
body{
  background-size: 80em 35.3em;
  background-repeat: no-repeat;
  animation: 6s linear 0s infinite running rtb;
}
@keyframes rtb {
  0% {
        background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(121, 121, 121, 0.9)),url("1AfLx8dLTVoHK.webp");
    }
  50%{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(121, 121, 121, 0.9)),url("1AfLx8dLTVoHK.webp");
    }
  51%{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(121, 121, 121, 0.9)),url("knock-knock-who's-there-go-fuck-your-face-soldier-boy.gif");
    }
  100%{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(121, 121, 121, 0.9)),url("knock-knock-who's-there-go-fuck-your-face-soldier-boy.gif");
    }
  }
canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.msg-h1 {
  font-family: serif;
  font-weight: 800;
  z-index: 2;
  position: relative;
  text-align: center;
  top: 50px;
  color: white;
  font-size: 5rem;
}
`;

export default Gbl5;
