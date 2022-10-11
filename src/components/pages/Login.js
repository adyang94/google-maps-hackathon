import React, { useState } from 'react';
import { FormControl, Text, FormLabel, Input, FormHelperText, FormErrorMessage, Button, InputRightElement, InputGroup, Stack } from '@chakra-ui/react';
import axios from 'axios';
import PasswordInput from '../elements/PasswordInput';
import EmailInput from '../elements/EmailInput';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    let signupPayload = {
      email: email,
      password: password,
    };
    let url = 'www.google.com' /* NEED TO ADD BACKEND URL ENDPOINT */;

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
    // <div className='login-page public'>
    //   <Stack>
    //     <div>
    //       <Text fontSize='3xl'>
    //         LOG IN
    //       </Text>
    //     </div>

    //     <FormControl>

    //       {/* EMAIL INPUT */}
    //       <EmailInput
    //         inputLabel='Email'
    //         selectorID='loginEmail'
    //         handleChange={handleEmailChange}
    //       />

    //       {/* PASSWORD INPUT */}
    //       <PasswordInput
    //         inputLabel='Password'
    //         selectorID='signupPassword'
    //         handleChange={handlePassword}
    //       />

    //       <Button
    //         mt='1rem'
    //         loadingText='Submitting'
    //         colorScheme='teal'
    //         variant='outline'
    //         onClick={handleSubmit}
    //       >
    //         Submit
    //       </Button>

    //     </FormControl>
    //   </Stack>


    // </div>
    <div></div>
  );
}

export default Login;