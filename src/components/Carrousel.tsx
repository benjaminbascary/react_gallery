import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchAllImages } from '../requests/requestHandler';

type CarrouselProps = {
  images: string[];
}

const Carrousel = () => {

	const [images, setImages] = useState<string[]>();

	const loadImages = async () => {
		const imagesArray = await fetchAllImages();
		if(imagesArray) {
			setImages(imagesArray);
		}
	}

	useEffect(() => {
		loadImages()
	}, [])

  return (
    <Box>
      {
				images && images.map(eachUrl => {
					return <Image src={eachUrl} alt="blahblah" key={eachUrl} />
				})
			}
    </Box>
  )
}

export default Carrousel;
