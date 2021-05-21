const express = require('express');
const router = express.Router();
const ContentController = require("../controllers/ingredientController");

const uuid = require('uuid');
const contents = require('../contents')

//route creation
//get food content

// router.get("/fetchContent", ContentController.fetchContent);


//get single 
router.get('/:id', (req, res) => {
    // res.send(req.params.id);

    const found = contents.some(content => content.id === parseInt(req.params.id));

    if (found) {
        res.json(contents.filter(content => content.id === parseInt(req.params.id))); //req return string
    } else {
        res.status(400).json({ msg: `No such User with ID ${req.params.id}` });
    }
});


//create food row
router.post('/', (req, res) => {
    // res.send(req.body);
    const newEntry = {
        id: uuid.v4(),
        name: req.body.name,
        title: req.body.title,
        status: 'active'
    }

    if(!newEntry.name || !newEntry.title){
        return res.status(400).json({msg: 'please include name/title'});
    }

    contents.push(newEntry);
    res.json(contents);
    // res.redirect('/');

});

//get single 
router.delete('/:id', (req, res) => {
    const found = contents.some(content => content.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: 'delete IIngredient', 
            contents: contents.filter(content => content.id !== parseInt(req.params.id))
        }); //req return string
    } else {
        res.status(400).json({ msg: `No such User with ID ${req.params.id}` });
    }
});

module.exports = router;