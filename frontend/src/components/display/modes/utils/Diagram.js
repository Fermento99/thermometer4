import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export const Diagram = ({ data }) => {
  const canvRef = useRef(null);
  useEffect(() => {
    const ctx = canvRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: "test",
          data: [{ x: 1, y: 3 }, { x: 3, y: 0 }, { x: 4, y: 4 }],
          borderColor: '#000000',
        }]
      },
    });
  });

  return (
    <div>
      <canvas ref={canvRef} width='200px' height='200px' ></canvas>
    </div>
  )
}
