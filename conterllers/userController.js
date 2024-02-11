const asyncHnadler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//@desc Register a user
//@route POST /users/register
//@acesses private


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

//@desc Login user
//@route POST /users/login
//@acesses private

const loginUser = asyncHnadler(async (req, res) => {
    const {email, password} = req.body;
    if (email && password){
        const user = await User.findOne({email});

        if (user && await bcrypt.compare(password, user.password)){
            const accessToken = jwt.sign({
                    user: {
                        username: user.username,
                        email: user.email,
                        id: user.id
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "2m"}
            );
            res.status(200).json({ accessToken })
        }
        else{
            res.status(401);
            throw new Error("email or password is not valid");
        }
    }
    else{
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
});

//@desc Current user info
//@route POST /users/current
//@acesses private

const currentUser = asyncHnadler(async (req, res) => {

    res.json({message: "current user info"});
});

module.exports = {
    registerUser,
    loginUser,
    currentUser
};