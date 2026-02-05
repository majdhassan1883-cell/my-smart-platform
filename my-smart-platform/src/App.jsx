import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "/src/pages/Login.jsx";
import Dashboard from "/src/pages/Dashboard.jsx";
import MainLayout from "/src/layouts/MainLayout.jsx";

// مكونات وهمية حالياً للصفحات التانية
const Courses = () => <h1 className="text-2xl font-bold">Courses Section</h1>;
const Planner = () => <h1 className="text-2xl font-bold">Planner & Tasks</h1>;
const Notes = () => <h1 className="text-2xl font-bold">My Notes</h1>;

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        
        {/* كل الصفحات المحمية بتنحط جوا هيدا الـ Layout */}
        <Route element={user ? <MainLayout /> : <Navigate to="/login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/notes" element={<Notes />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;