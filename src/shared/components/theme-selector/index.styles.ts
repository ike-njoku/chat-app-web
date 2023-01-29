import styled from "styled-components";

export const Carousel = styled.div`
  width: 40px;
  height: 26px;
  margin: 7px;
  border-radius: 14px;
  background-color: ${({theme}) => theme.primaryColor};
  transition: all ease-in 0.5s;
  border: solid 2px;
  cursor: pointer;

  &.active {
    background-color: white;
    border-color:  ${({theme}) => theme.primaryColor};
  }

  &.active > div {
    background-color: ${({theme}) => theme.primaryColor};
    transform: translateX(120%);
  }
`
export const Ball = styled.div`
  height: 12.5px;
  width: 12.5px;
  margin: 5px;
  border-radius: 50%;
  transition: all ease-in 0.5s;
  background-color: white;
  pointer-events: none;
`