import React, { useEffect, useContext, useState } from 'react'
import { auth } from './pages/Firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState() 
  
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  
  useEffect(() => { 
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  
  const value = {
    currrentUser,
    signup
  }
  return (
    <AuthContext.Provider value={value}> 
      {children}
    </AuthContext.Provider> 
  )
}