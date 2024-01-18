 interface User{
  readonly id?:number
  readonly   name:string;
  readonly  email:string
}

   interface UserRepositoryInterface {
    addUser(user:User):any,
   

}

export {UserRepositoryInterface,User}

