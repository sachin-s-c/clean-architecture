
import { UserModel } from "../interface/userModelInterface";
import { UserRepositoryInterface } from "../interface/userRepositoryInterface";


export class userInteractor{


    private userRepository:UserRepositoryInterface
    constructor (userRepository:UserRepositoryInterface){

        this.userRepository=userRepository

    }

    async  addUser(user:UserModel){
        return this.userRepository.addUser(user)
    }
}

