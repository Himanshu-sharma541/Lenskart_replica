import React from 'react';

import { Divider, Link } from '@chakra-ui/react';

// Sub-component
function TopNavLinks({ href, text }) {
    return (
        <>
            {/* // Render the links dynamically */}
            {href && text && href.map((link, index) => (

                <React.Fragment key={index}>

                    <Link href={link} fontSize={['5px', '6px', '6px', '10px']}>
                        {text[index]}
                    </Link>

                    {/* // Prevent the last divider from appearing */}
                    {index < href.length - 1 && (
                        // Add a vertical divider between links
                        < Divider orientation='vertical' border={'1px solid black'} h='2' my={'auto'} mx={2} />
                    )}

                </React.Fragment>

            ))}
        </>
    );
}

export default TopNavLinks;
