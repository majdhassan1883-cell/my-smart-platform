import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. نادي الـ login function وعطيها الـ email والـ password
    // 2. إذا نجح (أو فوراً حالياً) خليه يروح على الـ dashboard
    // navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        {/* حط الـ Inputs هون */}
        
        <button type="submit" className="...">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;