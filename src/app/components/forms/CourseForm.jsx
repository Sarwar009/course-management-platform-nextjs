'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CourseForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    short_desc: '',
    full_desc: '',
    price: '',
    priority: 'Medium',
    image_url: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);
    
    if (!formData.title || !formData.price) {
        setError("Title and Price are required.");
        setLoading(false);
        return;
    }

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
      const res = await fetch(`${BACKEND_URL}/api/courses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Failed to add course: ${res.statusText}`);
      }

      const newCourse = await res.json();
      setSuccess(true);
      setFormData({
        title: '', short_desc: '', full_desc: '', price: '', priority: 'Medium', image_url: '',
      });
      console.log('Course Added:', newCourse);
      
      setTimeout(() => router.push(`/courses/${newCourse._id}`), 2000); 

    } catch (err) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-base-100 shadow-xl rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="form-control col-span-full">
          <label className="label"><span className="label-text">Course Title *</span></label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="input input-bordered" required />
        </div>

        <div className="form-control col-span-full">
          <label className="label"><span className="label-text">Short Description (1-2 lines)</span></label>
          <input type="text" name="short_desc" value={formData.short_desc} onChange={handleChange} className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Price ($) *</span></label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Priority/Category</span></label>
          <select name="priority" value={formData.priority} onChange={handleChange} className="select select-bordered">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="form-control col-span-full">
          <label className="label"><span className="label-text">Image URL (Optional)</span></label>
          <input type="url" name="image_url" value={formData.image_url} onChange={handleChange} className="input input-bordered" />
        </div>
        
        <div className="form-control col-span-full">
          <label className="label"><span className="label-text">Full Description</span></label>
          <textarea name="full_desc" value={formData.full_desc} onChange={handleChange} className="textarea textarea-bordered h-32"></textarea>
        </div>
      </div>

      {error && (
        <div role="alert" className="alert alert-error mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Error: {error}</span>
        </div>
      )}
      {success && (
        <div role="alert" className="alert alert-success mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Course added successfully! Redirecting...</span>
        </div>
      )}

      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? <span className="loading loading-spinner"></span> : 'Submit Course'}
        </button>
      </div>
    </form>
  );
}