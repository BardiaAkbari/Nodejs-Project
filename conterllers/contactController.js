//@desc get all contacts
//@route GET /contacts
//@acesses private

const getContacts = (req, res) => {
    res.status(200).json({"message": "All contacts"})
};

//@desc get specefic contact
//@route GET /contacts/:id
//@acesses private

const getContact = (req, res) => {
    console.log(req);
    res.status(200).json({"message": `contact with ${req.params.id} id`});
};

//@desc make new contact
//@route PUT /contacts
//@acesses private

const createContact = (req, res) => {
    res.status(201).json({"message": `make new contact`});
};

//@desc delete specefic contact
//@route PUT /contacts/:id
//@acesses private

const editContact = (req, res) => {
    res.status(200).json({"message": `edit contact with ${req.params.id} id`});
};

//@desc delete specefic contact
//@route DELETE /contacts/:id
//@acesses private

const deleteContact = (req, res) => {
    res.status(200).json({"message": `delete contact with ${req.params.id} id`});
};

module.exports = {
    getContacts,
    getContact,
    createContact,
    editContact,
    deleteContact
}