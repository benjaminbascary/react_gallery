import { imageMapper } from '../map/imagesMapper';

const axios = require('axios').default;
const RANDOM_IMAGE_API_URL = "https://api.unsplash.com/photos/random/";
const ALL_IMAGES_API_URL = "https://api.unsplash.com/photos/";
const KEY = '6_v0r0e_9d8QfMrnsJk0uWXSo2e3pbCsSiMQUNAvc7M';


export const DEFAULT_PNG_ROUTE = './default.png';

export const fetchRandomImage = async () => {
    try {
			const response = await axios.get(RANDOM_IMAGE_API_URL, {
				headers: {
					Authorization: `Client-ID ${KEY}`
				}
			});
			return await response.data.urls.small;
		} catch(error) {
			console.log(error.response.data)
			return DEFAULT_PNG_ROUTE;
		}  
}

export const fetchAllImages = async () => {
    try {
		const response = await axios.get(ALL_IMAGES_API_URL, {
			headers: {
				Authorization: `Client-ID ${KEY}`
			}
		});
		return imageMapper(await response.data);
	} catch(error) {
		console.log(error.response.data)
		//return DEFAULT_PNG_ROUTE;
	}  
}

