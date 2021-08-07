import React, { useState } from 'react';
import styled from 'styled-components';
import { Diagram } from './utils/Diagram';
import { Info } from './utils/Info';

const CollapseBtn = styled.button`
  float: right;
  top: .2em;
  right: .2em;
`;

export const ExtendedDisplay = ({ code, collapseFn }) => {
  const [state, setdata] = useState({ data: [], err: false, loaded: false });
  // fetch(/* call API with code */)
  //   .then(res => res.json())
  //   .then(data => setdata({ data:/* data.temp */, err: null, loaded: true }))
  //   .catch(err => { setdata(data: [], err: true, loaded: false); console.log(err) });


  return (
    <div>
      <CollapseBtn onClick={() => collapseFn()} >Collapse</CollapseBtn>
      {state.err && <Info>error D:</Info>}
      {!state.loaded && <Info>Loading...</Info>}
      <Diagram data={state.data} />
    </div>
  );
}
