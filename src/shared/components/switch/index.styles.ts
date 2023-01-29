import styled from "styled-components";

export const SwitchCarousel = styled.div`
  margin: 2px;
  height: 25px;
  width: 46px;
  border-radius: 14px;
  border: solid 2px ${({theme}) => theme.primaryColor};
  background-color: ${({theme}) => theme.primaryColor};
`
export const SwitchBall = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 2px 2px 2px;
  background-color: ${({theme}) => theme.themeOpposite};
`