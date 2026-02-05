import { Link, Outlet } from "react-router-dom";
import { LayoutDashboard, BookOpen, Calendar, StickyNote, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const { logout, user } = useAuth();

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { name: "Courses", icon: <BookOpen size={20} />, path: "/courses" },
    { name: "Planner", icon: <Calendar size={20} />, path: "/planner" },
    { name: "Notes", icon: <StickyNote size={20} />, path: "/notes" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">SkillBridge</h1>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
              {user?.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium text-gray-700 truncate">{user}</span>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-lg transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet /> {/* 👈 هون بتظهر الصفحات اللي بنفتحها */}
      </main>
    </div>
  );
};

export default MainLayout;