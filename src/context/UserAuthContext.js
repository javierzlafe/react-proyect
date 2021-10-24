import React, { createContext, useState } from 'react'

export const UserAuthContext = createContext();

export const UserAuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <UserAuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}