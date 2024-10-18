import React from 'react'

import { Flex, Text } from '@chakra-ui/react';

function PrimaryNavIconWithText({ text, Icon }) {

  const iconStyle = {
    fontSize: '20px',
    margin: '12px'
  };

  return (
    <Flex align='center' fontWeight='thin'>
      <Icon style={iconStyle} />
      <Text fontWeight={400}>{text}</Text>
    </Flex>
  )
}

export default PrimaryNavIconWithText