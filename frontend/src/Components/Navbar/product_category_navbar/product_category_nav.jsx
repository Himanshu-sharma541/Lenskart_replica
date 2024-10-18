import { Box, Flex, Image, Show } from '@chakra-ui/react'
import React from 'react'
import tryon3d from "../../../assets/navbar/tryon3d.webp"
import blulogo from "../../../assets/navbar/blulogo.webp"
import gold_max_logo from "../../../assets/navbar/gold_max_logo.webp"
import CategoryCollapse from './category_collapse'
import Imagebox from './image_box'

function ProductCategoryNav() {
    return (
        <Show above='md'>
            <Flex
                mt={3}
                px={[7, 5, 6, 7]}
                bg={'#FBF9F7'}
                justify={'space-between'}
                align={'center'}>
                <Flex justify={'space-around'}>
                    <CategoryCollapse text='eyeglasses' component='glasses' />
                    <CategoryCollapse text='screen glasses' component='glasses' />
                    <CategoryCollapse text='kids glasses' component='kids' />
                    <CategoryCollapse text='contact lenses' component='lenses' />
                    <CategoryCollapse text='sunglasses' component='glasses' />
                    <CategoryCollapse text='home eye-test' component='home' />
                    <CategoryCollapse text='store locator' component='store' />
                </Flex>
                <Flex>
                    <Imagebox image={tryon3d} alt='3d_trial' />
                    <Imagebox image={blulogo} alt='blu_logo' />
                    <Imagebox image={gold_max_logo} alt='gold_max_logo' />
                </Flex>
            </Flex>
        </Show>
    )
}

export default ProductCategoryNav