const dbConnection = require('./dbConnection');
const mongoCollections = require('./mongoCollections');

function find() {
    return mongoCollections.getRecipesCollection.then((recipesCollection) => {
        return recipesCollection.find().toArray();
    });
}

function findWithId(id) {
    return mongoCollections.getRecipesCollection.then((recipesCollection) => {
        return recipesCollection.findOne({ _id: id });
    });
}

function insert(insertingRecipe) {
    return mongoCollections.getRecipesCollection.then((recipesCollection) => {
        return recipesCollection.insertOne(insertingRecipe);
    });
}

function update(id, updateParams) {
    let updateCommand = { $set: updateParams };

    return mongoCollections.getRecipesCollection.then((recipeCollection) => {
        return recipeCollection.update({ _id: id }, updateCommand);
    }).then((updateResult)=>{
        if (updateResult.result.n < 1) throw ('update failed');
        return findWithId(id);
    });
}

function deletee(id) {
    return mongoCollections.getRecipesCollection.then((recipesCollection) => {
        return recipesCollection.deleteOne({ _id: id });
    }).then((deleteResult) => {
        if (deleteResult.result.n < 1)
            throw ('no such result');

        return deleteResult;
    });
}

function findCommentsWithRecipeId(recipeId) {
    return findWithId(recipeId).then((recipe) => {
        if(!recipe)
            throw('No such recipe.');
        let comments = recipe.comments;
        if (!comments || comments.length < 1)
            throw('This recipe doesn\'t have comments yet.');

        let result = [];
        let formatedComment;
        comments.forEach((comment) => {
            formatedComment = {
                "id": comment._id,
                "recipeId": recipeId,
                "recipeTitle": recipe.title,
                "poster": comment.poster,
                "comment": comment.comment
            };
            result.push(formatedComment);
        });

        return result;
    });
}

//Comment是在Recipe下面的的sub-document，所以針對comment做過濾，回傳的仍然是符合條件的一整個Recipe object
function findCommentWithCommentId(commentId) {
    return mongoCollections.getRecipesCollection.then((recipesCollections) => {
        return recipesCollections.findOne({ "comments._id": commentId }, { "comments.$": 1 });
    }).then((recipe) => {
        return recipe.comments[0];
    });
}

function addComment(recipeId, updateParams) {
    return mongoCollections.getRecipesCollection.then((recipeCollections) => {
        return recipeCollections.update({ _id: recipeId }, { $push: { "comments": updateParams } });
    }).then((addResult) => {
        if (addResult.result.n < 1)
            throw ('no such recipe');

        return addResult;
    });
}

function updateComment(commentId, updateParams) {
    let updatingComment;
    return findCommentWithCommentId(commentId).then((comment) => {
        updatingComment = comment;
        for (var property in updateParams) {
            if (updateParams.hasOwnProperty(property)) {
                updatingComment[property] = updateParams[property];
            }
        }
        return mongoCollections.getRecipesCollection;
    }).then((recipesCollection) => {
        return recipesCollection.updateOne({ "comments._id": commentId }, { $set: { "comments.$": updatingComment } });
    }).then((updateResult) => {
        if (updateResult.result.n < 1)
            throw ('no such comment.');
        return updateResult;
    });
}

function deleteComment(commentId) {
    let updateParams = {};
    updateParams._id = commentId;
    return mongoCollections.getRecipesCollection.then((recipesCollection) => {
        return recipesCollection.updateOne({ "comments._id": commentId }, { $pull: { "comments": updateParams } });
    }).then((deleteResult) => {
        if (deleteResult.result.n < 1)
            throw ('no such comment');

        return deleteResult;
    });
}

exports.find = find;
exports.findWithId = findWithId;
exports.insert = insert;
exports.update = update;
exports.delete = deletee;
exports.findCommentsWithRecipeId = findCommentsWithRecipeId;
exports.findCommentWithCommentId = findCommentWithCommentId;
exports.addComment = addComment;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;