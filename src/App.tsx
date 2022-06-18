import { Box, Heading } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import Carrousel from './components/Carrousel';
import { Gallery } from './components/Gallery';

function App() {

  
  console.log(!!window.localStorage.getItem('prueba'));
  return (
    <>
        <Box>
          <Heading as='h1' size='xl' fontSize='10vh'>Image Gallery!</Heading>
          {/*<Gallery />*/}
          <Carrousel />
        </Box>
    </>
  );
}

export default App;
