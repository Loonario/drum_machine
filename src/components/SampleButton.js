import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './SampleButton.css';


const SampleButton = (props) => {
    const {id, keyTrigger, keyCode, url} = props;
    const [key, setKey] = useState();

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            event.preventDefault();
            if (event.key == keyTrigger.toLowerCase() && !event.repeat){
                let sound = new Audio (url);
                sound.currentTime = 0;
                 sound.play();
            }
            })
        
    })
   
    const onDrumClick = () => {
        let sound = new Audio (url);
        sound.currentTime = 0;
        sound.play();
      }
   

    return(
        <div>
           <div className = 'button-pad' onClick={onDrumClick}><div><b>{keyTrigger}</b></div></div>
        </div>
    )
}

export default SampleButton;