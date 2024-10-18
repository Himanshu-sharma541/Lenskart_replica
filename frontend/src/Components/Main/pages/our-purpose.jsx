import { Box, Center, Flex, Text, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import banner_1 from '../../../assets/main/our_purpose/banner_1.webp'
import grid_image_1 from '../../../assets/main/our_purpose/grid_image_1.webp'
import grid_image_2 from '../../../assets/main/our_purpose/grid_image_2.webp'
import grid_image_3 from '../../../assets/main/our_purpose/grid_image_3.webp'
import grid_image_4 from '../../../assets/main/our_purpose/grid_image_4.webp'
import banner_2 from '../../../assets/main/our_purpose/banner_2.webp'
import banner_3 from '../../../assets/main/our_purpose/banner_3.webp'

import end_image from '../../../assets/main/our_purpose/end_image.webp'




// Components
function VideoComponent() {
    return (
        <Box bg='#000042' color='#fff'>

            <Center
                fontFamily={`"Montserrat", sans-serif`}
                fontSize={['xl', '2xl', '3xl', '2xl']}
                p={[6, 8, 10, 16]}
                fontWeight={400}
            >
                Our purpose
            </Center>

            <Flex
                px={[6, 8, 10, 16]}
                pb={[6, 8, 10, 16]}
                flexDirection={['column', 'column', 'row', 'row']}
                gap={8}
            >

                <Flex
                    w={['100%', '100%', '100%', '50%']}
                    flexDirection={'column'}
                    px={[2, 4, 6, 8]}
                >
                    <Text
                        fontSize={['lg', 'xl', '2xl', '6xl']}
                        lineHeight={'120%'}
                        fontWeight={300}
                        fontFamily={`"Cormorant Garamond", serif`}
                    >
                        We exist to transform the way people see and experience the world.
                    </Text>

                    <Text
                        my={4}
                        fontWeight={400}
                        fontFamily={`"Montserrat", sans-serif`}
                        fontSize={['10px', '12px', '16px', '20px']}
                    >
                        Since day one, Lenskart has defied expectations on how people engage with eyewear. Yes, eyecare and eyewear is what we do. But we exist for something much bigger than ourselves.
                    </Text>

                </Flex>

                <Box w={['100%', '100%', '100%', '50%']}>
                    <iframe
                        style={{ aspectRatio: "16/9", width: "100%", height: "100%" }}
                        src="https://www.youtube.com/embed/1Q11yIEqgpg"
                        allowFullScreen
                    ></iframe>
                </Box>

            </Flex>
        </Box>
    )
}

function HeadingAndDescription({ heading, description }) {
    return (
        <>
            <Center
                fontWeight={300}
                fontFamily={`"Cormorant Garamond", serif`}
                fontSize={['xl', 'xl', '3xl', '6xl']}>
                {heading}
            </Center>

            <center>
                <Text
                    w='70%'
                    my={5}
                    fontWeight={300}
                    fontFamily={`"Montserrat", sans-serif`}
                    fontSize={['xl', '2xl', '3xl', '2xl']}>
                    {description}
                </Text>
            </center>
        </>
    )
}


function OurPurpose() {
    return (
        <Box>

            {/* Our purpose video component */}
            <VideoComponent />

            <Box>
                <Image src={banner_1} alt='banner_1' />
            </Box>

            <Box>
                <Center
                    fontFamily={`"Montserrat", sans-serif`}
                    fontSize={['xl', '2xl', '3xl', '2xl']}
                    pt={[6, 8, 10, 16]}
                    fontWeight={400}>
                    Our Focus
                </Center>

                <HeadingAndDescription heading='Changing eyewear for good' description='We started with the aim to disrupt eyewear every step of the way. And today, we stand as India’s Biggest Eyewear Brand.' />

                <SimpleGrid columns={2} spacing={8} w={'80%'} mx={'auto'} my={6}>
                    <Image src={grid_image_1} alt='grid-image-1' w='100%' />
                    <Image src={grid_image_2} alt='grid-image-2' w='100%' />
                    <Image src={grid_image_3} alt='grid-image-3' w='100%' />
                    <Image src={grid_image_4} alt='grid-image-4' w='100%' />
                </SimpleGrid>

                <HeadingAndDescription heading='For everyone' description='At no point of time does one feel limited by price, style or ways to get the perfect pair at their doorstep.' />

                <Image src={banner_2} alt='triple image' w='80%' mx='auto' />

            </Box>

            <Box bg='#F0FCF8' py={[10, 16, 20]} px={['10px', '20px', '50px', '100px']}>

                <HeadingAndDescription heading='For every purpose' description='Each pair is a personal story. And we want Lenskart to help you tell yours.From prescription to personal expression - use eyewear for seeing, running, flaunting, screen-scrolling and endless exploring. We’ve got it all. Just for you.' />

                <Image src={banner_3} alt='triple image' w='80%' mx='auto' />

            </Box>

            <Box w={'100%'}>
                <Image src={end_image}  w='100%' />
            </Box>
        </Box>
    )
}

export default OurPurpose
