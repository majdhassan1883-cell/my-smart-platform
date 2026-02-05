import { useState } from "react";
import { initialCourses } from "../data/coursesData";
import CourseCard from "../components/CourseCard";
import { Plus } from "lucide-react";

const Courses = () => {
  const [courses, setCourses] = useState(initialCourses);

  // Function لإضافة كورس عشوائي (للتجربة حالياً)
  const addCourse = () => {
    const newCourse = {
      id: Date.now(),
      title: "New Masterclass " + (courses.length + 1),
      instructor: "Expert Mentor",
      progress: 0,
      category: "General",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80"
    };
    setCourses([...courses, newCourse]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Courses</h1>
          <p className="text-gray-500">Manage and track your learning progress.</p>
        </div>
        <button 
          onClick={addCourse}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
        >
          <Plus size={20} />
          <span>Add Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;