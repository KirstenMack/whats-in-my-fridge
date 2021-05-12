const axios = require('axios');

apiKey = process.env.API_KEY;

const searchRequest = (searchText, pageNumber, resultsPerPage) => {
    const encodedText = encodeURIComponent(searchText);
    let offset = (pageNumber - 1) * resultsPerPage;
    offset = Math.min(offset, 990);  // Spoonacular API allows a maximum offset of 990.
    const options = `&addRecipeInformation=true&number=${resultsPerPage}&offset=${offset}`;
    return axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${encodedText}${options}&apiKey=${apiKey}`);
}

module.exports = {
    searchRequest
}