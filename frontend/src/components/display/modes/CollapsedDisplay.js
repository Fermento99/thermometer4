import React, { useState } from 'react'
import { Temperature } from './utils/Temperature';
import { Info } from './utils/Info';

export const CollapsedDisplay = ({ code }) => {
  const [temperature, setTemperature] = useState(0);
  // fetch(/* call API with code */)
  //   .then(res => res.json())
  //   .then(data => setTemperature(/* data.temp */))
  //   .catch(err => {setTemperature("error D:"); console.log(err)});

  return (
    <div>
      {temperature ? <Temperature temp={temperature} /> : <Info>Loading...</Info>}
    </div>
  );
}
