import { useState } from 'react';
import { SwitchCarousel, SwitchInput, SwitchKnob } from './index.styles';

const Switch = ({ toggleSwitch, switchIsOn }: any) => {

  const [checked, setChecked] = useState(false);
  const flipSwitch = (e: any) => { setChecked(e.target.checked); toggleSwitch(checked) }

  return (
    <SwitchCarousel>
      <SwitchInput hidden onChange={flipSwitch} type="checkbox" />
      <SwitchKnob></SwitchKnob>
    </SwitchCarousel>
  )
}

export default Switch;