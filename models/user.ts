import mongoose from "mongoose";
import { IUser } from "../interfaces/user";
import UserSchema from "../database/Schema/UserSchema";
export class  User {
    public UserModel = mongoose.model<IUser>('User', UserSchema);

    constructor() {
        this.UserModel;
    }

}

// Export the UserModel instance
export const UserModel = new User().UserModel;