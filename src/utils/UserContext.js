import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Dummy User",
        email:"Dummy.User@gmail.com"
    }
})

export default UserContext;