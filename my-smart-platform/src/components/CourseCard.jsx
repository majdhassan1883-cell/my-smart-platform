const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600">
          {course.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">{course.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full transition-all duration-1000" 
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
        
        <button className="w-full mt-5 py-2 bg-gray-50 text-gray-700 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;