import React, { useState } from 'react'
import {
    Show,
    Box,
    Flex,
    Image,
    Text,
    Link,
    useDisclosure,
    Button,
} from '@chakra-ui/react'

// Logo
import main_logo from "../../../assets/navbar/main_logo.svg"
import new_toll_number from "../../../assets/navbar/new_toll_number.webp"

// SVG Icons
import { FiShoppingBag, FiHeart } from "react-icons/fi";

// Components
import LenskartNavearchbar from './lenskart_nav_searchbar';
import PrimaryNavIconWithText from './primary_nav_icon_with_text';
import LoginSignUp from './login_signup.jsx';


function PrimaryNav() {

    const { isOpen, onClose, onToggle } = useDisclosure();

    return (
        <Show above='md'>

            <LoginSignUp onToggle={onToggle} isOpen={isOpen} onClose={onclose} />

            <Flex align={'center'} justify={'space-between'}>

                {/* Logo */}
                <Box w={['100px', '120px', '130px', '180px']} as={Link} href='/'>
                    <Image w={'100%'} src={main_logo} alt='lenskart logo' />
                </Box>

                {/* Toll Free AD */}
                <Box w={['90px', '100px', '110px', '120px']} display={{ md: "none", lg: "block" }}>
                    <Image w={'100%'} src={new_toll_number} alt='toll-free-number' />
                </Box>

                {/* Search Input */}
                <LenskartNavearchbar />


                <Text className='navbar_primary_text' fontWeight={'normal'}>Track order</Text>
                <Button className='navbar_primary_text' fontWeight={'normal'} variant='ghost' cursor='pointer' onClick={onToggle} >LogIn & SignIn</Button>

                {/* Icons */}
                <PrimaryNavIconWithText text='Wishlist' Icon={FiHeart} />
                <PrimaryNavIconWithText text='Cart' Icon={FiShoppingBag} />

            </Flex>

        </Show>
    )
}

export default PrimaryNav