import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100" style={{ borderTop: '5px solid var(--secondary-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* First Row: Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-6 border-b border-gray-300">
          {/* Column 1: Logo and text */}
          <div>
            <img src="/images/aura-safaris.webp" alt="Aura Logo" className="h-10 mb-3" />
            <p className="text-sm text-gray-700 font-secondary">Explore the untamed beauty of Uganda, Kenya, Tanzania, and Rwanda with Aura Safaris.</p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-primary font-primary">Adventures</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-secondary font-secondary">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary font-secondary">About</Link></li>
              <li><Link href="/contact" className="hover:text-secondary font-secondary">Contact</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-primary font-primary">About</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-secondary font-secondary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary font-secondary">Terms of Service</Link></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-primary font-primary">Contact Us</h3>
            <p className="text-sm text-gray-700 font-secondary">info@aura.com<br />+123 456 7890</p>
          </div>
        </div>
        {/* Second Row: Copyright & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6">
          <p className="text-sm text-gray-600 font-secondary">© {new Date().getFullYear()} Aura. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Icons */}
            <a href="#" aria-label="Facebook" className="text-primary hover:text-secondary transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-primary hover:text-secondary transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-primary hover:text-secondary transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C19.45.425 18.277.131 17 .072 15.721.013 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 