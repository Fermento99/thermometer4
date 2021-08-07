import React from 'react';
import styled from "styled-components";
import { Display } from './components/display/Display';
import { Timer } from "./components/Timer";

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DisplayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const App = () => {
  return (
    <AppBox>
      <Timer time={new Date()} />
      <DisplayBox>
        <Display code={21} name="Salon" />
        <Display code={23} name="Łazienka" />
        <Display code={25} name="Sypialnia" />
        <Display code={27} name="Paweł" />
        <Display code={29} name="Michał" />
      </DisplayBox>
    </AppBox>
  );
}

export default App;