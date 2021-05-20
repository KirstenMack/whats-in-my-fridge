const axios = require('axios');

apiKey = process.env.API_KEY;

const searchRequest = async (searchText) => {
    const encodedText = encodeURIComponent(searchText);
    try {
        const numberResults = 5;
        let response =  await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodedText}&number=${numberResults}&apiKey=${apiKey}`)
        return response
    }

    catch(err){
        return  err;
    }
}

const summaryRequest = async (id) => {
    try {
        let response =  await axios.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${apiKey}`);
        return response
    }catch (err){
        return err;
    }
}

const infoRequest = async (id) => {
    try {
        let response =  await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`);
        return response
    }catch (err){
        return err;
    }
}

module.exports = {
    searchRequest,
    summaryRequest,
    infoRequest
}