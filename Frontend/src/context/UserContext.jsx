import React from 'react'
//import { useState } from 'react'
export const UserContext = React.createContext();

const userContext = ({children}) => {

    //const [User, SetUser] = useState({
    //    email:'',
    //    fullname:{
    //        firstname:'',
    //        lastname:''
    //    }
    //});
    
    return (
        <div>
            <UserContext.Provider>
                {children } 
            </UserContext.Provider> 
        </div>
    )
}

export default userContext
