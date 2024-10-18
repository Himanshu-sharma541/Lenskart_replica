import React from 'react'

import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

function FooterSocialSection() {
    return (
        <Flex
            mt={4}
            justify='space-between'
            align='center'
            flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>

            <Flex justify='space-between' w={{ base: '100%', md: '100%', lg: '20%' }}>

                <Link href='/terms-conditions'>
                    <Text cursor='pointer'>T&C</Text>
                </Link>
                <Link href='/privacy-policy'>
                    <Text cursor='pointer'>Privacy</Text>
                </Link>
                <Link href='/disclaimer'>
                    <Text cursor='pointer'>Disclaimer</Text>
                </Link>
            </Flex>

            <Flex
                justify='space-between'
                align={'center'}
                w={{ base: '100%', md: '100%', lg: '25%' }}
                mt='4'
            >
                <Text>Version 1.0.0 || Flollow Us</Text>
                <Link href='https://www.facebook.com/Lenskartindia'>
                    <FaFacebookSquare fontSize={['10px', '15px', '20px', '30px']} />
                </Link>
                <Link href='https://www.instagram.com/lenskart/' >
                    <FaInstagram fontSize={['10px', '15px', '20px', '30px']} />
                </Link>
                <Link href='https://x.com/lenskartME'>
                    <FaTwitter fontSize={['10px', '15px', '20px', '30px']} />
                </Link>
            </Flex>

        </Flex>
    )
}

export default FooterSocialSection