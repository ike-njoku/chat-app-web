import React from 'react';
import { Ball, Carousel } from './index.styles'
const ThemeSelector = () => {

  const toggleTheme = (e: any) => {
    return e.target.classList.toggle('active');
  }

  return (
    <Carousel onClick={toggleTheme}>
      <Ball></Ball>
    </Carousel>
  )
}

export default ThemeSelector;