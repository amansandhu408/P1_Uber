import React , { createContext , useState} from 'react'
export const UserDataContext = createContext();
export const UserContext = createContext();


const UserContextProvider = ({children}) => {

    const [user, setUser] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        }
    });
    
    return (
        <div>
            <UserContext.Provider value ={{user , setUser }}>
                {children } 
            </UserContext.Provider> 
        </div>
    )
}

export default UserContextProvider
