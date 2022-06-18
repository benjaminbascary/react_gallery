import { loadImagesFromLocalStorage, loadKeywordImagesFromLocalStorage, saveImagesIntoLocalStorage, saveKeywordImagesIntoLocalStorage } from '../localStorageHandler/localStorageHandler';
import { imagesMapper } from '../adapters/imagesMapper';
import { UrlsInterface } from '../types/types';

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
			return error.response.data
		}  
	} else {
		const data = JSON.parse(loadImagesFromLocalStorage());
		if (data) console.log("Loaded images url's from sessionStorage");
		return data;
	}
    
}

export const searchImagesByKeyword = async (keyword) => {
		try {
			const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${keyword}`, {
				headers: {
					Authorization: `Client-ID ${KEY}`
				}
			});
			const data = imagesMapper(await response.data.results)
			saveKeywordImagesIntoLocalStorage(data, keyword);
			return data
		} catch(error) {
			console.log(error.response.data);
		}

}