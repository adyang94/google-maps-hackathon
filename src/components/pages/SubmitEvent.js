import React, { useState } from 'react';
import { FormControl, Text, FormLabel, Input, FormHelperText, FormErrorMessage, Button, InputRightElement, InputGroup, Stack, Form } from '@chakra-ui/react';
import axios from 'axios';
import PasswordInput from '../elements/PasswordInput';
import EmailInput from '../elements/EmailInput';

function SubmitEvent() {

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = process.env.REACT_APP_DATABASE_URL + 'Events';

    console.log(process.env.REACT_APP_DATABASE_URL);
    console.log(e.target.eventName.value);

    let payLoad = { 
      event_name: e.target.eventName.value,
      address: e.target.eventAddress.value,
      description: e.target.eventDescription.value,
      date: e.target.eventDate.value
    };

    let headers = {
      headers: {
        apikey: process.env.REACT_APP_DATABASE_API_KEY,
        Authorization: 'Bearer' + process.env.REACT_APP_DATABASE_API_KEY
      }
    }

    axios.post(url, payLoad, headers)
      .then(() => {
        console.log('Submission successfull.');
      })
      .catch(() => {
        console.error('Submission error occurred.');
      })

    /* NEED ERROR HANDLING IF PAYLOAD ERRORS OUT. */
  }

  return (
    <div className='submitevent public'>
      <Stack>
        <div>
          <Text fontSize='3xl'>
            Submit your event!
          </Text>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            {/* Event Name */}
            <div>
              <FormLabel mt='1rem'>Event Name:</FormLabel>
              <Input name='eventName' className='eventName' />
            </div>

            {/* Address */}
            <div>
              <FormLabel mt='1rem'>Address:</FormLabel>
              <Input name='eventAddress' className='eventAddress' />
            </div>

            {/* Description */}
            <div>
              <FormLabel mt='1rem'>Description:</FormLabel>
              <Input name='eventDescription' className='eventDescription' />
            </div>

            {/* Date */}
            <div>
              <FormLabel mt='1rem'>Date:</FormLabel>
              <Input name='eventDate' className='eventDate' />
            </div>

            <Button
              mt='1rem'
              loadingText='Submitting'
              colorScheme='teal'
              variant='outline'
              type='submit'
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Stack>

    </div>
  );
}

export default SubmitEvent;