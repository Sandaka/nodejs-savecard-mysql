module.exports = app => {
    const cards = require("../controllers/card_data.controller.js");

    // Create a new Customer
    app.post("/customers", cards.create);

    // Retrieve all Customers
    app.get("/customers", cards.findAll);

    // // Retrieve a single Customer with customerId
    // app.get("/customers/:customerId", customers.findOne);
    //
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
    //
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
    //
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
};