import { createGlobalStyle } from "styled-components";

const Gbl4 = createGlobalStyle`
body {
  overflow: hidden;
  background-color: #000;
}

.sendmail {
  animation: ms 1.5s ease-out 0s 1, op 1.5s linear 0s 1;
}

.registerload {
  animation: msb 1.5s ease-out 0s 1
}

@keyframes msb {
  from {
    margin-top: 100%;
  }

  to {
    margin-top: 0%;
  }
}

@keyframes ms {
  from {
    margin-left: -100%;
  }

  to {
    margin-left: 0%;
  }
}

@keyframes op {
  0% {
    opacity: 0;
  }
}


.grid-container {
  --grid: 10rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  perspective: 100rem;
  animation: rotate 100s linear infinite forwards;

  .plane {
    --dir: 1;
    width: 300%;
    height: 150%;
    min-height: 70rem;
    position: absolute;
    bottom: 0;
    transform-style: preserve-3d;
    transform-origin: bottom center;
    transform: translateX(-50%) rotateX(85deg);

    &:last-child {
      --dir: -1;
      top: 0;
      transform-origin: top center;
      transform: translateX(-50%) rotateX(-85deg);

      &>* {
        &::after {
          background-image: linear-gradient(to top, rgba(0, 0, 0, 255) var(--grid), rgba(0, 0, 0, 0));
        }
      }
    }

    &>* {
      transform-style: preserve-3d;
      height: 100%;
      width: 100%;
      position: absolute;

      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      &::before {
        background-image: repeating-linear-gradient(to left, green, green 4px, transparent 4px, transparent var(--grid)),
          repeating-linear-gradient(to bottom, green, green 4px, transparent 4px, transparent var(--grid));
        animation: move 1s linear infinite forwards;
      }

      &::after {
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 255) var(--grid), rgba(0, 0, 0, 0));
        z-index: 1;
        transform: translateZ(1px);
      }
    }

    .glow {
      filter: blur(1rem);
      z-index: 1;
      mix-blend-mode: plus-lighter;
    }
  }
}

@keyframes move {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(calc(var(--grid) * var(--dir)));
  }
}

@keyframes blink {
  0% {
    visibility: visible;
  }

  50% {
    visibility: visible;
  }

  51% {
    visibility: hidden;
  }

  100% {
    visibility: hidden;
  }
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.panda {
  position: relative;
  width: 200px;
  margin: 50px auto;
}

.face {
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 100%;
  margin: 50px auto;
  box-shadow: 0 10px 15px rgba(0, 0, 0, .15);
  z-index: 50;
  position: relative;
}

.ear {
  position: absolute;
  width: 80px;
  height: 80px;
  background: #000;
  z-index: 5;
  border: 10px solid #fff;
  left: -15px;
  top: -15px;
  border-radius: 100%;
}

.ear:after {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  background: #000;
  z-index: 5;
  border: 10px solid #fff;
  left: 125px;
  top: -15px;
  border-radius: 100%;
}

.eye-shade {
  background: #000;
  width: 50px;
  height: 80px;
  margin: 10px;
  position: absolute;
  top: 35px;
  left: 25px;
  transform: rotate(220deg);
  border-radius: 25px 20px 30px 40px;

}

.eye-shade.rgt {
  transform: rotate(140deg);
  left: 105px;
}

.eye-white {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #fff;
  z-index: 500;
  left: 40px;
  top: 80px;
  overflow: hidden;
}

.eye-white.rgt {
  right: 40px;
  left: auto;
}

.eye-ball {
  position: absolute;
  width: 0px;
  height: 0px;
  left: 20px;
  top: 20px;
  max-width: 10px;
  max-height: 10px;
  transition: 0.1s;
}

.eye-ball:after {
  content: '';
  background: #000;
  position: absolute;
  border-radius: 100%;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
}

.nose {
  position: absolute;
  height: 20px;
  width: 35px;
  bottom: 40px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50px 20px 30px 15px;
  transform: rotate(15deg);
  background: #000;
}

.body {
  background: #fff;
  position: absolute;
  top: 200px;
  left: -20px;
  border-radius: 100px 100px 100px 100px / 126px 126px 96px 96px;
  width: 250px;
  height: 282px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
}

.hand {
  width: 40px;
  height: 30px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .15);
  background: #000;
  margin: 5px;
  position: absolute;
  top: 70px;
  left: -25px;
}

.hand:after,
.hand:before {
  content: '';
  width: 40px;
  height: 30px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .15);
  background: #000;
  margin: 5px;
  position: absolute;
  left: -5px;
  top: 11px;
}

.hand:before {
  top: 26px;
}

.hand.rgt {
  left: auto;
  right: -25px;
}

.hand.rgt:after,
.hand.rgt:before {
  left: auto;
  right: -5px;
}

.foot {
  top: 360px;
  left: -80px;
  position: absolute;
  background: #000;
  z-index: 1400;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
  border-radius: 40px 40px 39px 40px / 26px 26px 63px 63px;
  width: 82px;
  height: 120px;
}

.foot:after {
  content: '';
  width: 55px;
  height: 65px;
  background: #222;
  border-radius: 100%;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
}

.finger {
  position: absolute;
  width: 25px;
  height: 35px;
  background: #222;
  border-radius: 100%;
  top: 10px;
  right: 5px;
}

.finger:after,
.finger:before {
  content: '';
  width: 25px;
  height: 35px;
  background: #222;
  border-radius: 100%;
  top: 10px;
  right: 5px;
}

.finger:after {
  right: 30px;
}

.finger:before {
  right: 55px;
  top: 5px;
}

.foot.rgt {
  left: auto;
  right: -80px;
}

.foot.rgt .finger {
  left: 5px;
  right: auto;
}

.foot.rgt .finger:after {
  left: 30px;
  right: auto;
}

.foot.rgt .finger:before {
  left: 55px;
  right: auto;
}

form {
  display: none;
  max-width: 400px;
  padding: 20px 40px;
  background: #fff;
  height: 300px;
  margin: auto;
  display: block;
  box-shadow: 0 10px 15px rgba(0, 0, 0, .15);
  transition: 0.3s;
  position: relative;
  transform: translateY(-100px);
  z-index: 500;
  border: 1px solid #eee;
}

form.up {
  transform: translateY(-180px);
}

.h1regi {
  color: green;
  font-family: 'Share Tech Mono', 'Cascadia Code', Menlo, Monaco, 'Courier New', monospace;
  font-size: 2rem;
  filter: drop-shadow(0px 0px 5px currentColor);

  &::after {
    content: '';
    display: inline-block;
    width: .2em;
    height: .7em;
    background-color: currentColor;
    margin-left: .1em;
    animation: blink 1s linear infinite forwards;
    vertical-align: baseline;
  }
}

.btn {
  background: #fff;
  padding: 5px;
  width: 150px;
  height: 35px;
  border: 1px solid #FF4081;
  margin-top: 25px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 50px #FF4081 inset;
  color: #fff;
}

.btn:hover {
  box-shadow: 0 0 #FF4081 inset;
  color: #FF4081;
}

.btn:focus {
  outline: none;
}

.form-group {
  position: relative;
  font-size: 15px;
  color: #666;
}

.form-group+.form-group {
  margin-top: 30px;
}

.form-label {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 5px;
  transition: 0.3s;
}

.form-control {
  width: 100%;
  position: relative;
  z-index: 3;
  height: 35px;
  background: none;
  border: none;
  padding: 5px 0;
  transition: 0.3s;
  border-bottom: 1px solid #777;
  color: #555;
}

.form-control:invalid {
  outline: none;
}

.form-control:focus,
.form-control:valid {
  outline: none;
  box-shadow: 0 1px #FF4081;
  border-color: #FF4081;
}

.form-control:focus+.form-label,
.form-control:valid+.form-label {
  font-size: 12px;
  color: #FF4081;
  transform: translateY(-15px);
}

.alert {
  position: absolute;
  color: #f00;
  font-size: 16px;
  right: -180px;
  top: -300px;
  z-index: 200;
  padding: 30px 25px;
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: 0.4s 0.6s linear;
}

.alert:after,
.alert:before {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  background: #fff;
  left: -19px;
  bottom: -8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
  border-radius: 50%;
}

.alert:before {
  width: 15px;
  height: 15px;
  left: -35px;
  bottom: -25px;
}

.wrong-entry {
  animation: wrong-log 0.3s;
}

.alert.wrong-entry {
  opacity: 1;
  transform: scale(1);
}

@keyframes wrong-log {

  0%,
  100% {
    left: 0px;
  }

  20%,
  60% {
    left: 20px;
  }

  40%,
  80% {
    left: -20px;
  }
}`;

export default Gbl4;
