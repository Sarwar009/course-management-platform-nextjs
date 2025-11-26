import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Link from 'next/link';

async function getCourseDetails(id) {
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    
    try {
        const res = await fetch(`${BACKEND_URL}/api/courses/${id}`, { 
            cache: 'no-store' 
            
        });
        if (res.status === 404) return null;
        if (!res.ok) {
            throw new Error(`Failed to fetch course ${id}`);
        }
        return res.json();
    } catch (err) {
        console.error("Fetch Error:", err.message);
        return null;
    }
}

export default async function CourseDetailsPage({ params }) {
//   const course = await getCourseDetails(params.id);

    const id = (await params)?.id;
  const course = await getCourseDetails(id);

  if (!course) {
    return (
        <>
            <Navbar />
            <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold text-error mb-4">404 - Course Not Found</h1>
                <p className="text-lg">The course you are looking for does not exist.</p>
                <Link href="/courses" className="btn btn-primary mt-6">Back to All Courses</Link>
            </div>
            <Footer />
        </>
    );
  }

  let priorityColor = 'badge-neutral';
  if (course.priority === 'High') priorityColor = 'badge-error';
  if (course.priority === 'Medium') priorityColor = 'badge-warning';

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 lg:p-8 min-h-[70vh]">
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="lg:w-1/2">
                <img
                    src={course.image_url || "https://picsum.photos/800/600"} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body lg:w-1/2 p-8">
                <Link href="/courses" className="btn btn-sm btn-ghost self-start mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Catalog
                </Link>

                <h1 className="card-title text-4xl font-bold mb-4">{course.title}</h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="badge badge-lg badge-success text-white font-bold text-xl p-4">${course.price}</div>
                    <div className="badge badge-lg badge-outline text-gray-700 p-4">Duration: 40 hrs</div>
                    <div className={`badge badge-lg ${priorityColor} text-white font-bold p-4`}>Priority: {course.priority || 'N/A'}</div>
                </div>

                <h2 className="text-2xl font-semibold mt-4 mb-2">Course Overview</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {course.full_desc || course.short_desc || 'No detailed description available.'}
                </p>

                <div className="card-actions justify-end mt-8">
                    <button className="btn btn-primary btn-lg">Enroll Now</button>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}