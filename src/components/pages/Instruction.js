import React from 'react';
import LargeButton1 from '../elements/LargeButton1';
import {Text, OrderedList, ListItem} from '@chakra-ui/react';


function Instruction () {
  return (
    <div className='instructions-page public'>
      <div>
        <Text fontSize='3xl'>
          INSTRUCTIONS
        </Text>
      </div>

      <div>
          <OrderedList className='instructions-list-ctn'>
            <ListItem className='instructions-item'>Whether you're a visitor or frequenter around the area, use this app to find nearby events by typing in your location.</ListItem>
            <ListItem>If you're a host, continue to the submission page to add your event and spread the word!</ListItem>
          </OrderedList>
        </div>

      <div>
        <LargeButton1 text="Sign Up!" path="/signup"/>
        <br></br>
        <LargeButton1 text="Login!" path="/login"/>
        <br></br>
        <LargeButton1 text="Add an event!" path="/submitevent"/>
        <br></br>
        <LargeButton1 text="Go to map" path="/map"/>

      </div>
    </div>
  );
}

export default Instruction;