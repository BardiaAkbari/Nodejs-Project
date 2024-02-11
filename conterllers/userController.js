const User = require('../models/userModel');
const bcrypt = require('bcrypt');

//@desc Register a user
//@route POST /users/register
//@acesses private
const asyncHnadler = require('express-async-handler');

const registerUser = asyncHnadler(async (req, res) => {
    const {username, email, password} = req.body;
    if (username && email && password){
        const userAvailble = await User.findOne({email});
        if (userAvailble){
            res.status(400);
            throw new Error("User is already there!");
        }
        else{
            const hashPassword =await bcrypt.hash(password, 10);
            const user = await User.create({
                username,
                email,
                password: hashPassword
            });

            if (user){
                res.status(201).json({_id: user.id, email: user.email})
            }
            else{
                res.status(400);
                throw new Error("Request is not valid");
            }
        }
    }
    else{
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

});

//@desc Register a user
//@route POST /users/register
//@acesses private

const loginUser = asyncHnadler(async (req, res) => {
    res.json({message: "login the user"});
});

//@desc Register a user
//@route POST /users/register
//@acesses private

const currentUser = asyncHnadler(async (req, res) => {
    res.json({message: "current user info"});
});

module.exports = {
    registerUser,
    loginUser,
    currentUser
};