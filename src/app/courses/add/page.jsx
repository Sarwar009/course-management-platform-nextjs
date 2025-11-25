import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import CourseForm from "@/app/components/forms/CourseForm";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export default async function AddCoursePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login?callbackUrl=/courses/add'); 
  }
  
  

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 lg:p-8 min-h-[70vh]">
        <h1 className="text-4xl font-bold mb-4">Add New Course</h1>
        <p className="mb-8 text-lg text-gray-600">Enter the details for a new digital course.</p>
        
        <CourseForm />
        
      </main>
      <Footer />
    </>
  );
}