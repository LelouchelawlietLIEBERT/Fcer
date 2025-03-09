import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
canvas {
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	z-index: 2;
	pointer-events: none;
	visibility: hidden;
	opacity: 0;
}
`;

export default GlobalStyles;
