import Image from 'next/image';
import Link from 'next/link';

export default function CourseCard({ course }) {
  const { _id, title, short_desc, price } = course;
  
  const image_url = course.image_url || 'https://picsum.photos/400/225'; 

  return (
    <div className="card w-full bg-base-100 shadow-xl image-full group transition-transform duration-300 hover:scale-[1.03] focus-within:scale-[1.03]">
      <figure><img src={image_url} alt={title} className="w-full h-full object-cover" /></figure>
      <div className="card-body p-6 relative">
        <div className="absolute inset-0 bg-black opacity-60 rounded-xl group-hover:opacity-70 transition-opacity"></div>
        <div className="relative z-10 text-white flex flex-col justify-between h-full">
          <h2 className="card-title text-2xl mb-2 line-clamp-2">{title}</h2>
          <p className="line-clamp-2 text-sm opacity-90 mb-4">{short_desc}</p>
          
          <div className="mt-auto">
            <div className="badge badge-lg badge-success text-white font-bold mb-3">${price}</div>
            <div className="card-actions justify-end">
              <Link href={`/courses/${_id}`} className="btn btn-primary btn-sm">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}