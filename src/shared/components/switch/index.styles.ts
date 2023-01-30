import styled from "styled-components";
export const SwitchCarousel = styled.label`
  cursor: pointer;
  padding: 2px;
  width: 40px;
  display: block;
  border-radius: 15px;
  transition: all 0.4s ease-in-out;
  border: solid 2px ${({theme}) => theme.primaryColor};
  background-color: ${({theme}) => theme.textColor};
`
export const SwitchInput = styled.input`
  &:checked {
    background-color: ${({theme}) => theme.primaryColor};

     & + span {
      background-color: ${({theme}) => theme.primaryColor};
      transform: translateX(18px);
     }
  }
`
export const SwitchKnob = styled.span`
  display: block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.primaryColor};
  transition: all 0.4s ease-in-out;
`