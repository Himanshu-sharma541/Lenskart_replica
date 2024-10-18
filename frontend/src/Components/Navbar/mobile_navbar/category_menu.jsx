import React from 'react'

import {
    Box,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList
} from '@chakra-ui/react'

function CategoryMenu({ text }) {

    return (
        <Menu>
            <MenuButton
                py='3'
                fontSize='xl'
                position='relative'
                textTransform="uppercase"
                
                _hover={{ 
                    _after:{width:'100%'}
                }}
                
                _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '3px',
                    transition: 'width 0.3s ease',
                    zIndex: -1,
                    backgroundColor:'black'
                }}
            >
                {text}
            </MenuButton>
            <MenuList>
                <MenuGroup title='Select category'>
                <MenuItem>Mens</MenuItem>
                <MenuItem>Womens</MenuItem>
                <MenuItem>Kids</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default CategoryMenu
