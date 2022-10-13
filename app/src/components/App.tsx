import React from 'react';
import { Main } from './Main';

const App = () => {
  return (
    <>
      <header style={{ width: "100%", textAlign: "center", backgroundColor: "#0068ae", color: "#fff", padding: "8px" }}>
        <h1 style={{ margin: "0" }}>都道府県別人口推移</h1>
      </header>
      <Main />
    </>
  );
};

export default App;
