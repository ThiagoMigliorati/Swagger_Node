let recipeList = getRecipeList();

module.exports.recipeList = recipeList;

module.exports.getSecretRecipe = (req,res)=>{
    return res.json({
        id: 1,
        isPublic: false,
        name: "Amazing Chef's recipe",
        steps: ['Put the vegetable on the boiler','wait 30 minutes', 'Add salt & paper'],
        ingredients: [{
            name: 'Tomato',
            amount: 5
        },{
            name: "Pasta",
            amount: 200
        }]
    }).status(200)
}

module.exports.getRecipes = (req, res) => {
    let responseRecipeList = [];
    for (let recipe of recipeList) {
        if (recipe.isPublic) {
            responseRecipeList.push(recipe);
        }
    }
    return res.json(responseRecipeList).status(200);
}

module.exports.postRecipes = (req, res) => {
    let newRecipe = req.body;
    newRecipe.id = recipeList.length + 1;
    newRecipe.isPublic = true;
    recipeList.push(newRecipe);

    return res.status(204).end();
}

module.exports.putRecipes = (req, res) => {
    let id = req.swagger.params.recipeId.value;
    for (let i = 0; i < recipeList.length; i++) {
        if (recipeList[i].id === id) {
            recipeList[i] = req.body;
            return res.status(204).end();
        }
    }
    return res.status(404).end();
}

module.exports.deleteRecipe = (req, res) => {
    let id = req.swagger.params.recipeId.value;
    for (let i = 0; i < recipeList.length; i++) {
        if (recipeList[i].id === id) {
            recipeList.splice(i, 1);
            return res.status(204).end();
        }
    }
    return res.status(404).end();
}





function getRecipeList() {
    return [{
        id: 1,
        isPublic: true,
        name: 'Kebab',
        steps: ['Put the vegetables on top of the wrap', 'Put meat', 'Roll the wrap'],
        ingredients: [{
            name: 'Tomato',
            amount: 1,
        },
        {
            name: 'Beef',
            amount: 200,
        }
        ]
    }, {
        id: 2,
        isPublic: true,
        name: 'Pizza',
        steps: ['Make the bread', 'Put the ingredients', 'Voila'],
        ingredients: [{
            name: 'Tomato',
            amount: 5,
        }]
    }]
}