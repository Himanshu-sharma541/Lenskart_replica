import { Box, Image } from '@chakra-ui/react'
import React from 'react'


function Imagebox({image,alt}) {
    return (
        <Box
            w={['5rem', '6rem', '4rem', '5rem']}
            p={2}
            overflow={'hidden'}>

            <Image
                src={image}
                alt={alt}
                borderRadius={'5px'}
                w='100%' />

        </Box>
    )
}

export default Imagebox