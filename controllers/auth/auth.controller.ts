import {User,UserModel} from "../../models/user";
import {ILoginRequest } from "../../interfaces/login_request";
import {Request, Response,NextFunction} from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthController{

    async login(req: Request, res: Response): Promise<Response | any>{
        try {
           
            const ILoginRequest = req.body;
            const {email, password} = ILoginRequest;

            // Find the user by email
            const user = await UserModel.findOne({ email });
          
         
            // check if the user not exists
            if(!user) {
                return res.status(401).send({message:"Invalid credentials ",status:false})
            }
             // Compare the provided password with the stored hashed password
            const is_password_valid = await bcrypt.compare(password, user.password);

            if (!is_password_valid) {
                return res.status(401).json({ message: 'Invalid credentials',status:false });
            }
            const jwt_secret_key =process.env.JWT_SECRET_KEY;
            const jwt_expiration_time=process.env.JWT_EXPIRATION_TIME
  
         
             // Generate a JWT token
            const token = jwt.sign({ userId: user._id }, jwt_secret_key, { expiresIn: jwt_expiration_time });

            return res.status(200).json({ token:token,"message":"user login successfuly",status:true });
        
        } catch (error) {

          return res.status(error.status).json({ error: error });
        }
    }
}