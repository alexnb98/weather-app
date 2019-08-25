import React from 'react';
import './App.css';
import Heidelberg from './data/example.json'
import Background from './components/Background/Background';
import Day from './components/Day/Day';
import Week from './components/Week/Week';
import Form from './components/Form/Form';

function App() {
  const fivedays = Heidelberg.list.filter(item => {
    return item.dt_txt.includes('12:00:00')
  })
  return (
    <div className="App">
      <Background>
        <div className="container">
          <div className='box'>
            <Form></Form>
            <h1 className='center'>Heidelberg</h1>
            <Day temp={Heidelberg.list[0].main.temp} desc='clear sky' icon={800}></Day>
            <Week list={fivedays}></Week>
          </div>
        </div>
      </Background>
    </div>
  );
}

export default App;
