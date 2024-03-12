const Booking = require("../Models/Booking")


exports.bookNow = async (req, res,next) => {

    try {
        const { name,lastName,address,pin,city,state,pNo,email } = req.body
        const _book = new Booking(req.body)
        await _book.save()
        req.subject = "Book Now"
            req.text = "Booking  Confirmed....."
            next()
        res.status(201).json({ message: "Booking Done." })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Error" })

    }
}