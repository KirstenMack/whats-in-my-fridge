const axios = require('axios');

apiKey = process.env.API_KEY;

const searchRequest = (searchText) => {
    const encodedText = encodeURIComponent(searchText);
    try {
        const number = 1;
        return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodedText}&number=${number}&apiKey=${apiKey}`)
    }
    catch(err){
        return  err;
    }
}

const summaryRequest = (id) => {
    try {
        return axios.get(`https://api.spoonacular.com/recipes/?id=${id}/summary&apiKey=${apiKey}`);
    }catch (err){
        return err;
    }
}

module.exports = {
    searchRequest,
    summaryRequest
}