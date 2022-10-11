import React from 'react';
import {Text} from '@chakra-ui/react';
import LargeButton1 from '../elements/LargeButton1';


function Homepage () {
  return (
    <div className='homepage public'>
      <div>
        <Text fontSize='md'>
          WELCOME TO
        </Text>
        <Text fontSize='3xl'>
          Google Maps Hackathon
        </Text>
      </div>
      <LargeButton1  text="Continue" path="/instructions"/>
    </div>
  );
}

export default Homepage;