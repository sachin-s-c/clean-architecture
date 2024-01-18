import { userInteractorInterface } from "../interface/userInteractorInterface"
import { Request,Response } from "express"

export class userController{
    private userInteractor:userInteractorInterface
    constructor(userInteractor:userInteractorInterface){
        this.userInteractor=userInteractor
    }

  async onCreateUser(req:Request,res:Response){
    try{

        const userData=req.body

        const data= await this.userInteractor.addUser(userData)

        return res.json(data)

    }
    catch(error){

        console.log(error);
        

    }
  }
}