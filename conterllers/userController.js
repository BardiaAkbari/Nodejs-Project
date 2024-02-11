//@desc Register a user
//@route POST /users/register
//@acesses private

const registerUser = asyncHnadler(async (req, res) => {
    res.json({message: "Register the user"});
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