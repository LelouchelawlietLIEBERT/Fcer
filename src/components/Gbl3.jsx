import { createGlobalStyle } from "styled-components";

const Gbl3 = createGlobalStyle`
:root {
  --white: white;
  --red: #e31b23;
  --bodyColor: black;
  --borderFormEls: hsl(0, 0%, 10%);
  --bgFormEls: black;
  --bgFormElsFocus: hsl(0, 7%, 20%);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

a {
  color: red;
}

input,
textarea,
button {
  font-family: inherit;
  font-size: 100%;
}

button,
label {
  cursor: pointer;
}

textarea {
  resize: none;
}

ul {
  list-style: none;
  position: fixed;
  top: 125px;
  margin-left: 370px;
}

body {
  background: var(--bodyColor);
}

.container {
  color: white;
  font: 18px/1.5 "Open Sans", sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.my-form h1 {
  margin-bottom: 1.5rem;
}

.my-form li,
.my-form .grid>*:not(:last-child) {
  margin-bottom: 1.5rem;
}

.my-form input,
.my-form textarea,
.my-form button {
  width: 100%;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid var(--borderFormEls);
  color: var(--white);
  background: var(--bgFormEls);
  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
}

.my-form textarea {
  height: 170px;
}

.my-form ::placeholder {
  color: inherit;
  /*Fix opacity issue on Firefox*/
  opacity: 1;
}

.my-form select:focus,
.my-form input:focus,
.my-form textarea:focus,
.my-form button:enabled:hover,
.my-form button:focus,
.my-form input[type="checkbox"]:focus {
  background: var(--bgFormElsFocus);
}

.my-form select:focus,
.my-form input:focus,
.my-form textarea:focus {
  transform: scale(1.02);
}

.my-form *:required,
.my-form select {
  background-repeat: no-repeat;
  background-position: center right 12px;
  background-size: 15px 15px;
}

.my-form *:required {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/asterisk.svg");
}

.my-form select {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/down.svg");
}

.my-form *:disabled {
  cursor: default;
  filter: blur(2px);
}
.my-form .required-msg {
  display: none;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/asterisk.svg") no-repeat center left / 15px 15px;
  padding-left: 20px;
}

.my-form .btn-grid {
  position: relative;
  overflow: hidden;
  transition: filter 0.2s;
}

.my-form button {
  font-weight: bold;
}

.my-form button>* {
  display: inline-block;
  width: 100%;
  transition: transform 0.4s ease-in-out;
}

.my-form button .back {
  position: absolute;
  left: 45%;
  top: 50%;
  transform: translate(-110%, -50%);
}

.my-form button:enabled:hover .back,
.my-form button:focus .back {
  transform: translate(-50%, -50%);
}

.my-form button:enabled:hover .front,
.my-form button:focus .front {
  transform: translateX(110%);
}

.my-form input[type="checkbox"] {
  position: absolute;
  left: -9999px;
}

.my-form input[type="checkbox"]+label {
  position: relative;
  display: inline-block;
  padding-left: 2rem;
  transition: background 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
}

.my-form input[type="checkbox"]+label::before,
.my-form input[type="checkbox"]+label::after {
  content: "";
  position: absolute;
}

.my-form input[type="checkbox"]+label::before {
  left: 0;
  top: 6px;
  width: 18px;
  height: 18px;
  border: 2px solid var(--white);
}

.my-form input[type="checkbox"]:checked+label::before {
  background: var(--red);
}

.my-form input[type="checkbox"]:checked+label::after {
  left: 7px;
  top: 7px;
  width: 6px;
  height: 14px;
  border-bottom: 2px solid var(--white);
  border-right: 2px solid var(--white);
  transform: rotate(45deg);
}

@media screen and (min-width: 600px) {
  .my-form .grid {
    display: grid;
    grid-gap: 1.5rem;
  }

  .my-form .grid-2 {
    grid-template-columns: 1fr 1fr;
  }

  .my-form .grid-3 {
    grid-template-columns: auto auto auto;
    align-items: center;
  }

  .my-form .grid>*:not(:last-child) {
    margin-bottom: 0;
  }

  .my-form .required-msg {
    display: block;
  }
}

@media screen and (min-width: 541px) {
  .my-form input[type="checkbox"]+label::before {
    top: 50%;
    transform: translateY(-50%);
  }

  .my-form input[type="checkbox"]:checked+label::after {
    top: 3px;
  }
}`;

export default Gbl3;
