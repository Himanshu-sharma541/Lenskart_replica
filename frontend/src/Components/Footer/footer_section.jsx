import React from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

function FooterSection({ heading, textArray, links }) {
    return (
        <Box>

            <Heading
                fontSize={['sm', 'md', 'lg', 'xl']}
                fontWeight='medium'>
                {heading}
            </Heading>

            <>
                {textArray && textArray.map((text, i) => {
                    return (
                        <Link key={i} href={links[i]}>
                            <Text
                                key={i} 
                                my={[2, 3, 4, 5]}
                                mr={[2, 4, 6, 20]}
                                cursor='pointer'
                                fontSize={['xs', '0.5rem', '0.75rem', 'sm']}>
                                {text}
                            </Text>
                        </Link>
                    )
                })}
            </>

        </Box>
    )
}

export default FooterSection