import React from 'react';

import {
    Box,
} from '@chakra-ui/react';

// Components
import TopNav from './top_navbar/top_nav';
import MobileNav from './mobile_navbar/mobile_nav';
import PrimaryNav from './primary_navbar/primary_nav';
import ProductCategoryNav from './product_category_navbar/product_category_nav';


// Navbar Component
function Navbar() {

    return (
        <Box w='100%' bg='#fff' position='sticky' zIndex={4} top={0}>

            {/* Mobile View */}
            <MobileNav />

            {/* Desktop View */}
            <Box px={[7, 5, 6, 7]}>
                <TopNav />
                <PrimaryNav />
            </Box>
            <ProductCategoryNav />

        </Box>
    );
}

export default Navbar;
