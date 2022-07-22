import React from 'react';
import {  Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid,  Text, Textarea, VStack } from "@chakra-ui/react";


const Details = () => {
  return (
    <VStack w='full' h='full' 
    p={10} spacing={10}>
   
   <VStack spacing={5} align='flex-start'>
    <Heading>Your Account Details</Heading>
    <Text>If You have an account click here to Login</Text>
   </VStack>
   <SimpleGrid columns={2} columnGap={3} rowGap={2}>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="First Name"/>
        </FormControl>
      </GridItem>

      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Last Name" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Textarea placeholder="Please enter your address"
           _placeholder={{ opacity: 1, color: 'gray.500' }}/>
        </FormControl>
      </GridItem>

      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="Please enter your city" />
        </FormControl>
      </GridItem>

      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Countries</FormLabel>
           <Select >
            <option style={{backgroundColor: '#FFFFFF'}} onMouseOver="this.style.color='red'">Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>China</option>
           </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <FormControl>
         <Checkbox>Ship to billing Address</Checkbox>
         </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <Button width='full' variant='primary' >Submit</Button>
      </GridItem>

   </SimpleGrid>
   </VStack>
  )
}

export default Details