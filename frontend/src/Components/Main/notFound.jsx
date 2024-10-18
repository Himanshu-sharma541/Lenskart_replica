import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import not_found from "../../assets/main/not_found/not_found.gif"

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            textAlign="center"
            bg="white"
            mx={'auto'}
            my='16'
            color="#000042"
            w='50%'
        >
            <Button
                onClick={() => navigate("/")}
                bg="#000042"
                color="white"
                _hover={{ bg: "#2A2A6A" }}
                size="lg"
                mb={4}
            >
                Go to Home
            </Button>

            <Image
                src={not_found}
                alt="404 Image"
                draggable={false}
                borderRadius='10px'
                w='40%'
                mx='auto'
            />

            <Heading as="h1" size="2xl" my={4}>
                404
            </Heading>

            <Text fontSize="xl" mb={4}>
                Oops! The page you're looking for doesn't exist.
            </Text>
        </Box>
    );
};

export default NotFound;
