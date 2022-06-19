import {useState, useEffect } from 'react'
import { fetchAllImages } from '../services/requestHandler';

const useCarrouselImages = () => {
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
		loadImages();
	}, []);

    return [images] as const;
}

export default useCarrouselImages;