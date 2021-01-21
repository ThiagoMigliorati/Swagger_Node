let commentList = [];

let recipeList = require('./recipe').recipeList;

module.exports.getComments = (req,res)=>{
   let recipeId = req.swagger.params.recipeId.value;
   let commentListResponse = [];

   for(let i = 0; i< commentList.length; i++){
        if(commentList[i].recipeId === recipeId){
            commentListResponse.push(commentList[i]);
        }
   }

   return res.json(commentListResponse).status(200);
}

module.exports.postComments = (req, res)=>{
    let recipeId = req.swagger.params.recipeId.value;
    for(let i = 0; i < recipeList.length; i++){
        if(recipeList[i].id === recipeId){
            let newComment = req.body;
            newComment.id = commentList.length + 1;
            commentList.push(newComment);
            return res.status(204).end();
        }
    }
    return res.status(404).end();
}


module.exports.deleteComments = (req, res)=>{
    let commentId = req.swagger.params.commentId.value;
    let recipeId = req.swagger.params.recipeId.value;

    for(let i = 0; i < recipeList.length; i++){
        if(recipeList[i].id === recipeId){
            for(let j = 0; j < commentList.length; j++){

                if(commentList[j].id === commentId){
                    commentList.splice(j, 1);
                    return res.status(204).end();
                }
            }
        }
    }
    return res.status(404).end();

}