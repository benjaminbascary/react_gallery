import { loadImagesFromLocalStorage, saveImagesIntoLocalStorage } from '../localStorageHandler/localStorageHandler';
import { imagesMapper } from '../map/imagesMapper';

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
		})
		return await response.data.urls.small;
	} catch(error) {
		console.log(error.response.data)
		return DEFAULT_PNG_ROUTE;
	}  
}

export const fetchAllImages = async () => {
	if(!!window.sessionStorage.getItem('unsplashApiImages') === false) {
		console.log('Could not find any images in sessionStorage\nCalling api endpoint...');
		try {
			const response = await axios.get(ALL_IMAGES_API_URL, {
				headers: {
					Authorization: `Client-ID ${KEY}`
				}
			});
			const data = imagesMapper(await response.data);
			saveImagesIntoLocalStorage(data);
			return data;
		} catch(error) {
			console.log(error.response.data)
		}  
	} else {
		const data = JSON.parse(loadImagesFromLocalStorage(), undefined, 4);
		if (data) console.log("Loaded images url's from sessionStorage");
		return data;
	}
    
}

