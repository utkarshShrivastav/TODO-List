// controller to navigate to homePage;
module.exports.homePage = function(req,res){
    res.render('home');
}

// controller to take data from user and store it in database
module.exports.addTask = function(req,res){
    const description = req.body.description;
    const category = req.body.category;
    const date = req.body.date; 

    res.render("home");
}