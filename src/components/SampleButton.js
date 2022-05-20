import React, { useEffect, useState, useContext } from 'react';
import './SampleButton.css';
import StyleContext from '../StyleContext';
import VolumeContext from '../VolumeContext';
import SampleContext from '../SampleContext';


const SampleButton = (props) => {
    const {id, keyTrigger, keyCode, url} = props;
    const [drumPadClass, setdrumPadClass] = useState('drum-pad')
    const [keyPressed, setKeyPressed] = useState('');
    const {sampleName, setSampleName} = useContext(SampleContext);
    const {innerStyle, setInnerStyle} = useContext(StyleContext);
    const {volume, setVolume} = useContext(VolumeContext);

    // useEffect(() => {
    //     console.log('volume ' + volume + ' updated')
    // }, [volume]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        
            return () => {
                
                document.removeEventListener('keydown', handleKeyPress)         
            }
    }, [volume]);

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
            setdrumPadClass('drum-pad');
            setInnerStyle('inner-container');
    }
};
   
    const onDrumClick = () => {
        //console.log(`Clicked`);
        let sound = new Audio (url);
        sound.loop = false;
        sound.currentTime = 0;
        sound.volume = volume / 100;
        //console.log('click ' + volume);
        sound.play();
        setSampleName(id);
      }

      const playSound = () => {
        let sound = new Audio(url);
        sound.loop = false;
        sound.currentTime = 0;
        sound.volume = volume / 100;
        // console.log('key ' + volume);
        sound.play();
        setdrumPadClass('button-pad-keypress');
        setInnerStyle('inner-container-pressed');
        setSampleName({id});
      }
   

    return(
        <div>
           <div className = {drumPadClass} onClick={onDrumClick}><div><b>{keyTrigger}</b></div></div>
        </div>
    )
}

export default SampleButton;