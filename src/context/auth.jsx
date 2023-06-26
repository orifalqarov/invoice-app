import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    let localData= JSON.parse(localStorage.getItem('token'))
  const [token, setToken] = useState(localData);
  useEffect(()=>{
    if(token){
        return localStorage.setItem('token',JSON.stringify(token))
    }else{
        return localStorage.removeItem('token')
    }
  },[token])
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
