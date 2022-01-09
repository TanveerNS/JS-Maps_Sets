import User from "../models/user"
const {hashPassword, comparePassword} = require('../utils/auth');
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try{
        //console.log('request', req.body)
        const {name, email, password} = req.body
        
        if(!name) return res.status(400).send("Name is required")
        if(!password || password.length < 6 ){
            return res
            .status(400)
            .send("Password is required and should be min 6 characters long ")
        }
        console.log('user',User)
        let userExist = await User.findOne({email}).exec()
        if(userExist) return res.status(400).send("Email is taken")
        //hash password
        const hashedPassword = await hashPassword(password)

        //register
        const user = new User({
            name, email, password: hashedPassword,
        })
        await user.save();
        console.log('saved user', user);
        return res.json({ok: true});
    } catch( err ){
        console.log(err)
        return res.status(400).send('Error. Try again.')
    } 
}

export const login = async (req, res) => {
    try{
        console.log(req.body)
        const {email, password} = req.body
        //check if our db has user with that email
        const user = await User.findOne({email}).exec()
        if(!user) return res.status(400).send("No user found")
        //check password
        const match = await comparePassword(password, user.password)
        //create signed jwt
        const token = jwt.sign({_id:user._id},process.env.JWT_SECRET, {expiresIn:"7d"})
        //return user and token to client, exclude hashed password
        user.password = undefined
        //send token in cookie
        res.cookie('token', token, {
            httpOnly:true,
            
        })
        res.json(user)
    } catch(err){
        console.log(err)
        return res.status(400).send("Error. Try again")
    }
};