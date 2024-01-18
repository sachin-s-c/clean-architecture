import { User } from "../entities/user";
import { UserModel } from "../interface/userModelInterface";
import { UserRepositoryInterface } from "../interface/userRepositoryInterface"



export class userRepository  {

   async addUser(user:UserModel){
        const response=await User.create(user)
        return response
    }

}




