import React from 'react';
import Slider from 'react-slick';

import { Box, Button, Image, Link } from '@chakra-ui/react';
import { CustomNextArrow, CustomPrevArrow } from './custom_arrow';


import A from '../../../assets/main/carousel_1/A.webp'
import B from '../../../assets/main/carousel_1/B.webp'
import C from '../../../assets/main/carousel_1/C.webp'
import D from '../../../assets/main/carousel_1/D.webp'
import E from '../../../assets/main/carousel_1/E.webp'
import F from '../../../assets/main/carousel_1/F.webp'
import G from '../../../assets/main/carousel_1/G.webp'
import H from '../../../assets/main/carousel_1/H.webp'
import I from '../../../assets/main/carousel_1/I.webp'
import J from '../../../assets/main/carousel_1/J.gif'
import K from '../../../assets/main/carousel_1/K.webp'
import L from '../../../assets/main/carousel_1/L.webp'
import M from '../../../assets/main/carousel_1/M.webp'
import N from '../../../assets/main/carousel_1/N.webp'
import O from '../../../assets/main/carousel_1/O.webp'
import P from '../../../assets/main/carousel_1/P.webp'
import Q from '../../../assets/main/carousel_1/Q.webp'

const imageSources = [
    A, B, C,
    D, E, F,
    G, H, I,
    J, K, L,
    M, N, O,
    P, Q,
];


function HomeSlider() {

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <Box py={[1,2,3,3]}>
            <Slider {...settings}>
                {imageSources.map((src, index) => (
                    <Box key={index}>
                        <Link href='/eyewears'>
                            <Image src={src} alt={`Slide ${index + 1}`} w='100%' />
                        </Link>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default HomeSlider;
