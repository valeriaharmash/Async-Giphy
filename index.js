require('dotenv').config()
const fetch = require('node-fetch')

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

const getImages = async (query) => {
	const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
	const response = await fetch(endpoint)
	const data = await response.json()
	const imageUrl = data.data[0].url
	return imageUrl
}

getImages('cat')
