import React from 'react';
import Slot1 from './Slot1';
import Slot2 from './Slot2';
import './Slots.css';
import Main from './Main';

const Slots = () => {
  return (
    <div className="main">
        <Slot1 />
        <Slot2/>
        <Main/>
    </div>
  )
}

export default Slots