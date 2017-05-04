const express = require('express');

var router = express.Router();
var uuid = require('uuid');
var recipeModel = require('../models/recipe');

router.get('/', (req, res) => {
    //return the list of recipies
    recipeModel.find().then((recipes) => {
        res.send(recipes);
    }).catch((err) => {
        res.send(err);
    });
});

router.get('/:id', (req, res) => {
    //return specific recipy
    let id = req.params.id;
    recipeModel.findWithId(id).then((recipeDocument) => {
        res.send(recipeDocument);
    }).catch((err)=>{
        res.send(err);
    });
});

router.post('/', (req, res) => {
    //create a recipy and returns the new recipy
    let uid = uuid();
    let title = req.body.title;
    let ingridients = req.body.ingredients;
    let steps = req.body.steps;
    let comments = (req.body.comments) ? req.body.comments : [];

    let insertingRecipe = {
        "_id": uid,
        "title": title,
        "ingridients": ingridients,
        "steps": steps,
        "comments": comments
    };

    recipeModel.insert(insertingRecipe).then((insertResult) => {
        if (insertResult.ok < 1) throw (insertResult)
        res.send(insertingRecipe);
    }).catch((err) => {
        res.send(err);
    });

});

router.put('/:id', (req, res) => {
    //Updates the specified recipe with only the supplied changes, return the updated recipe
    let id = req.params.id;
    let updateParams = {};

    if (req.body.title)
        updateParams.title = req.body.title;
    if (req.body.ingredients)
        updateParams.ingredients = req.body.ingredients;
    if (req.body.steps)
        updateParams.steps = req.body.steps;
    if (req.body.comments)
        updateParams.comments = req.body.comments;

    recipeModel.update(id, updateParams).then((updatedRecipeDocument) => {
        res.send(updatedRecipeDocument);
    }).catch((updateResult) => {
        res.send(updateResult);
    });
});

router.delete('/:id', (req, res) => {
    //delete the certain recipy and return the updated list
    let id = req.params.id;
    recipeModel.delete(id).then((deleteResult) => {
        res.redirect('/recipes');
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;