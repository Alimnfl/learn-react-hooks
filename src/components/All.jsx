import React, { useState } from 'react';
import Profile from './Profile';
import Introduction from './Introduction';

function All() {
  //   - pacarSaya → Getter
  //   - setPacarSaya → Setter
  const [pacarSaya, setPacarSaya] = useState('Azah');

  return (
    <div>
      <h1>{pacarSaya}</h1>
      <Profile />
      <Introduction name="Alimnfl" />
      <Introduction name="Razar" />
    </div>
  );
}

export default All;
