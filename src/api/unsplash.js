import axios from 'axios';

// Create instance of axios with desired properties for Unsplash request
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		// my access key for the Unsplash API
		Authorization: "Client-ID b921779d8c60f79e654acbddcca7956874e0c36ac6e2ab7425dcea2180b035ed"
	}
});
