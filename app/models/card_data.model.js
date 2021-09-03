const sql = require("./db.js");

// constructor
const CardData = function (cardData) {
    this.name = cardData.name;
    this.amount = cardData.amount;
    this.number = cardData.number;
    this.cvv = cardData.cvv;
    this.expMonth = cardData.expMonth;
    this.expYear = cardData.expYear;
    this.country = cardData.country;
    this.phoneNumber = cardData.phoneNumber;
    this.email = cardData.email;
};

CardData.create = (newCustomer, result) => {
    sql.query("INSERT INTO card_data SET ?", newCustomer, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created customer: ", {id: res.insertId, ...newCustomer});
        result(null, {id: res.insertId, ...newCustomer});
    });
};

CardData.getAll = result => {
    sql.query("SELECT * FROM card_data", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("cards: ", res);
        result(null, res);
    });
};


module.exports = CardData;