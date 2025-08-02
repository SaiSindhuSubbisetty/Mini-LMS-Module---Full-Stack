const lessons = [
  { id: 1, title: 'Intro to Java', moduleId: 1 },
  { id: 2, title: 'Variables', moduleId: 1 }
];

export default function ModuleDetail({ params }: { params: { id: string } }) {
  const moduleLessons = lessons.filter(l => l.moduleId === parseInt(params.id));

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Module #{params.id}</h1>
      <ul className="space-y-2">
        {moduleLessons.map(lesson => (
          <li key={lesson.id}>
            <a href={`/lessons/${lesson.id}`} className="text-blue-600 hover:underline">
              {lesson.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
