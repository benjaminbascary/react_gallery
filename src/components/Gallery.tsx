import React, {useState, useEffect} from 'react'
import {fetchRandomImage, DEFAULT_PNG_ROUTE } from '../requests/requestHandler';
import { Box, Button, Image, Badge } from '@chakra-ui/react';

export const Gallery = () => {
	const [imageUrl, setImageUrl] = useState<string>();
	const [error, setError] = useState<boolean>(false);

  const loadImage = async () => {
    const imageLink = await fetchRandomImage();
    setImageUrl(imageLink);
  }

  useEffect(() => {
		if (imageUrl === DEFAULT_PNG_ROUTE) {
			setError(prevValue => true);
		}
    loadImage();
  }, []);

	const handleReload = () => {
		loadImage();
	}

  return (
    <>
		<Box display='flex' maxW='50vh' flexDirection='column' alignContent='center'>
			<Image maxH='50vh' src={imageUrl} alt="randomimage" />
			<Button 
				disabled={error && true} 
				colorScheme='green' 
				onClick={handleReload}
			>Reload Image
			</Button>
			{
				error ? (
					<Badge 
						display="flex" 
						justifyContent="center" 
						colorScheme="red"
					>Looks like there has been an error with the server!
					</Badge>
				) : (
					null
					)
			}
		</Box>
		</>
  )
}
