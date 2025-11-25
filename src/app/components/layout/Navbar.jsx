'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import AuthDropdown from './AuthDropdown';

const routes = [
    { name: 'Home', path: '/' },
    { name: 'All Courses', path: '/courses' },
    { name: 'Features', path: '/#features' },
    { name: 'Contact', path: '/#contact' },
];

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {routes.map(route => (
              <li key={route.name}><Link href={route.path}>{route.name}</Link></li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          <span className="text-2xl">📚</span> CourseHub
        </Link>
      </div>

     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map(route => (
            <li key={route.name}><Link href={route.path}>{route.name}</Link></li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {status === 'loading' ? (
          <span className="loading loading-spinner"></span>
        ) : session ? (
          <AuthDropdown />
        ) : (
          <>
            <Link href="/login" className="btn btn-sm btn-ghost mr-2 hidden sm:inline-flex">Login</Link>
            <button 
              onClick={() => signIn('google')} 
              className="btn btn-sm btn-primary"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}