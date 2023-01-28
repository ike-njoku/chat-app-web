import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Itim&display=swap');

* { 
  border: 0px;
  padding: 0px;
  margin: 0px;
  font-family: 'Gloria Hallelujah', cursive;
  font-family: 'Itim', cursive; 
  font-size: 16px;
  box-sizing: border-box;
}
`

export default GlobalStyles;
