const courses = [
  { id: 1, title: 'Java Basics', description: 'Intro to Java' },
  { id: 2, title: 'Web Dev', description: 'HTML/CSS/JS Bootcamp' }
];

export default function CoursesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Courses</h1>
      <ul className="space-y-4">
        {courses.map(course => (
          <li key={course.id} className="border p-4 rounded hover:bg-gray-50">
            <a href={`/courses/${course.id}`} className="text-xl text-blue-600 hover:underline">
              {course.title}
            </a>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
