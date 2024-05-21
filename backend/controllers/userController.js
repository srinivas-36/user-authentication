import User from "../models/usermodel.js";

export const users = async(req,res)=>{
    try {
        const users = await User.find();
        console.log("users fetched .. .")
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}