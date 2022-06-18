import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchAllImages } from '../services/requestHandler';
import { Loading } from './Loading';

type CarrouselProps = {
  images: string[];
}

const Carrousel = () => {

	const [images, setImages] = useState<string[]>();
	const [loading, setLoading] = useState<boolean>(true);

	const loadImages = async () => {
		const imagesArray = await fetchAllImages();
		if(imagesArray) {
			setImages(imagesArray);
			setLoading(false);
		}
	}

	useEffect(() => {
		loadImages()
	}, [])

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {
		images ? images.map(eachUrl => {
			return <Image borderRadius='10px' src={eachUrl} alt="blahblah" maxW='70%' key={eachUrl} />
			}
		) : (
			<Loading />
		)
			}
    </Box>
  )
}

export default Carrousel;
