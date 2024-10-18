import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Box,
  Link,
  Image,
  FormControl,
  FormHelperText,
  Spinner,
  useToast,
} from '@chakra-ui/react';

import axios from 'axios';

import React, { useState } from 'react';

function LoginSignUp({ onToggle, isOpen, onClose }) {
  const [isLoginPage, setLoginPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const initialData = {
    name: '',
    email: '',
    password: ''
  }

  const [data, setData] = useState(initialData);
  const infoToast = useToast();

  const { name, email, password } = data;

  const handleComponent = () => {
    setLoginPage(!isLoginPage);
    setData(initialData);
    setError('');
  }

  const handleData = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError('All fields are required.');
      infoToast({
        title: 'Failed to Submit',
        description: 'Please fill out all fields.',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`https://lenskart-replica.onrender.com/user/register`, data);

      setData(initialData);
      console.log(response)

      if (response.data) {
        infoToast({
          title: 'Registered Successfully',
          description: 'You can now proceed with your shopping.',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });

        setLoginPage(true)
      } else {
        infoToast({
          title: 'Failed to Register',
          description: 'Please check your credentials and try again.',
          status: 'error',
          duration: 5000,
          isClosable: false,
        });
      }
    } catch (error) {
      console.log('Error - ' + error);
      setError('Failed to register. Please try again.');
      infoToast({
        title: 'Error Occurred',
        description: 'There was a problem processing your request.',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (email.trim() === '' || password.trim() === '') {
      setError('All fields are required.');
      infoToast({
        title: 'Failed to Submit',
        description: 'Please fill out all fields.',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`https://lenskart-replica.onrender.com/user/login`, data);

      setData(initialData);
      console.log(response)

      if (response.data.token) {

        const token = response.data.token.split(" ")[1];

        localStorage.setItem('token', token);

        infoToast({
          title: 'Login Successfully',
          description: 'You can now proceed with your shopping.',
          status: 'success',
          duration: 5000,
          isClosable: false,
        });
      } else {
        infoToast({
          title: 'Failed to Login',
          description: 'Please check your credentials and try again.',
          status: 'error',
          duration: 5000,
          isClosable: false,
        });
      }
    } catch (error) {
      console.log('Error - ' + error);
      setError('Failed to register. Please try again.');
      infoToast({
        title: 'Error Occurred',
        description: 'There was a problem processing your request.',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
    } finally {
      setIsLoading(false);
    }
  }



  return (
    <Modal isOpen={isOpen} onClose={onClose} size={['xs', 'md', 'lg']}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image src='https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg' w={'90%'} />
            <Text fontSize='20px' mt={2} textAlign='center'>
              {isLoginPage ? 'LogIn' : 'SignUp'}
            </Text>
          </Box>
        </ModalHeader>

        <ModalBody>
          {error && <Text color='red.500'>{error}</Text>}
          {isLoginPage ? (
            <>
              <FormControl isRequired>
                <Text>Email</Text>
                <Input
                  placeholder='Enter your email'
                  value={email}
                  name='email'
                  onChange={handleData}
                />
              </FormControl>

              <FormControl isRequired my={4}>
                <Text>Password</Text>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    name='password'
                    onChange={handleData}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText>We'll never share your password.</FormHelperText>
              </FormControl>
            </>
          ) : (
            <>
              <FormControl isRequired>
                <Text>Name</Text>
                <Input
                  placeholder='Enter your name'
                  value={name}
                  name='name'
                  onChange={handleData}
                />
              </FormControl>

              <FormControl isRequired my={2}>
                <Text>Email</Text>
                <Input
                  placeholder='Enter your email'
                  value={email}
                  name='email'
                  onChange={handleData}
                />
              </FormControl>

              <FormControl isRequired>
                <Text>Password</Text>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    name='password'
                    onChange={handleData}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </>
          )}

          <Link onClick={handleComponent} >
            {isLoginPage ? 'Don’t have an account?' : 'New to Lenskart? Sign up'}
          </Link>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' colorScheme='red' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='green' onClick={(e)=>{isLoginPage?handleLogin(e):handleRegister(e)}} isDisabled={isLoading}>
            {isLoading ? <Spinner size='sm' /> : (isLoginPage ? 'LogIn' : 'SignUp')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginSignUp;
