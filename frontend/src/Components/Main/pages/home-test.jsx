import React from 'react'
import { Box, Button, Divider, Flex, Image, Text, useToast } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";

function HomeTest() {

  const bookAppointment = useToast();

  const handleBookAppointment = () => {
    bookAppointment({
      title: 'Appointment Booked',
      description: 'Your appointment has been booked successfully',
      status: 'success',
      duration: 3000,
    });
  }

  return (
    <Flex
      m='auto'
      my='10'
      w={{ base: '95%', md: '85%' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      justify='space-between'
    >
      <Box
        w={{ base: '100%', lg: '50%' }}
        overflow='hidden'
        borderRadius='40px'
        mb={{ base: '10', lg: '0' }}
      >
        <video
          src="https://storage.googleapis.com/lenskart-prod-app-videos/EyeTest-Square-LK%40Home.mp4#t=0.1"
          autoPlay
          muted
          style={{ width: '100%' }}
        />
      </Box>

      <Box
        w={{ base: '100%', lg: '35%' }}
        border='1px solid rgba(0,0,0,0.2)'
        borderRadius='40px'
        p={8}
        mt={{ md: '8' }}
      >
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>Lenskart at Home</Text>
        <Text fontSize='sm'>Eye Test & Frame Trial Service</Text>

        <Flex color={'green'} my='3'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Flex>

        <Text fontWeight='semibold'>Eye test eligibility</Text>

        <Flex align='center'>
          <Image src='https://static.lenskart.com/media/desktop/img/HTO/HTOAppointmentConfirmed.svg' alt='green check' m='3' />
          <Text fontSize={'12px'}>A well-lit room with 10 ft space is required</Text>
        </Flex>

        <Flex align='center'>
          <Image src='https://static.lenskart.com/media/desktop/img/HTO/HTOAppointmentConfirmed.svg' alt='green check' m='3' />
          <Text fontSize={'12px'}>Required age for eye test is 14 - 75 years</Text>
        </Flex>

        <Flex align='center'>
          <Image src='https://static.lenskart.com/media/desktop/img/DesignStudioIcons/RedCross.svg' alt='Red cross' m='3' />
          <Text fontSize={'12px'}>Not for Diabetics or those with High BP (Clinical eye test is required)</Text>
        </Flex>

        <Divider borderColor='gray' w='90%' m='auto' my={5} />

        <Text fontWeight='semibold'>What to expect?</Text>

        <Box>
          <Flex align='center'>
            <Image src='https://static.lenskart.com/media/desktop/img/HTO/EyeWithTorch.svg' alt='image' />
            <Text fontSize={'12px'}>12 Step Eye Checkup by certified professionals</Text>
          </Flex>
          <Flex align='center'>
            <Image src='https://static.lenskart.com/media/desktop/img/HTO/EyeWithBoxes.svg' alt='image' />
            <Text fontSize={'12px'}>Latest Eye Test Equipments</Text>
          </Flex>
          <Flex align='center'>
            <Image src='https://static.lenskart.com/media/desktop/img/HTO/Glasses.svg' alt='image' />
            <Text fontSize={'12px'}>Try 150+ frames at home</Text>
          </Flex>
        </Box>

        <Button colorScheme='blue' w='full' my={3} onClick={handleBookAppointment}>Book Appointment</Button>
      </Box>
    </Flex>
  )
}

export default HomeTest
