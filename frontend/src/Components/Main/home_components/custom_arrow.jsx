import React from 'react';

import { IconButton } from '@chakra-ui/react';

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <IconButton
            className={className}
            style={{ ...style, display: 'block', position: 'absolute', top: '50%', left: '10px', zIndex: 1 }}
            onClick={onClick}
            bg='black'
            aria-label="Previous slide"
        />
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <IconButton
            className={className}
            style={{ ...style, display: 'block', position: 'absolute', top: '50%', right: '10px', zIndex: 1 }}
            onClick={onClick}
            bg='black'
            aria-label="Next slide"
        />
    );
};


export { CustomPrevArrow, CustomNextArrow };