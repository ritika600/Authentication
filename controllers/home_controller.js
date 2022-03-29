const User = require("../models/user");

module.exports.home=function(req,res){
    console.log(req.cookies);
    res.cookie('userid',25);
   return res.render('home',{
       title:"title"
   });
}
module.exports.user=function(req,res){
    return res.render('user',{
        title:"title"
    });
 }
 module.exports.signUp = function(req,res){
     return res.render('user_signup',{
         title : "Sign up"
     })
 }
 module.exports.signIn = function(req,res){
    return res.render('user_signin',{
        title : "Sign In"
    })
}
//get sign up data
module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log('error in sign up');
        return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while sign up');
                return;
                }
                return res.redirect('/signin');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}
module.exports.createSession = function(req,res){
    
}
