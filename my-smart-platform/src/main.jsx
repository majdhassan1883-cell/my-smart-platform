import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext' // 👈 استيراد الـ Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  {/* 👈 تغليف التطبيق */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
)