import React from 'react'
import { Box, CircularProgress, Text } from '@chakra-ui/react'

export const Loading = () => {

  return (
    <>
        <Box height='80vh' display='flex' flexDirection="column" justifyContent="center" alignContent='center'>
            <CircularProgress isIndeterminate color='green.300'/>
            <Text>loading...</Text>
        </Box>
    </>
  )
}
