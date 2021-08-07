import React from 'react';
import styled from 'styled-components';

const TimerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.p`
  margin: .3em;
`;

const Title = styled.h2`
  margin: .4em;
`;

export const Timer = ({ time }) => {
  return (
    <TimerBox>
      <Title>Ostatnia aktualizacja:</Title>
      <Line>{processDate(time)}</Line>
      <Line>{processTime(time)}</Line>
    </TimerBox>
  );
}

const processDate = date => `Dzień: ${date.toLocaleDateString()}`;

const processTime = date => `Godzina: ${date.toLocaleTimeString().substring(0, 5)}`;