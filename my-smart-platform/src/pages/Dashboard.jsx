import { useAuth } from "../context/AuthContext";
import StatCard from "/src/components/StatCard.jsx";
import { BookOpen, CheckCircle, Clock, Zap } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  
  // منطق بسيط للترحيب بناءً على الوقت
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {greeting}, <span className="text-blue-600">{user?.split("@")[0]}</span>! 
        </h1>
        <p className="text-gray-500 mt-2">Here's what's happening with your learning journey today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Active Courses" 
          value="4" 
          color="bg-blue-500" 
          icon={<BookOpen size={24} />} 
        />
        <StatCard 
          title="Tasks Pending" 
          value="12" 
          color="bg-orange-500" 
          icon={<Clock size={24} />} 
        />
        <StatCard 
          title="Completed" 
          value="85%" 
          color="bg-green-500" 
          icon={<CheckCircle size={24} />} 
        />
        <StatCard 
          title="Current Streak" 
          value="7 Days" 
          color="bg-purple-500" 
          icon={<Zap size={24} />} 
        />
      </div>

      {/* Section: Recent Activity & Progress ( placeholders ) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[300px]">
          <h2 className="text-xl font-bold mb-4">Weekly Progress</h2>
          <div className="flex items-center justify-center h-full text-gray-400 italic">
            [Chart Component will be here - using Recharts later]
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              React Advanced Patterns - Tomorrow
            </li>
            <li className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Database Design Docs - Friday
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;