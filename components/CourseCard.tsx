import React from 'react';
import { Course } from '../types';
import { Clock, CheckCircle, Trophy, IndianRupee, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onViewSyllabus: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onViewSyllabus }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
      <div className={`${course.color} p-6 text-white relative overflow-hidden`}>
         <div className="absolute top-0 right-0 p-4 opacity-10">
            <Trophy size={100} />
         </div>
         <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3 tracking-wide backdrop-blur-sm">
            {course.level} COURSE
         </span>
         <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
         <p className="text-white/90 text-sm">{course.targetAudience}</p>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-6">
          <IndianRupee className="text-slate-800" size={24} />
          <span className="text-3xl font-bold text-slate-800 ml-1">{course.price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-slate-500 ml-2 font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded">Great Value</span>
        </div>

        <p className="text-slate-600 text-sm mb-6 min-h-[40px]">{course.description}</p>

        <div className="flex items-center text-slate-500 text-sm mb-6 bg-slate-50 p-3 rounded-lg">
           <Clock size={16} className="mr-2" />
           <span>{course.duration}</span>
        </div>

        <div className="mb-6">
           <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What you'll learn</h4>
           <ul className="space-y-2">
             {course.skills.slice(0, 3).map((skill, idx) => (
               <li key={idx} className="flex items-start text-sm text-slate-700">
                 <CheckCircle size={16} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                 {skill}
               </li>
             ))}
           </ul>
        </div>

        <div className="mt-auto">
          <button 
            onClick={onViewSyllabus}
            className={`w-full py-3 rounded-xl font-bold text-white transition-colors flex items-center justify-center ${course.color.replace('bg-', 'bg-').replace('600', '700')} hover:opacity-90 shadow-md`}
          >
            <BookOpen size={18} className="mr-2" />
            View Syllabus Book
          </button>
        </div>
      </div>
    </div>
  );
};