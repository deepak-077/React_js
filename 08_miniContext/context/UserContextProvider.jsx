//creating a context provider
import React from 'react'
import UserContext from '/.UserContext'

const UserContextProvider =({children}) => {
    const [user,setUser]= React.useState(null)

    return{
        // we have to access a property of UserContext
        // values we want to access are provided in value
        <UserContext.Provider  value={{user, setUser}}>
        {children}

        </UserContext.Provider>
    }
}
export default UserContextProvider