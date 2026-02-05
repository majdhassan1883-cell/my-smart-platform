import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("skillbridge_notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("skillbridge_notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      content: "New idea...",
      color: ["bg-yellow-100", "bg-blue-100", "bg-green-100", "bg-pink-100"][Math.floor(Math.random() * 4)]
    };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (id, newText) => {
    setNotes(notes.map(n => n.id === id ? { ...n, content: newText } : n));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quick Notes</h1>
        <button onClick={addNote} className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform">
          <Plus />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <div key={note.id} className={`${note.color} p-6 rounded-2xl shadow-sm relative group min-h-[200px]`}>
            <textarea
              className="bg-transparent w-full h-full border-none focus:ring-0 resize-none font-medium text-gray-800"
              value={note.content}
              onChange={(e) => updateNote(note.id, e.target.value)}
            />
            <button 
              onClick={() => setNotes(notes.filter(n => n.id !== note.id))}
              className="absolute bottom-4 right-4 text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;