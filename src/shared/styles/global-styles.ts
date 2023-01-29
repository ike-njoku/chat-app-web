import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Itim&display=swap');

* { 
  font-family: 'Gloria Hallelujah', cursive;
  font-family: 'Itim', cursive; 
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

h1 {
  font-size: 30px;
}

input {
  width: 98%;
  padding: 1%;
  margin: 1% 1%;
}
`

export default GlobalStyles;
