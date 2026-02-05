
import { useState, useEffect } from "react";
import { Plus, Trash2, CheckCircle2, Circle, AlertCircle, Calendar } from "lucide-react";

const Planner = () => {
  // 1. قراءة البيانات من الذاكرة فور فتح الصفحة
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("skillbridge_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  // 2. حفظ تلقائي للبيانات عند أي تغيير
  useEffect(() => {
    localStorage.setItem("skillbridge_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      priority: priority,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    };
    
    setTasks([newTask, ...tasks]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const getPriorityStyles = (p) => {
    switch (p) {
      case "High": return "text-red-600 bg-red-50 border-red-100";
      case "Medium": return "text-amber-600 bg-amber-50 border-amber-100";
      case "Low": return "text-emerald-600 bg-emerald-50 border-emerald-100";
      default: return "text-gray-600 bg-gray-50 border-gray-100";
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 flex items-center gap-3">
          <Calendar className="text-blue-600" size={36} />
          Daily Planner
        </h1>
        <p className="text-gray-500 mt-2 text-lg">Manage your tasks with surgical precision.</p>
      </div>

      {/* Input Section */}
      <form onSubmit={addTask} className="bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col md:flex-row gap-3 mb-10 transition-all focus-within:ring-2 focus-within:ring-blue-500/20">
        <input
          type="text"
          placeholder="What's the next big move?"
          className="flex-1 px-6 py-4 text-gray-700 bg-transparent border-none outline-none text-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <div className="flex items-center gap-2 px-2">
          <select 
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="bg-gray-50 text-gray-600 px-4 py-2 rounded-xl text-sm font-bold outline-none border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
            <Plus size={24} />
          </button>
        </div>
      </form>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
            <AlertCircle className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-400 font-medium text-xl">Your plate is empty. Add a task to start!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div 
              key={task.id} 
              className={`group flex items-center justify-between p-5 bg-white rounded-2xl border transition-all duration-300 ${task.completed ? 'opacity-60 grayscale-[0.5] border-transparent' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}
            >
              <div className="flex items-center gap-5 flex-1">
                <button 
                  onClick={() => toggleTask(task.id)}
                  className={`transition-all duration-300 ${task.completed ? 'text-green-500 scale-110' : 'text-gray-300 hover:text-blue-500'}`}
                >
                  {task.completed ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                </button>
                
                <div className="flex-1">
                  <p className={`text-lg font-semibold transition-all ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {task.text}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase border ${getPriorityStyles(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium italic">Added on {task.createdAt}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => deleteTask(task.id)}
                className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all md:opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Summary Footer */}
      {tasks.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 font-medium">
          <p>{tasks.filter(t => t.completed).length} of {tasks.length} tasks completed</p>
          <button 
            onClick={() => { if(window.confirm("Clear all?")) setTasks([]) }}
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Planner;