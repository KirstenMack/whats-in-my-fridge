const axios = require('axios');

apiKey = process.env.API_KEY;

const searchRequest = (searchText) => {
    const encodedText = encodeURIComponent(searchText);
    try {
        return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodedText}&apiKey=${apiKey}`);
    }
    catch(err){
        return  err;
    }
}

module.exports = {
    searchRequest
}