const Carts = require("../Models/cart.js")

exports.Cart = async (req, res,next) => {
    try {
        const { car,price } = req.body
        const _cart = new Carts(req.body)
        await _cart.save()
        // req.subject = "User Form"
            // req.text = " Items Saved"
            // next()
        res.status(201).json({ message: "Item saved in the Cart" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Error" })

    }
}
