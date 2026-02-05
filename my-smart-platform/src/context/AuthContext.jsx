import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // 🎯 هون المهمة:
    // إذا كان الباسورد "123456" خلي الـ user هو الـ email
    if (password === "123456") {
      setUser(email);
      console.log("Logged in as:", email);
    } else {
      alert("Wrong Password!");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);