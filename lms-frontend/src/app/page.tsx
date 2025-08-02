import Link from 'next/link';

const courses = [
  {
    id: 'intro-to-js',
    title: 'Intro to Java Script',
    description: 'Basics of JavaScript',
  },
  {
    id: 'nextjs-14',
    title: 'Next.js 14',
    description: 'Using App Router and more',
  },
];

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link
              href={`/courses/${course.id}`}
              className="text-blue-600 hover:underline"
            >
              View Course →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
