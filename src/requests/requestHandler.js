const axios = require('axios').default;
const KEY = '6_v0r0e_9d8QfMrnsJk0uWXSo2e3pbCsSiMQUNAvc7M';

const fetchRandomImage = async () => {
    try {
			const response = await axios.get(`https://api.unsplash.com/photos/random/`, {
				headers: {
					Authorization: `Client-ID ${KEY}`
				}
			});
    	const data = await response.data.urls.small;
			return data;
		} catch(error) {
			const data = error
			return data
		}  
}

export default fetchRandomImage;
