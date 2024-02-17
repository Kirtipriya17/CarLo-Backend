const Carts = require("../Models/cart.js")

exports.Cart = async (req, res) => {
  const { car, price } = req.body;

  try {
    const cart = new Carts({
      car,
      price
    });
    await cart.save();
    res.status(201).json({
      message: {
        msgBody: "Cart item successfully added",
        msgError: false
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: {
        msgBody: "Unable to save cart item",
        msgError: true
      }
    });
  }
};