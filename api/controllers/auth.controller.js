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
};

export const signin = async (req, res,next) => {
    const {email,password} = req.body;

    if(!email || !password || email === '' || password === ''){
        next(errorHandler(400,"All fields are required"));
    }

    try {
        const validUser = await User.findOne({email});

        if(!validUser){
            next(errorHandler(400,"User not found"));
        }

        const validPassword = await bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            next(errorHandler(400,"Invalid password"));
        }
    } catch (error) {
        next(error);
    }

}

