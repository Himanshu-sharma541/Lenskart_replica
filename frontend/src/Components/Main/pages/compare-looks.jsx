import { Box, Button, Center, Flex, Text, useToast } from '@chakra-ui/react'
import React from 'react'

function CompareLooks() {

    const selfieToast = useToast();

    const handleSelfie = () => {

        selfieToast({
            title: 'Selfie Taken',
            description: 'Your selfie has been taken successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    }

    return (
        <>
            <Center
                my={8}>
                <Text fontSize={['xl', '2xl', '3xl', '4xl']}>Take a Selfie</Text>
            </Center>
            <Flex
                w={['80%', '70%', '60%', '60%']}
                h={['300px','300px','350px','400px']}
                bg='#000042'
                justify='center'
                align='center'
                borderRadius='10px'
                mx={'auto'}
                my={8}>

                <Box
                    w={['35%', '30%', '25%', '20%']}
                    h='60%'
                    bg='#000'
                    borderRadius='full'
                    border='4px solid cyan'
                >
                </Box>

            </Flex>

            <Center m={5}>
                <Button
                    variant='ghost'
                    colorScheme='blue'
                    m='auto'
                    onClick={handleSelfie}>
                    Click a selfie</Button>
            </Center>
        </>
    )
}

export default CompareLooks