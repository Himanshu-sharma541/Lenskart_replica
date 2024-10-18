import React from 'react'

import {
    Show,
    Box,
    Link,
    Flex
} from '@chakra-ui/react'

// Sub-Component
import TopNavLinks from './top_nav_links'

// Desktop Components
function TopNav() {
    return (
        <Show above='md'>
            <Box color='#000042' padding={[3, 1, 2, 3]} alignItems={'center'}>

                <Flex justify={'space-between'}>
                    <Flex justify={'space-between'} alignItems="center">

                        {/* // Links  */}
                        <TopNavLinks
                            text={[
                                'Do More, Be More',
                                'Tryin3D',
                                'StoreLocator',
                                'Singapore',
                                'UAE',
                                'John Jacobs',
                                'Aqualens',
                                'Cobrowsing',
                                'Engineering Blog',
                                'Partner with Us'
                            ]}
                            href={[
                                '/our-purpose',
                                '/compare-looks',
                                '/stores',
                                'https://www.lenskart.sg/?utm_source=lenskart&utm_medium=india&utm_campaign=website',
                                'https://www.lenskart.com/en-ae/?utm_source=lenskart&utm_medium=india&utm_campaign=website',
                                'https://www.johnjacobseyewear.com',
                                'https://aqualens.in/',
                                '/cobrowsing',
                                'https://medium.com/lenskart-engineering',
                                '/partners'
                            ]}
                        />

                    </Flex>

                    {/* //Contact Us Link */}
                    <Link href="/cms-queries" fontSize={['5px', '6px', '6px', '10px']}>Contact Us</Link>
                </Flex>

            </Box>
        </Show>
    )
}

export default TopNav