import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <header className="footer-title">Services</header>
        <Link href="/courses" className="link link-hover">Course Catalog</Link>
        <Link href="/courses/add" className="link link-hover">Add Course</Link>
        <a className="link link-hover">Affiliate Program</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        
        <div className="grid grid-flow-col gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.162-2.722-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.058 1.002.167 1.477-5.399-.27-10.169-2.868-13.385-6.843-.561.961-.88 2.07-.88 3.251 0 2.253 1.144 4.248 2.89 5.424-1.066-.034-2.078-.329-2.953-.814.004.023.004.047.004.072 0 3.159 2.22 5.8 5.148 6.398-.542.147-1.113.214-1.702.214-.417 0-.82-.04-1.211-.118 1.488 4.092 5.79 7.03 10.957 7.153-2.193 1.71-4.965 2.728-7.955 2.728-.517 0-1.026-.037-1.53-.1.659 1.838 2.313 3.167 4.298 3.167 6.307 0 10.999-5.392 10.999-10.151 0-.154-.004-.309-.01-.462.77-.557 1.432-1.233 1.967-2.025z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.444-6.401-.444-6.401-.444s-2.798 0-6.401.444c-2.007.247-2.808 1.127-3.056 3.139-.444 3.603-.444 11.407-.444 11.407s0 7.804.444 11.407c.247 2.012 1.049 2.892 3.056 3.139 3.603.444 6.401.444 6.401.444s2.798 0 6.401-.444c2.007-.247 2.808-1.127 3.056-3.139.444-3.603.444-11.407.444-11.407s0-7.804-.444-11.407c-.247-2.012-1.049-2.892-3.056-3.139zm-11.157 9.294l6.095-3.051-6.095 3.051z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 19c-4.286 0-7.77-3.484-7.77-7.77s3.484-7.77 7.77-7.77 7.77 3.484 7.77 7.77-3.484 7.77-7.77 7.77zm11.385-4.522c1.472-1.5 2.385-3.526 2.385-5.748 0-4.664-3.72-8.435-8.385-8.435-2.067 0-3.951.748-5.437 1.984l-4.532-4.532c-1.396 1.4-2.28 3.32-2.28 5.456 0 5.488 4.475 9.963 9.963 9.963 1.97 0 3.82-.572 5.397-1.583z"/></svg>
        </div>
      </nav>
    </footer>
  );
}