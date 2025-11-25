'use client';
import { useState, useMemo } from 'react';
import CourseCard from '../ui/CourseCard';

const categories = ['Next.js', 'React', 'Full-Stack', 'UI/UX', 'Node.js', 'Database'];

export default function CourseList({ initialCourses }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = useMemo(() => {
    let currentCourses = initialCourses;

    if (selectedCategory !== 'All') {
      
      currentCourses = currentCourses.filter(course => 
        course.priority && course.priority.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      currentCourses = currentCourses.filter(course => 
        course.title.toLowerCase().includes(lowerCaseSearch) ||
        (course.short_desc && course.short_desc.toLowerCase().includes(lowerCaseSearch)) ||
        (course.full_desc && course.full_desc.toLowerCase().includes(lowerCaseSearch))
      );
    }

    return currentCourses;
  }, [initialCourses, searchTerm, selectedCategory]);



  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input 
              type="text" 
              placeholder="Search by title or description..." 
              className="input input-bordered w-full md:flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <select 
            className="select select-bordered w-full md:w-52"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)} 
          >
              <option value="All">Filter by Category (All)</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
          </select>
      </div>

     
      {initialCourses.length === 0 ? (
          <div className="alert alert-warning">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.332 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>No courses found. Please ensure the Express backend is running.</span>
          </div>
      ) : filteredCourses.length === 0 ? (
        <div className="alert alert-info">
            <span>No results found for the current search and filter criteria.</span>
        </div>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                  <CourseCard key={course._id} course={course} />
              ))}
          </div>
      )}
    </>
  );
}