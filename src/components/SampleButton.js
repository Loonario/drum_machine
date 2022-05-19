import React, { useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './SampleButton.css';


const SampleButton = (props) => {
    const {id, keyTrigger, keyCode, url} = props;
    const [padActive, setPadActive] = useState(false);
    const [drumPadClass, setdrumPadClass] = useState('button-pad')
    const [keyPressed, setKeyPressed] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
            return () => {
                document.removeEventListener('keydown', handleKeyPress)         
            }
    }, []);

    const handleKeyPress = (e) => {
        if (e.key == keyTrigger.toLowerCase() && !e.repeat){
            //console.log(`key ${e.key} pressed`);
            e.preventDefault();
            playSound();
            setKeyPressed(e.key);
        }
    };

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
            
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [keyPressed])

    const handleKeyUp = (e) => {
        if (keyPressed == keyTrigger.toLowerCase() && !e.repeat){
            e.preventDefault();
            //console.log(`key ${e.key} off`);
            setKeyPressed('');
            setdrumPadClass('button-pad');
    }
};
   
    const onDrumClick = () => {
        //console.log(`Clicked`);
        let sound = new Audio (url);
        sound.loop = false;
        sound.currentTime = 0;
        sound.volume = 0.2;
        sound.play();
      }

      const playSound = () => {
        let sound = new Audio(url);
        sound.volume = 0.2;
        sound.loop = false;
        sound.currentTime = 0;
     sound.play();
     setdrumPadClass('button-pad-keypress');
     
      }
   

    return(
        <div>
           <div className = {drumPadClass} onClick={onDrumClick}><div><b>{keyTrigger}</b></div></div>
        </div>
    )
}

export default SampleButton;