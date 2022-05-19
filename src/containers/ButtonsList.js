import React from 'react';
import SampleButton from '../components/SampleButton';
import Stack from 'react-bootstrap/Stack'

const ButtonList = ({buttons}) => {



    const buttonsArray = buttons.map((button, i) => {
        return <SampleButton key = {buttons[i].id} 
        id = {buttons[i].id} 
        keyTrigger = {buttons[i].keyTrigger} 
        keyCode = {buttons[i].keyCode} 
        url = {buttons[i].url} />
    })


    return (
        <div>
            <Stack direction="horizontal" gap={1}>
            {buttonsArray}
            </Stack>
            

        </div>
    )
}

export default ButtonList;