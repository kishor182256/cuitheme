import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import imageone from '../assets/imageone.jpg';

import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme with new layer styles
const theme = extendTheme({
  layerStyles: {
    base: {
      bg: 'gray.50',
      border: '2px solid',
      borderColor: 'gray.500',
    },
    selected: {
      bg: 'teal.500',
      color: 'teal.700',
      borderColor: 'orange.500',
    },
  },
})


const PostCard = () => {  
  return (
    <Flex justify="center" align="center" layerStyle='selected'>
      <Stack width="320px" boxShadow="md" borderRadius="xl">
        <Image src={imageone} alt="image" />
        <Stack p="2">
          <HStack>
            <Avatar src={imageone} size="sm" />
            <Text fontWeight="600">John Doe</Text>
            <Text fontSize="xs">1 min ago</Text>
          </HStack>
          <VStack align="flex-start">
            <Heading fontSize="lg" >Subscribe to My channel</Heading>
            <Text fontSize="sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, quae.
            </Text>
            <Text fontSize="sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, quae.
            </Text>
            <Button alignSelf="flex-end" size="sm" to="/post">
              View Post
            </Button>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default PostCard;