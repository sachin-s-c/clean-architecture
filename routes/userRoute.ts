import express from "express";
import { userController } from "../controllers/userController";
import { userRepository } from "../repositories/userRepository";
import { userInteractor } from "../interactors/userInteractor";



const userRouter=express.Router()

const repository=new userRepository()
const interactor=new userInteractor(repository)
const controller=new userController(interactor)

userRouter.post('/user',controller.onCreateUser.bind(controller))


export default userRouter
 