const express = require("express");

const app = express();
const mongoose= require("mongoose");

app.use (express.json());
mongoose.connect("mongodb+srv://anshsharma456123:wQhN731jKGfxsa5b@cluster0.ufmoqzt.mongodb.net/userappnew");

const User =mongoose.model("users", {name: String , password: String, email: String});

app.post("/signup" , async function (req, res) {
    const username= req.body.username;
    const password= req.body.password;
    const name= req.body.name;

    const existingUser = await User.findOne({email : username});
    //CRUD operations
    if (existingUser){
        return res.status(400).json({msg: "User already exists"});
    }

    const user = new User({
        name: name,
        password : password,
        email : username
    });
    
    User.save();
    res.json({msg: "User registered successfully"});
});

 