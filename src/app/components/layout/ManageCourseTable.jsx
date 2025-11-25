'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ManageCourseTable({ initialCourses }) {
  const [courses, setCourses] = useState(initialCourses);
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) {
        return;
    }

    setDeletingId(id);
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
      const res = await fetch(`${BACKEND_URL}/api/courses/${id}`, {
        method: 'DELETE',
        headers: {
        },
      });

      if (res.status === 204) {
        setCourses(prevCourses => prevCourses.filter(course => course._id !== id));
        alert(`Course ${id} deleted successfully!`);
      } else if (res.status === 404) {
        alert("Deletion failed: Course not found.");
      } else {
        throw new Error(`Deletion failed with status: ${res.status}`);
      }

    } catch (error) {
      console.error("Deletion error:", error);
      alert("An error occurred during deletion.");
    } finally {
      setDeletingId(null);
    }
  };

  if (courses.length === 0) {
    return (
        <div role="alert" className="alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>No courses found in the database. Add one now!</span>
            <Link href="/courses/add" className="btn btn-sm btn-primary">Add Course</Link>
        </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-base-100 shadow-xl rounded-lg">
      <table className="table w-full">
        <thead className="bg-base-200">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Priority</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td className="text-xs text-gray-500">{course._id.slice(-4)}</td>
              <td>{course.title}</td>
              <td>${course.price}</td>
              <td><span className={`badge ${course.priority === 'High' ? 'badge-error' : course.priority === 'Medium' ? 'badge-warning' : 'badge-info'}`}>{course.priority}</span></td>
              <td className="flex justify-center gap-2">
                <Link href={`/courses/${course._id}`} className="btn btn-sm btn-info btn-outline">View</Link>
                <button 
                  onClick={() => handleDelete(course._id)} 
                  className="btn btn-sm btn-error"
                  disabled={deletingId === course._id}
                >
                  {deletingId === course._id ? <span className="loading loading-spinner"></span> : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}