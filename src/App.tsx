import SearchByWord from './components/SearchByWord';
import Carrousel from './components/Carrousel';
import { 
  Box, 
  Heading 
} from '@chakra-ui/react';

function App() {
  return (
    <>
      <Box 
        display="flex" 
        justifyContent="center" 
        flexDirection="column"
        >
        <Heading 
          as='h1' 
          size='xl' 
          display="flex" 
          justifyContent="center" 
          fontSize='10vh'
          >Image Gallery!
        </Heading>
        <Carrousel />
        <SearchByWord />
      </Box>
    </>
  );
}

export default App;
