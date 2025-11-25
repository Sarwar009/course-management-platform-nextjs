import AuthProvider from '@/provider/Authprovider';
import './globals.css';

export const metadata = {
  title: 'Course Management Platform',
  description: 'A Next.js 14 App Router example with NextAuth.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}