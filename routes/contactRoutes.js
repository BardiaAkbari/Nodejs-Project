const express = require('express');
const router = express.Router();

const {
    getContacts,
    getContact,
    createContact,
    editContact,
    deleteContact
} = require('../conterllers/contactController');

router.route('/').get(getContacts).post(createContact);;
router.route('/:id').get(getContact).put(editContact).delete(deleteContact);

module.exports = router;