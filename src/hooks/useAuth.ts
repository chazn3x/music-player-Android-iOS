import React, { useContext, useState } from "react"

export const AuthContext = React.createContext({
  loggedIn: false,
  login: () => {
    
  }
})

export const useAuth = () => {
  const auth = useContext(AuthContext)

  const login = (mail, password) => {
    if (mail != '' && password != '') {
      console.log('Credentials: ', mail, password);
      return true
    }
    console.log('Invalid credentials.');
    return false
  }

  return {
    auth,
    login
  }
}