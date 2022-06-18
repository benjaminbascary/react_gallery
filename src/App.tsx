import { Box, Heading } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import Carrousel from './components/Carrousel';
import Gallery from './components/Gallery';
import { SearchByWord } from './components/SearchByWord';

function App() {

  
  console.log(!!window.localStorage.getItem('prueba'));
  return (
    <>
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Heading as='h1' size='xl' display="flex" justifyContent="center" fontSize='10vh'>Image Gallery!</Heading>
          {/*<Gallery />*/}
          <Carrousel />
          <SearchByWord />
        </Box>
    </>
  );
}

export default App;
