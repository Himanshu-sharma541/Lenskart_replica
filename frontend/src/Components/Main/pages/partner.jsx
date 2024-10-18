import React from 'react'

import { BsGraphUp } from "react-icons/bs";

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    border,
    Box,
    Button,
    Center,
    Divider,
    Flex,
    Heading,
    Image,
    Input,
    Show,
    SimpleGrid,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useToast,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'


function LandLordInfoForm({ description, heading }) {
    return (
        <>

            {/* // Desktop View */}
            <Show above='md'>
                <Box py={[2, 4, 6, 8]}>

                    {description.map((text, index) => (
                        <Box key={index} my={2} textAlign="left">
                            {text}
                        </Box>
                    ))}

                </Box>
            </Show>


            {/* Mobile view */}
            <Show below='md'>
                <Accordion allowToggle mb={8}>

                    {
                        heading.map((text, index) => (
                            <AccordionItem key={index}>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        {text}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel>
                                    <Box my={2} textAlign="left">
                                        {description[index]}
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                        ))
                    }

                </Accordion>
            </Show>
        </>
    )
}

function FormGrid({ title, labels }) {
    return (
        <>
            <Text textAlign='start' fontSize={['20px', '20px', '30px', '36px']}>{title}</Text>

            <SimpleGrid py={[2, 4, 6, 8]} columns={[1, 1, 2, 2]} spacing={10}>

                {labels.map((label, i) => {
                    return (
                        <Flex key={i} flexDirection={['column', 'column', 'row', 'row']}>
                            <Text w={{ base: '100%', md: '100%', lg: '35%' }} textAlign='start'>{label}</Text>
                            <Input placeholder={`Enter ${label}`} required />
                        </Flex>
                    )
                })}

            </SimpleGrid >
        </>
    )

}

function Partner() {

    const submitToast = useToast();

    const handleSubmit = () => {
        submitToast({
            title: 'Form submitted',
            description: 'We have received your form submission. We will get back to you shortly.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    }

    const tabStyle = {
        padding: '1rem',
        cursor: 'pointer',
        backgroundColor: '#2e3e4d',
        color: 'white',
        borderBottom: '1px solid black',
        _selected: {
            color: 'black',
            backgroundColor: '#fff',
            border: '1px solid black',
            borderBottom: 'none'
        }
    }

    const tabPanelStyle = {
        border: '1px solid black',
        borderBottomRadius: '10px',
        borderTop: 'none',
        overflow: 'hidden'
    }

    const accordionData = [
        {
            heading: 'Business Vision',
            description: [
                'Lenskart is breaking the norm of high price and limited styles in the eyewear industry.',
                'Lenskart stands for great quality and trendiest eyewear at affordable prices making each product great value for money.',
                'We have over 5000+ styles of eyewear.',
                'Free eye test to increase footfall.',
                'Zero error lenses made by robots in world class facility and very competitive pricing.',
                'Global standard store experience.',
            ],
        },
        {
            heading: 'Experience Lenskart Store',
            description: 'video',
        },
        {
            heading: 'Setting Up a Lenskart Store',
            description: [
                'Site selection and finalization through Lenskart network.',
                'Store layout, design, fabrication of store from professional Lenskart authorized vendors.',
                'Staff hiring, support, and training managed by Lenskart.',
            ],
        },
        {
            heading: 'Excellent Support',
            description: [
                '24X7 Customer support and central grievance.',
                'Brand takes ownership of the customer grievance management.',
                'End2End logistics management order and delivery.',
                'No change in margins: During promo and discounts time. Commission and payout is done within 7 days of order.',
                'No dead stock - always in rotation.',
                'Price parity across online and offline channels of sale.',
                'Marketing support: TV, Radio, and Hyper Local marketing.',
            ],
        },
    ];

    const landlordDescription = [
        "Do you have a property in a main market in your city which you would like to rent? We are here for you. Lenskart has a network of 700+ stores across the country. As part of our expansion plan, we constantly require main market properties that meet our specifications.",
        "Click here to checkout out the list of cities and markets where we are actively looking for a store.",
        "You can also chat with us on WhatsApp 9876543210.",
        "We request you to fill the form below and we will contact you shortly."
    ];

    const AccordionHeading = [
        "Property",
        "Looking for Stores",
        "Contact Information",
    ];

    const personalDetailsAndInputs = [
        'First Name',
        'Last Name',
        'Email',
        'Phone Number',
        'Address',
        'City',
    ];

    const landDetailsAndInput = [
        'Type of Property',
        'Location',
        'Number of Bedrooms',
        'Square Feet',
    ];

    return (
        <Box p={10}>
            <Box>
                <Tabs isFitted align='center' variant='enclosed'>

                    <TabList>
                        <Tab {...tabStyle} >Partner</Tab>
                        <Tab {...tabStyle} >Landlord</Tab>
                    </TabList>

                    <TabPanels>

                        <TabPanel {...tabPanelStyle}>

                            <Box w='80%' m='auto'>
                                <Box textAlign='start'>
                                    <Text fontSize={['sm','sm','md','md']}>Own a Successful Business</Text>
                                    <Text fontSize='2xl' fontWeight='bold' color='#49AA9A'>Join as a Lenskart Partner today</Text>
                                    <Text my='6' fontSize={['10px','sm','md','md']}>Lenskart is one of the fastest growing retail businesses with 500+ profitable stores across 120+ cities and 50 Lac happy customers across India. Be a proud owner of a branded Lenskart store.</Text>
                                    <Heading size='sm'>Returns that we deliver for our partners</Heading>
                                </Box>
                            </Box>

                            <Divider borderColor='black' my={4} />


                            <Accordion allowToggle w='80%' mx='auto' my='5' >
                                {accordionData.map((item, index) => (
                                    <AccordionItem key={index}>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    {item.heading}
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel textAlign='start'>
                                            {item.description === 'video' ? (
                                                <video width="100%" height="auto" controls>
                                                    <source src="https://cdn.shopify.com/s/files/1/0110/3835/9614/files/VIDEO-2019-06-07-14-27-24.mp4?3220" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            ) : (
                                                <UnorderedList>
                                                    {item.description.map((desc, descIndex) => (
                                                        <ListItem key={descIndex}>{desc}</ListItem>
                                                    ))}
                                                </UnorderedList>
                                            )}
                                        </AccordionPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                        </TabPanel>

                        <TabPanel {...tabPanelStyle} >
                            <Box w="80%" m="auto">
                                <Center>
                                    <Heading color='#49AA9A'>Landlords</Heading>
                                </Center>

                                <LandLordInfoForm description={landlordDescription} heading={AccordionHeading} />

                                <Divider borderColor='grey' />

                                <Box py={[2, 4, 6, 8]}>

                                    <FormGrid title='Personal Details' labels={personalDetailsAndInputs} />
                                    <FormGrid title='Land Details' labels={landDetailsAndInput} />

                                    <Button w='100%' mt={6} colorScheme='teal' onClick={handleSubmit}>Submit</Button>

                                </Box>
                            </Box>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    )
}

export default Partner