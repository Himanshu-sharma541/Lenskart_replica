import { Box, Collapse, Flex, Text, Image, Divider, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

import imageAbc from '../../../assets/navbar/image.png'

function Glasses() {

    const List = {
        topPicks: [
            'New Arrivals',
            'Best Seller',
            'Lenskart BLU Lenses',
            'Tinted Eyeglasses',
            'Progressive Eyeglasses'
        ],
        frameType: [
            "Rectangle Frames",
            "Wayfarer Frames",
            "Round Frames",
            "Aviator Frames",
            "Cat-Eye Frames",
            "Rimless Frames",
            "Halfrim Frames",
            "Geometric Frames",
        ],
        Collection: [
            "Switch Grip",
            "Gulmarg Collection",
            "Urban Edit",
            "Blend Edit",
            "Sleek Steel",
            "Air Flex",
            "Electro Punk",
            "Classic Acetate",
            "Matte Essentials",
        ]
    }

    return (
        <Flex
        >

            <Box
                px='10'
                py='4'
            >
                <Flex
                    align='center'
                >
                    <Image src='https://static.lenskart.com/media/desktop/img/men_pic.png' w='50px' my='2' mr='4' />
                    <Text>Men</Text>
                </Flex>
                <Flex
                    align='center'
                >
                    <Image src='https://static.lenskart.com/media/desktop/img/women_pic.png' w='50px' my='2' mr='4' />
                    <Text>Women</Text>
                </Flex>
                <Flex
                    align='center'
                >
                    <Image src='https://static.lenskart.com/media/desktop/img/kid_pic.png' w='50px' my='2' mr='4' />
                    <Text>Kids</Text>
                </Flex>
            </Box>

            <Box w='200px' ></Box>


            <HeadingList heading='Top Picks' text={List.topPicks} />
            <HeadingList heading='Frame Type' text={List.frameType} />
            <HeadingList heading='Collection' text={List.Collection} />

        </Flex>
    )
}

function HeadingList({ heading, text }) {
    return (
        <Box px='3' >
            <Text py={5} fontSize='15px'>{heading}</Text>
            <Divider borderColor='black' />
            {
                text.map((item, index) => {
                    return (
                        <Text key={index} fontSize='15px' opacity={0.5} my={2}>{item}</Text>
                    )
                })
            }
        </Box>
    )
}


function Lenses() {

    const lenses = {
        Brands: [
            "Aqualens",
            "Bausch",
            "Soflens",
            "Acuvue",
            "Iconnect",
            "Alcon"
        ],
        exploreByDisposablity: [
            "Monthly",
            "Day & Night",
            "Daily",
            "Yearly",
            "Bi-weekly"
        ],
        exploreByPower: [
            "Spherical - (CYL<0.5)",
            "Spherical + (CYL<0.5)",
            "Cylindrical Power(>0.75)",
            "Toric Power"
        ],
        exploreByColor: [
            "Green",
            "Blue",
            "Brown",
            "Turquoise",
            "View all colors"
        ],
        solution: [
            "Small",
            "Large",
            "View all solutions"
        ]

    }

    return (
        <Flex justify='space-around' py={5}>
            <HeadingList heading='Brands' text={lenses.Brands} />
            <HeadingList heading='Explore by Disposability' text={lenses.exploreByDisposablity} />
            <HeadingList heading='Explore by Power' text={lenses.exploreByPower} />
            <HeadingList heading='Explore by Color' text={lenses.exploreByColor} />
            <HeadingList heading='Solution' text={lenses.solution} />
        </Flex>
    )
}


function Kids() {
    return (
        <Flex justify='space-around' py={10}>
            <Box p='8' w='20%' borderRadius='30px' bg={'rgba(0,0,0,0.2)'}>
                <Image src='https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg' alt='pic' w='100%' />
            </Box>
            <Box p='8' w='20%' borderRadius='30px' bg={'rgba(0,0,0,0.2)'}>
                <Image src='https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg' alt='pic' w='100%' />
            </Box>
            <Box p='8' w='20%' borderRadius='30px' bg={'rgba(0,0,0,0.2)'}>
                <Image src='https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg' alt='pic' w='100%' />
            </Box>
        </Flex>
    )
}


function Home() {
    return (
        <Flex>
            <Box w={'50%'}><Image src='https://static1.lenskart.com/media/desktop/img/HomeTryOut.png' w={'100%'} /></Box>
            <Box>
                <Text pt={'20'} fontWeight={500} fontSize='40px' textAlign='center'>Get your eyes checked at home</Text>
                <Text w='80%' m='auto' textAlign='center'>A certified refractionist will visit you with latest eye testing machines & 100 trial frames</Text>

                <Flex align='center' justify='center' pt='100px' >
                    <Button border='2px solid black' borderRadius={'40px'} size='lg' bg='#fff' as='a' href='/home-test'>Book Appointment</Button>
                </Flex>
            </Box>
        </Flex>
    )
}

function Store() {
    return (
        <Flex>
            <Box w={'50%'}>
                <Text fontSize='40px' fontWeight={500} textAlign='center' >Over 1100+ Lenskart Store</Text>
                <Text w='80%' m='auto' textAlign='center'>Experience eyewear in a whole new way: Visit your nearest store
                    and treat yourself to 5000+ eyewear styles.</Text>
                <Flex align='center' justify='center' pt='100px' >
                    <Button border='2px solid black' borderRadius={'40px'} size='lg' bg='#fff' textAlign>Locate Store</Button>
                </Flex>
            </Box>
            <Box w={'50%'}>
                <Image src={imageAbc} w='100%' />
            </Box>
        </Flex>
    )
}

function CategoryCollapse({ text, component }) {
    const [isCollapsed, setCollapse] = useState(false)

    const handleCollapse = () => {
        setCollapse(true)

        setTimeout(() => {
            setCollapse(false)
        }, 2000);
    }

    return (
        <Box
            px={'10px'}
            display='inline-block'
            transition='all 0.3s ease'
        >
            <Text
                fontSize={['1em', '0.4em', '0.49em', '0.7em']}
                textTransform={'uppercase'}
                cursor={'pointer'}
                onMouseEnter={handleCollapse}
                
                _hover={{
                    borderBottom: '3px solid black',
                    transition: "all 0.5s ease",
                }}
                >
                {text}
            </Text>
            <Box
                w='90vw'
                bg='#F6F8FF'
                mt='10px'
                p={3}
                position='absolute'
                left='5vw'
                
                display={isCollapsed ? 'block' : 'none'}
                >
                <Collapse in={isCollapsed}>

                    {
                        component === 'glasses' ? (
                            <Glasses />
                        ) : null
                    }
                    {
                        component === 'kids' ? (
                            <Kids />
                        ) : null
                    }
                    {
                        component === 'lenses' ? (
                            <Lenses />
                        ) : null
                    }
                    {
                        component === 'home' ? (
                            <Home />
                        ) : null
                    }
                    {
                        component === 'store' ? (
                            <Store />
                        ) : null
                    }

                </Collapse>
            </Box>
        </Box>
    )
}

export default CategoryCollapse
