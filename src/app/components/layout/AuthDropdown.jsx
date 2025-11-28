'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function AuthDropdown() {
  const { data: session } = useSession();

  if (!session) return null;

  const userEmail = session.user.email || 'User email';
  

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <span className="flex items-center justify-center h-full text-lg bg-primary text-white">
            {userEmail.slice(0, 1).toUpperCase()}
          </span>
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="font-bold">{session.user.name || userEmail}</a>
          {/* <span className="text-xs text-info ml-4">({session.user.role || 'user email'})</span> */}
        </li>
        <div className="divider my-0"></div>
        <li><Link href="/courses/add">Add Product (Course)</Link></li>
        <li><Link href="/courses/manage">Manage Products</Link></li>
        <div className="divider my-0"></div>
        <li>
          <button onClick={() => signOut()}>Logout</button>
        </li>
      </ul>
    </div>
  );
}