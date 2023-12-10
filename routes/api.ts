import express, { Request, Response, NextFunction } from 'express';
import { UserController } from '../controllers/user.controller';
import {AuthController } from "../controllers/auth/auth.controller";


let route = express.Router();
const user_controller= new UserController();
const auth_controller = new AuthController();


// Home page route.
route.get('/', function (req, res) {
    res.send('Wiki home page');
});

// Auth page route.
route.post('/login',)

route.get('/users',user_controller.getUsers);
route.post('/login',auth_controller.login);
// route.post('/user',user_controller.create);
// route.delete('/user/:uid',user_controller.destroy);
  


// Export the router
export  = route;

