const asyncHnadler = require('express-async-handler');

//@desc get all contacts
//@route GET /contacts
//@acesses private

const getContacts = asyncHnadler(async (req, res) => {
    res.status(200).json({message: "All contacts"})
});

//@desc get specefic contact
//@route GET /contacts/:id
//@acesses private

const getContact = asyncHnadler(async (req, res) => {
    res.status(200).json({message: `contact with ${req.params.id} id`});
});

//@desc make new contact
//@route PUT /contacts
//@acesses private

const createContact = asyncHnadler(async (req, res) => {
    const {name, email, phone} = req.body;
    
    if (name || email || phone){
        NaN
    }
    else{
        res.status(400);
        throw new Error("You must fill all the blanks");
    }
    console.log(req.body);
    res.status(201).json({message: `make new contact`});
});

//@desc delete specefic contact
//@route PUT /contacts/:id
//@acesses private

const editContact = asyncHnadler(async (req, res) => {
    res.status(200).json({message: `edit contact with ${req.params.id} id`});
});

//@desc delete specefic contact
//@route DELETE /contacts/:id
//@acesses private

const deleteContact = asyncHnadler(async (req, res) => {
    res.status(200).json({message: `delete contact with ${req.params.id} id`});
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    editContact,
    deleteContact
}