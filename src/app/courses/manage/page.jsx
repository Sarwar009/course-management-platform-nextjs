import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ManageCourseTable from "@/app/components/layout/ManageCourseTable";

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

export default async function ManageCoursesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login?callbackUrl=/courses/manage'); 
  }

  const initialCourses = await getCourses();

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 lg:p-8 min-h-[70vh]">
        <h1 className="text-4xl font-bold mb-4">Manage All Courses</h1>
        <p className="mb-8 text-lg text-gray-600">Edit or delete existing course listings.</p>
        
        <ManageCourseTable initialCourses={initialCourses} />
        
      </main>
      <Footer />
    </>
  );
}