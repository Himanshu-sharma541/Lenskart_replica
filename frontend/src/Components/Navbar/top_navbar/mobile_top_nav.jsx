import React from 'react'

import {
    Show,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    MenuDivider,
    Box,
    Image,
    Flex
} from '@chakra-ui/react'

// SVG Icons
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FiShoppingBag, FiHeart } from "react-icons/fi";
import LenskartNavearchbar from '../primary_navbar/lenskart_nav_searchbar';
const iconStyle = {
    fontSize: '20px',
    margin: "12px"
}

// Mobile Top Nav Component
function MobileTopNav() {

    const iconStyle = {
        fontSize: '20px',
        margin: "12px"
    }

    return (
        <Show below='md'>
            <Flex justify={'space-between'} align={'center'}>

                {/* Logo */}
                <Box mx={[2, 1, 2, '25px']} w={['100px', '120px', '130px', '150px']}>
                    <Image w={'100%'} src='https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg' alt='lenskart logo' />
                </Box>

                {/* // toll-free-number */}
                <Box w={'70px'}>
                    <Image src='https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png' alt='toll-free-number' w={'100%'} />
                </Box>

                {/* // Icons */}
                <Flex>

                    <FiHeart style={iconStyle} />
                    <FiShoppingBag style={iconStyle} />

                    <Menu>
                        <MenuButton>
                            <PiDotsThreeOutlineVerticalFill style={iconStyle} />
                        </MenuButton>
                        <MenuList>
                            <Link href='/our-purpose'><MenuItem>Do More, Be More</MenuItem></Link>
                            <Link href='/compare-looks'><MenuItem>Tryin3D</MenuItem></Link>
                            <Link href='/stores'><MenuItem>StoreLocator</MenuItem></Link>
                            <Link href='https://www.lenskart.sg/?utm_source=lenskart&utm_medium=india&utm_campaign=website'><MenuItem>Singapore</MenuItem></Link>
                            <Link href='https://www.lenskart.com/en-ae/?utm_source=lenskart&utm_medium=india&utm_campaign=website'><MenuItem>UAE</MenuItem></Link>
                            <Link href='https://www.johnjacobseyewear.com'><MenuItem>John Jacobs</MenuItem></Link>
                            <Link href='https://aqualens.in/'><MenuItem>Aqualens</MenuItem></Link>
                            <Link href='/cobrowsing'><MenuItem>Cobrowsing</MenuItem></Link>
                            <Link href='https://medium.com/lenskart-engineering'><MenuItem>Engineering Blog</MenuItem></Link>
                            <Link href='/partners'><MenuItem>Partner with Us</MenuItem></Link>
                            <MenuDivider />
                            <Link href='cms-queries'><MenuItem>Contact Us</MenuItem></Link>
                        </MenuList>
                    </Menu>

                </Flex>
            </Flex>
            
            {/* // Search Bar */}
            <LenskartNavearchbar />
        
        </Show>
    )
}

export default MobileTopNav