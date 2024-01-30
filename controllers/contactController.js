//@desc get all contacts
//@route GET /contacts
//@acesses private

const getContacts = (req, res) => {
    res.json({"message": "All contacts"})
};

//@desc get all contacts
//@route GET /contacts/:id
//@acesses private

const getContact = (req, res) => {
    res.json({"message": `contact with `})
}




module.exports = {getContacts}