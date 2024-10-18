import { AbsoluteCenter, Box, Divider, Image, Link } from '@chakra-ui/react'
import React from 'react'

function TextBanner({ text, banner, fSize = '10px' }) {
    return (
        <Box my={[2, 4, 5, 7]}>
            <Box position='relative' py={[3, 5, 7, 10]}>
                <Divider borderColor='black' />
                <AbsoluteCenter
                    fontFamily={`"Montserrat", sans-serif`}
                    textTransform='uppercase'
                    fontWeight='500'
                    fontSize={[fSize, fSize, '13px', '30px']}
                    bg='#fff'
                    px='4'
                >{text}</AbsoluteCenter>
            </Box>
            <Box as={Link} href='/eyewears' >
                <Image src={banner} alt={`${banner}`} />
            </Box>
        </Box>
    )
}

export default TextBanner