import { useState } from "react";
import { Plus, Flag } from "lucide-react";

const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask({ text, priority, id: Date.now(), completed: false });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center">
      <input
        type="text"
        placeholder="What's your next goal?"
        className="flex-1 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-xl px-4 py-2 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <select 
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="bg-gray-50 border-none rounded-xl px-4 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="High">🔴 High Priority</option>
        <option value="Medium">🟡 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors">
        <Plus size={24} />
      </button>
    </form>
  );
};

export default TaskInput;