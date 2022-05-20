import React, { useEffect, useState, useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import VolumeContext from '../VolumeContext';
import SampleContext from '../SampleContext';
import './Screen.css';

const Screen = (expiryTimestamp) => {

    const [screenClass, setScreenClass] = useState('screen-disabled');
    const [volTextClass, setVolTextClass] = useState('vol-text-disabled');
    const [sampleText, setSampleText] = useState('sample-disabled')
    const {sampleName, setSampleName} = useContext(SampleContext);
    const {volume, setVolume} = useContext(VolumeContext);
    
    const {restart} = useTimer({expiryTimestamp, onExpire: () => {
        setScreenClass('screen-disabled');
        setVolTextClass('vol-text-hidden');
        setSampleText('sample-hidden');


    }});

    useEffect(() => {
        setScreenClass('screen');
        setVolTextClass('vol-text');
        setSampleText('sample-disabled');
        const timeStamp = new Date();
        timeStamp.setSeconds(timeStamp.getSeconds() + 2);
        restart(timeStamp);

        // var volumeText = <div className = >`Volume: ${volume}`</div>;
        return () => {
            // var volumeText = <div style = {{display: 'block'}}>`Volume: ${volume}`</div>;
            //setTimeout(() => setScreenClass('screen-disabled'), 2000);
        }
        
    }, [volume])


    useEffect(() => {
        setScreenClass('screen');
        setVolTextClass('vol-text-disabled');
        setSampleText('sample');
        const timeStamp = new Date();
        timeStamp.setSeconds(timeStamp.getSeconds() + 2);
        restart(timeStamp);

    }, [sampleName])


    // const screenOff = () => {
    //     setTimeout(() => setScreenClass('screen-disabled'), 2000);
    // }

    return (
        <div className = {screenClass} id={"display"}>
            <div className = {volTextClass}><div>Volume: </div><div>{volume}</div></div>
            <div className={sampleText}>
            {sampleName}
            </div>
        </div>
    )
}

export default Screen;