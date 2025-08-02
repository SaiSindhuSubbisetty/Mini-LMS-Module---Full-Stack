'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full shadow-md bg-white px-8 pt-6 pb-4">
      <div className="flex justify-between items-center">
        {/* Top Right: Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/courses" className="py-2 px-3 text-teal-500 border-b-2 border-teal-300 font-semibold">
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
}
