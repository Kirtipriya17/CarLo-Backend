const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")

exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization
        console.log(token);
        if (token) {
            const data = jwt.verify(token, "MYSECRETKEY@")
            const { id } = data; //destructuring or extracting id from data
            req.id = id;
            next();

        } else {
            return res.status(401).json({ message: "Token is missing" })
        }
    } catch (err) {  
        return res.status(401).json({ message: err })
    }
}

exports.validateForm = [
    check("name").notEmpty().withMessage("Please Enter Name"),
    check("lastName").notEmpty().withMessage("Please Enter Last Name"),
    check("address").notEmpty().withMessage("Please Enter Address"),
    check("pin").isNumeric().withMessage("Please Enter Pin"),
    check("city").notEmpty().withMessage("Please Enter City"),
    check("state").notEmpty().withMessage("Please Enter State"),

    check("email").isEmail().withMessage("Please Enter Valid Email"),
    check("pNo").isMobilePhone().withMessage("Please Enter Valid Number")
   ]
   
   exports.isValidated = (req,res,next) =>{
       const errors = validationResult(req)
       if(errors.isEmpty()){
           next()
       }else{
           res.status(400).json({ message:errors.array()[0]})
       }
   }
