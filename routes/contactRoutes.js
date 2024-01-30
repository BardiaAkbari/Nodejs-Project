const express = require('express');
const router = express.Router();

const {
    getContacts,
    getContact,
    createContact,
    editContact,
    deleteContact
} = require('../conterllers/contactController');

router.route('/').get(getContacts);
router.route('/').post(createContact);
router.route('/:id').get(getContact);
router.route('/:id').put(editContact);
router.route('/:id').delete(deleteContact);


module.exports = router;