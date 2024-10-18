import { Box, Button, Flex, Image, Text, useToast, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SingleProductPage() {

    let { productId } = useParams();

    const [product, setProduct] = useState({});

    const buy = useToast()

    async function fetchOne() {

        try {
            const response = await fetch(`https://lenskart-project-zvc5.onrender.com/eyewear?id=${productId}`);
            const data = await response.json();
            setProduct(data.eyewears[0]);

        } catch (error) {
            console.log(error)
        }
    }

    const handleBuy = () => {
        buy({
            title: 'Product Purchased',
            description: `Your ${product.title} will be delivered soon`,
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    const handleAddToCart = () => {
        buy({
            title: 'Product Added to Cart',
            description: `Your ${product.title} has been added to your cart`,
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    useEffect(() => {
        fetchOne();
    }, [])

    return (
        <Stack direction={['column', 'column', 'row']} spacing={8} p={[4, 6, 10]}>
            <Box
                w={['100%', '100%', '60%']}
                borderRadius='1vw'
                overflow='hidden'
                boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}
            >
                <Image src={product.image} alt='product' w='full' />
            </Box>
            <Box p={[4, 6]}>
                <Flex p={[4, 6]} direction={['row', 'row', 'column']} justify={'space-between'}>
                    <Box>
                        <Text opacity={0.6} fontSize={['md', 'lg']}>Eyewear</Text>
                        <Text fontWeight='bold' letterSpacing='2px' py={3} fontSize={['xl', '2xl']}>{product.title}</Text>
                        <Text fontSize={['sm', 'md']}>{product.description}</Text>
                        <Text color='#00BAC6' fontSize={['24px', '30px']}>&#8377; {product.price}</Text>
                    </Box>
                    <Box>
                        <p>Color: <select>
                            <option value='red'>Red</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                        </select></p>
                        <p>Size: <select>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select></p>
                    </Box>
                </Flex>
                <Button w='full' my={5} onClick={handleAddToCart}>Add to Cart</Button>
                <Button w='full' colorScheme='cyan' bg='#00BAC6' color='#fff' onClick={handleBuy} >Buy Now</Button>
            </Box>
        </Stack>
    )
}

export default SingleProductPage
