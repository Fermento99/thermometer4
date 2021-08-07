import React, { useState } from 'react';
import styled from 'styled-components';
import { CollapsedDisplay } from './modes/CollapsedDisplay';
import { ExtendedDisplay } from './modes/ExtendedDisplay';

const DisplayBox = styled.div`
  background-color: teal;
  margin: .5em;
`;

const Title = styled.h3`
  margin: .4em;
  width: min-content;
`;

export const Display = ({ code, name }) => {
  const [extended, setState] = useState(false);

  return (
    <DisplayBox onClick={() => extended ? null : setState(true)}>
      <Title>{name}</Title>
      {extended ? <ExtendedDisplay code={code} collapseFn={() => setState(false)} /> : <CollapsedDisplay code={code} />}
    </DisplayBox>
  );
}

