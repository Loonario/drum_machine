import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap';

const  Volume = (props) => {


    return (
        <div>
   <Form>
  <Form.Range
    value = '7'
    min = '0'
    max ='10'
    id="customrange"
    label="Check this range"
  />
</Form>
        </div>
    )
}

export default Volume;