const asyncHnadler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc get all contacts
//@route GET /contacts
//@acesses private

const getContacts = asyncHnadler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
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
    console.log(req.body);
    if (name || email || phone){
        const contact = await Contact.create({
            name,
            email,
            phone
        });
        res.status(201).json(contact);
    }
    else{
        res.status(400);
        throw new Error("You must fill all the blanks");
    }
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