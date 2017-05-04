const express = require('express');
var router = express.Router();
var recipeModel = require('../models/recipe');
var uuid = require('uuid');

router.get('/recipe/:recipeId', (req, res) => {
    //Returns a list of all comments in the specified recipe
    let recipeId = req.params.recipeId;
    if (!recipeId)
        throw ('Please provide recipe ID.');
    recipeModel.findCommentsWithRecipeId(recipeId).then((comments) => {
        res.send(comments);
    }).catch((err) => {
        res.send(err);
    });
});

router.get('/:commentId', (req, res) => {
    //Returns the comment specified by that commentId
    recipeModel.findCommentWithCommentId(req.params.commentId).then((comment) => {
        if (!comment)
            throw ('no such comment');
        res.send(comment);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/:recipeId', (req, res) => {
    //Creates a new comment with the supplied data in the request body for the stated recipe, and returns the new comment
    let poster = req.body.poster;
    let comment = req.body.comment;
    let updateParams = {};
    updateParams._id = uuid();

    if (poster)
        updateParams.poster = poster;
    if (comment)
        updateParams.comment = comment;

    recipeModel.addComment(req.params.recipeId, updateParams).then((addResult) => {
        res.send(updateParams);
    }).catch((err) => {
        res.send(err);
    });
});

router.put('/:recipeId/:commentId', (req, res) => {
    //Updates the specified comment for the stated recipe with only the supplied changes, and returns the updated comment
    let commentId = req.params.commentId;
    let recipeId = req.params.recipeId;
    let updateParams = { "_id": commentId };
    let poster = req.body.poster;
    let comment = req.body.comment;

    if (poster)
        updateParams.poster = poster;
    if (comment)
        updateParams.comment = comment;

    recipeModel.updateComment(commentId, updateParams).then((updateResult) => {
        res.send(updateParams);
    }).catch((err) => {
        res.send(err);
    });
});

router.delete('/:id', (req, res) => {
    //Deletes the comment specified 
    let commentId = req.params.id;
    if (!commentId) res.send('Please provide comment id.');
    recipeModel.deleteComment(commentId).then((deleteResult) => {
        res.redirect('/recipes');
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;