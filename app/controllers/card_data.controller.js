const CardData = require("../models/card_data.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    const cardData = new CardData({
        name: req.body.name,
        amount: req.body.amount,
        number: req.body.number,
        cvv: req.body.cvv,
        expMonth: req.body.expMonth,
        expYear: req.body.expYear,
        country: req.body.country,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
    });

    CardData.create(cardData, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while saving the Card."
            });
        else res.send(data);
    });
};

// Retrieve all Cards from the database.
exports.findAll = (req, res) => {
    CardData.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cards."
            });
        else res.send(data);
    });
};