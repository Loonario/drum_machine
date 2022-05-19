import React from 'react';

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'
import './App.css';
import ButtonList from './containers/ButtonsList';
import Volume from './components/Volume';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const row_1 = bankOne.slice(0, 3);
const row_2 = bankOne.slice(3, 6);
const row_3 = bankOne.slice(6, 9);

function App() {

 

  return (
    <ThemeProvider
  breakpoints={['lg', 'md', 'sm', 'xs']}
>


  <div className={'container-main'}>
    <div className={'inner-container'}>
      <div className = {'drum-pad'}>
      <Stack gap={3}>
      <ButtonList buttons = {row_1}/>
      <ButtonList buttons = {row_2}/>
      <ButtonList buttons = {row_3}/>
      </Stack>
      </div>
      <div className={'other-func'}>
      <Volume />
      </div>
      
      </div>
      </div>
    </ThemeProvider>
  )
}

export default App;
