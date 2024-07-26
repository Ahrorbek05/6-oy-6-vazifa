import React from 'react';
import './App.css';
import Index from './components/Inputs';
import Registration from './components/Registration'
import Api from './components/Api';

function App() {
  return (
    <div>
      <Index />
      <Registration/>
      <Api/>
    </div>
  );
}

export default App;
