'use strict';

const Collaborateur = require('./CollaborateurModel');

module.exports = {
    findAll : (req, res) => {
        Collaborateur.find({})
            .exec()
            .then(collaborateurs => {
                res.json(collaborateurs)
            });
    }
};


