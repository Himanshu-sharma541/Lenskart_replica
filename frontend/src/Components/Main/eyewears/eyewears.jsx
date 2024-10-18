import { Box, Button, SimpleGrid, Text, Image, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
 
function Eyewears() {

    const [eyewears, setEyewears] = useState([])

    const fetchAll = async () => {
        try {
            const res = await fetch('https://lenskart-replica.onrender.com/eyewear')
            const data = await res.json()
            setEyewears(data.eyewears) // Access the eyewears array from the response
            console.log(data)
        } catch (error) {
            console.error("Error fetching eyewear data:", error)
        }
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <Box p={10}>

            <SimpleGrid columns={4} spacing={5}>
                {eyewears.length > 0 ? (
                    eyewears.map((e, i) => (
                        <Box
                            as='a'
                            key={i}
                            p='5'
                            bg='#fff'
                            overflow='hidden'
                            href={`/eyewears/${e._id}`}
                            borderRadius='10px'
                            transition='all .5s ease'
                            _hover={{boxShadow:'rgb(38, 57, 77) 0px 20px 30px -10px;'}}
                            boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
                            <Box>
                                <Image src={e.image} />
                            </Box>

                            <Flex w='fit-content' px={3} mb={5} align='center' bg='#F5F5FF' borderRadius='30px' >
                                <Text fontWeight={500}>{e.avgRating}</Text>
                                <FaStar color='#00BAC6' style={{ margin: '10px' }} />
                                <Text fontWeight={200}>{e.reviewCount}</Text>
                            </Flex>

                            <Text>{e.title}</Text>
                            <Text opacity={0.7}>{e.description}</Text>
                            {/* price in ruppees */}
                            <Text fontWeight={600} pt='10px'>&#8377; {e.price}</Text>
                        </Box>
                    ))
                ) : (
                    <Text>Loading....</Text>
                )}

            </SimpleGrid>
        </Box>
    )
}

export default Eyewears
