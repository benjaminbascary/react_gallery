import { Box, CircularProgress, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { searchImagesByKeyword } from '../services/requestHandler';
import { Loading } from './Loading';

export const SearchByWord = () => {

	const [images, setImages] = useState<string[]>();
	const [searchInput, setSearchInput] = useState<string>();
	const [loading, setLoading] = useState<boolean>(false);

	const handleChange = async (event: any) => {
		setSearchInput(prevValue => event.target.value)
	}

	const loadImages = async () => {
		setLoading(true);
		const data = await searchImagesByKeyword(searchInput);
		console.log(data);
		setImages(data);
		setLoading(false);
	}

	useEffect(() => {
		
		!!searchInput && setTimeout(() => loadImages(), 1000);
	}, [searchInput]);
  return (
		<>
		<hr />
    <Box display="flex" flexDirection="column" alignItems="center" marginTop='5vh' minH="100vh" marginBottom="5vh">
			<Heading>Search...</Heading>
			<FormLabel>
				<Input placeholder='Type a subject...' width='50vh' onChange={handleChange}/>
			</FormLabel>
			{
				loading ? <Loading /> : null
			}
			{
				images && images.map(eachUrl => {
					return <Image borderRadius='10px' src={eachUrl} alt="blahblah" maxW='70%' key={eachUrl}  />
				})
			}
		</Box>
		</>
  )
}
