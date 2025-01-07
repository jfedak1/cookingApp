// import { Image, StyleSheet, Platform } from 'react-native';
import React, {useState} from 'react';
import { Text } from "@/components/ui/text"
import { Center } from "@/components/ui/center"
import { Heading } from "@/components/ui/heading"
import { Box } from "@/components/ui/box"
import { Button, ButtonText } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import {
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
  } from "@/components/ui/modal"

import { ChefHat } from 'lucide-react-native'
import Login from "@/components/Login"
import SignUp from "@/components/SignUp"
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function IndexComponent() {
  // const [showModal, setShowModal] = React.useState(false)

  // State for initial login/signup display
   const [loginSignUpDisplay, setLoginSignUpDisplay] = useState("block")
   
  // State for Login display
  const [loginDisplay, setLoginDisplay] = useState("hidden")

  // State for Signup display
  const [signUpDisplay, setSignUpDisplay] = useState("hidden")

  const handleLoginButton = () => {
    setLoginSignUpDisplay("hidden");
    setLoginDisplay("block");
    setSignUpDisplay("hidden");
  }

  const handleSignupButton = () => {
    setLoginSignUpDisplay("hidden");
    setLoginDisplay("hidden");
    setSignUpDisplay("block");
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Box className='h-full bg-white'>
        <Center className="h-[80%]">

          {/* Header Icon */}
          <Box className='bg-primary-500 rounded-full p-5 mt-4'>
            <Icon as={ChefHat} className='w-[90px] h-[90px] text-white rotate-[30deg]' />
          </Box>

          {/* Header Text */}
          <Heading size='3xl' className='text-primary-text mb-20 mt-5'>Welcome to Chefly!</Heading>

          {/* Login/Signup Buttons */}
          <Box className={` flex flex-col ${loginSignUpDisplay} items-center`}>

            {/* Login Button */}
            <Button size='xl' className='rounded-xl w-[300px] h-[54px]' onPress={() => handleLoginButton()}>
              <ButtonText>Login</ButtonText>
            </Button>

            {/* Sign Up Button */}
            <Box className='flex flex-row items-center gap-2 mt-2'>
              <Text size='lg' className='text-primary-text'>Don't have an account?</Text>
              <Button size='lg' variant='link' className='' onPress={() => handleSignupButton()}>
                <ButtonText className='text-primary-600 font-medium'>Sign Up</ButtonText>
              </Button>
            </Box>

          </Box>

          {/* Login Form */}
          <Box className={`${loginDisplay}`}>
            <Login />
          </Box>

          {/* Signup Form */}
          <Box className={`${signUpDisplay}`}>
            <SignUp />
          </Box>

        </Center> 
      </Box>
    </TouchableWithoutFeedback>
  );
}
