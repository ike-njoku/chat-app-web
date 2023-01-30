import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`
export const Div = styled.div<{
  backgroundColor?: string, 
  color?: string}
>`
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.textColor};
`
export const GridColumn5 = styled.div`
  grid-column: span 5;
`
export const GridColumn6 = styled.div`
  grid-column: span 6;
`
export const GridColumn7 = styled.div`
  grid-column: span 7;
`
export const GridColumn12 = styled.div`
  grid-column: span 12;
`