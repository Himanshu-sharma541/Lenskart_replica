import React from 'react';

import {
  Box,
  Image,
  Link,
} from '@chakra-ui/react'

import home_banner from '../../assets/main/home_banner.png'
import home_banner_2 from '../../assets/main/home_banner_2.webp'
import home_banner_3 from '../../assets/main/home_banner_3.png'
import home_banner_4 from '../../assets/main/home_banner_4.webp'
import home_banner_5 from '../../assets/main/home_banner_5.webp'
import home_banner_6 from '../../assets/main/home_banner_6.webp'
import home_banner_7 from '../../assets/main/home_banner_7.webp'
import home_banner_8 from '../../assets/main/home_banner_8.webp'
import home_banner_9 from '../../assets/main/home_banner_9.webp'


import Swiper from './home_components/swiper';
import TextBanner from './home_components/text_banner';

function Home() {

  return (
    <Box>

      <Box w={'100%'} cursor='pointer' as={Link} href='/eyewears'>
        <Image src={home_banner} w='100%' draggable={false} />
      </Box>

      <Swiper />

      <Box w={'100%'} cursor='pointer' as={Link} href='/our-purpose' py={2} >
        <Image src={home_banner_2} w='100%' draggable={false} />
      </Box>

      <TextBanner text='Free Progressive Lenses' banner={home_banner_3} />
      <TextBanner text='Book Eye Test at Home' banner={home_banner_4} />
      <TextBanner text='Free Online Eye Test' banner={home_banner_5} />
      <TextBanner text='Premium Eyewear' banner={home_banner_6} />
      <TextBanner text='As Seen on Shark Tank' banner={home_banner_7} />
      <TextBanner text='Trending Sunglasses' banner={home_banner_8} />
      <TextBanner text='Aquacolor - Glam Up With Color Lenses' banner={home_banner_9} fSize='6px' />

    </Box>
  )
}

export default Home