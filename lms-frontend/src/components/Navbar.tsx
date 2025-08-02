'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <div className="text-xl font-bold">Mini LMS</div>
      <div className="flex gap-4">
        <Link href="/courses" className="text-blue-600 hover:underline">Courses</Link>
      </div>
    </nav>
  );
}
