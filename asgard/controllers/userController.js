const User = require("./../models/user")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerUser = async (req, res) => {
    const { name , surname, username, password, mail, year, phone } = req.body;

    try{
        const existingUser = await User.findOne({$or: 
            [{ username }, { mail }]
         })
         if(existingUser) return res.status(400).json({message: "User already exist"});
         const hashedPassword = await bcrypt.hash(password, 10);

         const user = await User.create({
            name, 
            surname, 
            username,
            password: hashedPassword,
            mail,
            year,
            phone
         });

         res.status(201).json({message: "Registration successful", user})

    }catch(err){
        
        res.status(500).json({message: "Registration error", error: err.message});


    }
}