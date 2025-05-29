const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { name, surname, username, password, email, year, phone } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      surname,
      username,
      password: hashedPassword,
      email,
      year,
      phone,
    });

    res.status(201).json({ message: "Registration successful", user });
  } catch (err) {
    res.status(500).json({ message: "Registration error", error: err.message });
  }
};


exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt for username:", username); // <--- add this

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("No user found with username:", username); // <--- add this
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
};

exports.forgetPassword = async(req,res) => {
  const {email} = req.body;

  try{
    const user = await User.findOne( {email} );
    if(!user) return res.status(404).json({message: "user not found"});

    const resetToken = crypto.randomBytes(32).toString("hex");

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    user.resetToken = resetToken;
    user.resetTokenExpire = Date.now() + 1000 * 60 * 5;
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "yahoo",
      auth:{
        user: "kakhidze.k@yahoo.com",
        pass: "argetyvitparols"
      }
    });
    
    transporter.verify(function (error, success){
      if(err){
        console.error("Nodemailer error");
      }else{
        console.log("success");
      }
    })

    res.status(200).json({message: "OK, Really Good password"});
    console.log(resetLink);
  }catch(err){
    console.log("error")
  }
}


