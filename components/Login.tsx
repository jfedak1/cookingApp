// import { Image, StyleSheet, Platform } from 'react-native';
import React, {useState} from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Text } from "@/components/ui/text"
// import { Center } from "@/components/ui/center"
// import { Heading } from "@/components/ui/heading"
import { Box } from "@/components/ui/box"
import { Heading } from "@/components/ui/heading"

import { Input, InputField, InputSlot } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button"
// import { Button, ButtonText } from "@/components/ui/button"
// import { Icon } from "@/components/ui/icon"
// import {
//     Modal,
//     ModalBackdrop,
//     ModalContent,
//     ModalHeader,
//     ModalCloseButton,
//     ModalBody,
//     ModalFooter,
//   } from "@/components/ui/modal"

// import { ChefHat } from 'lucide-react-native'


export default function Login() {
  return (
    
      <Box className="flex flex-col items-center">
        {/* Phone# Field */}
        
        {/* Label */}
        <Heading size='xl' className='text-primary-text '>Sign In With Phone</Heading>

        <Input className="rounded-xl h-[54px] w-[300px] mt-4" size="lg">
          <InputSlot className="pl-3">
            {/* <InputIcon as={SearchIcon} /> */}
          </InputSlot>
          <InputField placeholder="Phone#" />
        </Input>

        {/* Password Field (optional) */}
        {/* 
        <Input className="rounded-xl h-15 mt-4" size="lg">
          <InputSlot className="pl-3">
            <InputIcon as={LockIcon} />
          </InputSlot>
          <InputField placeholder="Password" secureTextEntry />
        </Input>
        */}

        {/* Sign Up Button */}
        <Box className="flex flex-row items-center gap-2 mt-4">
          <Text size="lg" className="text-primary-text">Don&apos;t have an account?</Text>
          <Button size="lg" variant="link">
            <ButtonText className="text-primary-600 font-medium">Sign Up</ButtonText>
          </Button>
        </Box>
      </Box>
  );
}
