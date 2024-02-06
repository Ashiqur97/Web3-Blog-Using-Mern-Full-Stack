import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res,next) => {
    const {username,email,password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400,"All fields are required"));
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPassword
    });

    try {
        await newUser.save();
        res.json("Signup Success");
    } catch (error) {
        next(error);
    }
   
}

