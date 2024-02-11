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
    const contact = await Contact.findById(req.params.id);
    if (contact){
        res.status(200).json(contact);
    }
    else{
        res.status(404);
        throw new Error("Contact not found!")
    }   
});

//@desc make new contact
//@route PUT /contacts
//@acesses private

const createContact = asyncHnadler(async (req, res) => {
    const {name, email, phone} = req.body;
    console.log(req.body);
    if (name && email && phone){
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
    const contact = await Contact.findById(req.params.id);
    if (contact){
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );
        res.status(200).json(updatedContact);
    }
    else{
        res.status(404);
        throw new Error("Contact not found!")
    }

});

//@desc delete specefic contact
//@route DELETE /contacts/:id
//@acesses private

const deleteContact = asyncHnadler(async (req, res) => {
   
    const contact = await Contact.findById(req.params.id);
    
    if (contact){
        await Contact.deleteOne({ _id: req.params.id });
        res.status(200).json(contact);
    }
    else{
        res.status(404);
        throw new Error("Contact not found!")
    }
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    editContact,
    deleteContact
}