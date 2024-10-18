import React from 'react'
import blulogo from '../../../assets/navbar/blulogo.webp'
import tryon3d from "../../../assets/navbar/tryon3d.webp"
import gold_max_logo from "../../../assets/navbar/gold_max_logo.webp"

import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Flex,
    Text,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import CategoryMenu from './category_menu'
import Imagebox from '../product_category_navbar/image_box'


function ExploreProductCategory() {
    const { isOpen, onClose, onToggle } = useDisclosure()

    return (
        <Box p={'2'}>

            <Flex justify='space-between' align='center' >

                <Button
                    size='sm'
                    variant="ghost"
                    onClick={onToggle}
                    colorScheme="purple"
                >
                    Explore more...
                </Button>

                <Drawer isOpen={isOpen} onClose={onClose}>

                    <DrawerOverlay />

                    <DrawerContent>

                        <DrawerHeader borderBottom="1px solid #E2E8F0">
                            <Text>Explore More....</Text>
                            <DrawerCloseButton />
                        </DrawerHeader>

                        <DrawerBody>
                            <Box>
                                <Flex flexDirection={'column'} align={'start'}>
                                    <CategoryMenu text='eyeglasses' />
                                    <CategoryMenu text='screen glasses' />
                                    <CategoryMenu text='kids glasses' />
                                    <CategoryMenu text='contact lenses' />
                                    <CategoryMenu text='sunglasses' />
                                    <CategoryMenu text='home eye-test' />
                                    <CategoryMenu text='store locator' />
                                </Flex>
                            </Box>
                        </DrawerBody>

                    </DrawerContent>

                </Drawer>

                <Imagebox image={tryon3d} alt='3d_trial' />
                <Imagebox image={blulogo} alt='blulogo' />
                <Imagebox image={gold_max_logo} alt='gold_max_logo' />
            </Flex>
        </Box>
    )
}

export default ExploreProductCategory