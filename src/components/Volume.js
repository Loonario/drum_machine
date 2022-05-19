import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import VolumeContext from '../VolumeContext';

const  Volume = () => {
const {volume, setVolume} = useContext(VolumeContext);

    return (
        <div>
   <Form>
  <Form.Range
    value = {volume}
    id="customrange"
    // min = {0}
    // max = {100}
    label="Check this range"
    onChange = {e => setVolume(e.target.value)}
  />
</Form>
        </div>
    )
}

export default Volume;