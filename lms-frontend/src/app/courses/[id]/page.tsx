const modules = [
  { id: 1, title: 'Module 1', courseId: 1 },
  { id: 2, title: 'Module 2', courseId: 1 }
];

export default function CourseDetail({ params }: { params: { id: string } }) {
  const courseModules = modules.filter(m => m.courseId === parseInt(params.id));

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Course #{params.id}</h1>
      <ul className="space-y-4">
        {courseModules.map(mod => (
          <li key={mod.id}>
            <a href={`/modules/${mod.id}`} className="text-blue-600 hover:underline">
              {mod.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
