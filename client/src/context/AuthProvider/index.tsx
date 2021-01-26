import React, { createContext, useContext } from "react"

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

