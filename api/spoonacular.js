const axios = require('axios');

apiKey = process.env.API_KEY;

const searchRequest = async (searchText) => {
    const encodedText = encodeURIComponent(searchText);
    try {
        const number = 1;
        return await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodedText}&number=${number}&apiKey=${apiKey}`)
    }

    catch(err){
        return  err;
    }
}

const summaryRequest = async (id) => {
    try {
        return await axios.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${apiKey}`);
    }catch (err){
        return err;
    }
}

module.exports = {
    searchRequest,
    summaryRequest
}