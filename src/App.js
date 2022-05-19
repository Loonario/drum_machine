import React, {useState} from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'
import './App.css';
import StyleContext from './StyleContext';
import VolumeContext from './VolumeContext';
import ButtonList from './containers/ButtonsList';
import Volume from './components/Volume';
import Screen from './components/Screen';

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

const [innerStyle, setInnerStyle] = useState('inner-container');
const [volume, setVolume] = useState(50);

  return (
    <VolumeContext.Provider value = {{volume, setVolume}}>
    <StyleContext.Provider value = {{innerStyle, setInnerStyle}}>

    <ThemeProvider
  breakpoints={['lg', 'md', 'sm', 'xs']}
>


  <div className={'container-main'}>
    <div className={innerStyle}>
      <div className = {'drum-pad'}>
      <Stack gap={3}>
      <ButtonList buttons = {row_1}/>
      <ButtonList buttons = {row_2}/>
      <ButtonList buttons = {row_3}/>
      </Stack>
      </div>
      <div className={'other-func'}>
      <Screen />
      <Volume />
      </div>
      
      </div>
      </div>
    </ThemeProvider>
    </StyleContext.Provider>
    </VolumeContext.Provider>
    
  )
}

export default App;
