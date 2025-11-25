import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CourseList from '../components/layout/CourseList';


async function getCourses() {
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    try {
        const res = await fetch(`${BACKEND_URL}/api/courses`, { 
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch courses: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error("Fetch Error:", error.message);
        return []; 
    }
}

export default async function CourseListPage() {
  const courses = await getCourses(); 

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 lg:p-8 min-h-[70vh]">
        <h1 className="text-5xl font-extrabold mb-2">Our Digital Course Catalog</h1>
        <p className="text-lg text-gray-600 mb-8">
          Browse through our curated collection of expert-led courses on modern development technologies.
        </p>
        <CourseList initialCourses={courses} /> 
        
      </main>
      <Footer />
    </>
  );
}