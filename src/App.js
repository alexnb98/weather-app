import React from 'react';
import './App.css';
import Heidelberg from './data/example.json'
import Background from './components/Background/Background';
import Day from './components/Day/Day';

function App() {
  const fivedays = Heidelberg.list.filter(item => {
    return item.dt_txt.includes('12:00:00')
  })
  return (
    <div className="App">
      <Background>
        <div className="container">
          <div className='box'>
            <h1 className='center'>Heidelberg</h1>
            <Day temp='16' desc='clear sky'></Day>
          </div>
        </div>
      </Background>
    </div>
  );
}

export default App;
