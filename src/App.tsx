import React from 'react';
import './styles/App.css';
import Basic from './components/Basic';
import Array from './components/Array';
import PassProps from './components/PassProps';
import Interface from './components/Interface';

function App() {
  return (
    <>
      <Basic />
      <Array />
      <PassProps message="hi" />
      <Interface name="route" message="hello" />
    </>
  );
}

export default App;
