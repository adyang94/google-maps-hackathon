import React, { useState } from 'react';
import { FormControl, Text, FormLabel, Input, FormHelperText, FormErrorMessage, Button, InputRightElement, InputGroup, Stack } from '@chakra-ui/react';
import axios from 'axios';
import PasswordInput from '../elements/PasswordInput';
import EmailInput from '../elements/EmailInput';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypePassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePassword = (e) => setPassword(e.target.value);
  const handleRetypePassword = (e) => setRetypePassword(e.target.value)

  const handleSubmit = (e) => {
    let signupPayload = {
      email: email,
      password: password,
    };
    let url = 'www.google.com' /* NEED TO ADD BACKEND URL ENDPOINT */;

    if (password !== retypedPassword) {
      console.log('Passwords do not match!');
      return;
    }

    axios.post(url, signupPayload)
      .then(() => {
        console.log('Submission successfull.');
      })
      .catch(() => {
        console.error('Submission error occurred.');
      })

    /* NEED ERROR HANDLING IF PAYLOAD ERRORS OUT. */
  }

  return (
    <div className='signup-page public'>
      <Stack>
        <div>
          <Text fontSize='3xl'>
            Sign Up!
          </Text>
        </div>
        <FormControl>

          {/* EMAIL INPUT */}
          <EmailInput
            inputLabel='Email'
            selectorID='signupEmail'
            handleChange={handleEmailChange}
          />

          {/* PASSWORD INPUT */}
          <PasswordInput
            inputLabel='Password'
            selectorID='signupPassword'
            handleChange={handlePassword}
          />

          {/* RE-TYPE PASSWORD INPUT */}
          <PasswordInput
            inputLabel='Re-type Password'
            selectorID='retypedPassword'
            handleChange={handleRetypePassword}
          />

          <Button
            mt='1rem'
            loadingText='Submitting'
            colorScheme='teal'
            variant='outline'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </Stack>

    </div>
  );
}

export default Signup;