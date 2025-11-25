'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      const callbackUrl = new URLSearchParams(window.location.search).get('callbackUrl') || '/';
      router.push(callbackUrl);
    }
  }, [status, router]);

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError('Login Failed: Invalid email or password.');
    } 
    setLoading(false);
  };

  if (status === 'loading') {
    return (
      <>
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200 py-10">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleCredentialsLogin} className="card-body">
          <h2 className="card-title text-3xl mb-4 font-bold text-center justify-center">Sign In</h2>

          <button 
            type="button" 
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="btn btn-primary btn-outline mb-4"
          >
            Sign in with Google
          </button>

          <div className="divider text-sm">OR USE EMAIL</div>

          {error && (
            <div role="alert" className="alert alert-error text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}

          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input 
              type="email" 
              placeholder="admin@example.com or user@example.com" 
              className="input input-bordered" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input 
              type="password" 
              placeholder="password" 
              className="input input-bordered" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
             <label className="label">
                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
             </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}