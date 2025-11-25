import Link from 'next/link';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Mock data for Features
const features = [
    { title: "Expert Instructors", icon: "👨‍🏫", desc: "Learn from industry professionals with real-world experience." },
    { title: "Lifetime Access", icon: "⏳", desc: "Revisit lessons anytime, anywhere, on any device." },
    { title: "Hands-on Projects", icon: "💻", desc: "Apply knowledge immediately with practical coding challenges." },
    { title: "Certification", icon: "🏅", desc: "Earn verified certificates upon successful course completion." },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <section className="hero min-h-[70vh] bg-base-200">
          <div className="hero-content text-center py-20">
            <div className="max-w-4xl">
              <h1 className="text-6xl font-extrabold text-primary mb-4">
                Master Modern Web Development
              </h1>
              <p className="py-6 text-xl text-gray-700">
                Unlock your potential with expert-led courses on Next.js, React, and Full-Stack development. Start building production-ready apps today!
              </p>
              <Link href="/courses" className="btn btn-lg btn-primary shadow-lg hover:shadow-xl transition-shadow">
                Explore All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Courses?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card bg-base-100 shadow-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:border-primary border-2 border-transparent">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 3. Call to Action Banner */}
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Launch Your Career?</h2>
                <p className="text-xl mb-6">Join thousands of successful developers who started here.</p>
                <Link href="/login" className="btn btn-lg btn-secondary text-primary font-bold shadow-xl">
                    Get Started Now
                </Link>
            </div>
        </section>

        {/* 4. Testimonials */}
        <section className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial Card 1 */}
                    <div className="card bg-base-100 p-6 shadow-lg">
                        <p className="italic mb-4">The Next.js course was a game-changer. My productivity tripled!</p>
                        <div className="font-semibold text-right">- Sarah C. (Senior Developer)</div>
                    </div>
                    {/* Testimonial Card 2 */}
                    <div className="card bg-base-100 p-6 shadow-lg">
                        <p className="italic mb-4">Clear, concise, and straight to the point. Highly recommend for beginners.</p>
                        <div className="font-semibold text-right">- Karim H. (Junior Dev)</div>
                    </div>
                    {/* Testimonial Card 3 */}
                    <div className="card bg-base-100 p-6 shadow-lg">
                        <p className="italic mb-4">Finally, a Tailwind course that explains the logic behind the utility classes.</p>
                        <div className="font-semibold text-right">- John P. (Freelancer)</div>
                    </div>
                </div>
            </div>
        </section>

        {/* 5. Contact Section */}
         <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg mb-8">Have questions? We are here to help.</p>
                <div className="flex justify-center">
                    <button className="btn btn-lg btn-outline btn-primary">
                        Send us an Email
                    </button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
