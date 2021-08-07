import React from 'react';
import styled from 'styled-components';

const TempePar = styled.p`

`;

export const Temperature = ({ temp }) => {
  return (
    <TempePar> <sup>o</sup>C</TempePar>
  )
}
