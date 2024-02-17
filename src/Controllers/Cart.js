const Carts = require("../Models/cart.js")

// exports.Cart = async (req, res,next) => {
//     try {
//         const { car,price } = req.body
//         const _cart = new Carts(req.body)
//         await _cart.save()
//         // req.subject = "User Form"
//             // req.text = " Items Saved"
//             // next()
//         res.status(201).json({ message: "Item saved in the Cart" })

//     } catch (error) {
//         console.log(error)
//         res.status(400).json({ message: "Error" })

//     }
// }


// exports.Cart = async (req, res) => {
//   const { car, price } = req.body;

//   // Validate request body
//   if (!car || !price) {
//     return res.status(400).json({
//       message: {
//         msgBody: "Car and price are required fields",
//         msgError: true
//       }
//     });
//   }

//   try {
//     const cart = new Carts({
//       car,
//       price
//     });
//     await cart.save();
//     res.status(201).json({
//       message: {
//         msgBody: "Cart item successfully added",
//         msgError: false
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: {
//         msgBody: "Unable to save cart item",
//         msgError: true
//       }
//     });
//   }
// };

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