import { Container, Flex, HStack, Stack } from '@chakra-ui/react';
import Cart from './components/Cart';
import Details from './components/Details';
import Navbar from './components/Navbar';
import PostPage from './components/PostPage';

function App() {
  return (
    <Stack style={{ background:'gray',color:'#FFFFFF'}} textStyle='h1'>
  
      <Navbar />
      <Details  />
      <Cart />
      <HStack style={{display: 'flex',
      flexWrap: 'wrap',marginLeft: '10px',gap: '10px',backgroundColor:'#FFFFFF' ,color:'gray'}}>
      <PostPage/> <PostPage/> <PostPage/> <PostPage/> <PostPage/> <PostPage/> <PostPage/> <PostPage/>
      </HStack>
    
  
    </Stack>
  );
}

export default App;
