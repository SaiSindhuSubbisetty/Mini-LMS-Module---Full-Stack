export const lessons = [
  // Module 1
  { id: 1, title: 'Intro & Setup', moduleId: 1 },
  { id: 2, title: 'Java Syntax', moduleId: 1 },
  { id: 3, title: 'Hello World', moduleId: 1 },
  { id: 4, title: 'Variables & Types', moduleId: 1 },

  // Module 2
  { id: 5, title: 'Classes & Objects', moduleId: 2 },
  { id: 6, title: 'Inheritance', moduleId: 2 },
  { id: 7, title: 'Polymorphism', moduleId: 2 },
  { id: 8, title: 'Abstraction & Interfaces', moduleId: 2 },

  // Module 3
  { id: 9, title: 'List & Set', moduleId: 3 },
  { id: 10, title: 'Map & HashMap', moduleId: 3 },
  { id: 11, title: 'Queue & Stack', moduleId: 3 },
  { id: 12, title: 'Generics', moduleId: 3 },

  // Module 4
  { id: 13, title: 'Try-Catch', moduleId: 4 },
  { id: 14, title: 'Throw vs Throws', moduleId: 4 },
  { id: 15, title: 'Custom Exceptions', moduleId: 4 },
  { id: 16, title: 'Best Practices', moduleId: 4 },

  // Module 5
  { id: 17, title: 'HTML Structure', moduleId: 5 },
  { id: 18, title: 'Forms & Inputs', moduleId: 5 },
  { id: 19, title: 'Tables & Lists', moduleId: 5 },
  { id: 20, title: 'Media Elements', moduleId: 5 },

  // Module 6
  { id: 21, title: 'CSS Selectors', moduleId: 6 },
  { id: 22, title: 'Box Model', moduleId: 6 },
  { id: 23, title: 'Flexbox & Grid', moduleId: 6 },
  { id: 24, title: 'Responsive Design', moduleId: 6 },

  // Module 7
  { id: 25, title: 'JS Syntax', moduleId: 7 },
  { id: 26, title: 'Variables & Scope', moduleId: 7 },
  { id: 27, title: 'Functions', moduleId: 7 },
  { id: 28, title: 'Events & Loops', moduleId: 7 },

  // Module 8
  { id: 29, title: 'DOM Intro', moduleId: 8 },
  { id: 30, title: 'Selectors & Events', moduleId: 8 },
  { id: 31, title: 'DOM Tree Navigation', moduleId: 8 },
  { id: 32, title: 'Dynamic Elements', moduleId: 8 },

  // Module 9
  { id: 33, title: 'Spring Boot Init', moduleId: 9 },
  { id: 34, title: 'Annotations', moduleId: 9 },
  { id: 35, title: 'Application Properties', moduleId: 9 },
  { id: 36, title: 'Controllers & Services', moduleId: 9 },

  // Module 10
  { id: 37, title: 'REST Basics', moduleId: 10 },
  { id: 38, title: 'CRUD APIs', moduleId: 10 },
  { id: 39, title: 'DTOs & Mapping', moduleId: 10 },
  { id: 40, title: 'API Testing', moduleId: 10 },

  // Module 11
  { id: 41, title: 'Security Setup', moduleId: 11 },
  { id: 42, title: 'JWT Auth', moduleId: 11 },
  { id: 43, title: 'Role-based Access', moduleId: 11 },
  { id: 44, title: 'Security Best Practices', moduleId: 11 },

  // Module 12
  { id: 45, title: 'JPA Basics', moduleId: 12 },
  { id: 46, title: 'Entity Relationships', moduleId: 12 },
  { id: 47, title: 'Repositories', moduleId: 12 },
  { id: 48, title: 'Query Methods', moduleId: 12 },

  // Module 13
  { id: 49, title: 'JSX & Components', moduleId: 13 },
  { id: 50, title: 'Props & State', moduleId: 13 },
  { id: 51, title: 'Component Lifecycle', moduleId: 13 },
  { id: 52, title: 'Functional Components', moduleId: 13 },

  // Module 14
  { id: 53, title: 'useState', moduleId: 14 },
  { id: 54, title: 'useEffect', moduleId: 14 },
  { id: 55, title: 'useRef & useMemo', moduleId: 14 },
  { id: 56, title: 'Custom Hooks', moduleId: 14 },

  // Module 15
  { id: 57, title: 'Context API', moduleId: 15 },
  { id: 58, title: 'Redux Intro', moduleId: 15 },
  { id: 59, title: 'Redux Toolkit', moduleId: 15 },
  { id: 60, title: 'Global State Mgmt', moduleId: 15 },

  // Module 16
  { id: 61, title: 'React Router', moduleId: 16 },
  { id: 62, title: 'Dynamic Routes', moduleId: 16 },
  { id: 63, title: 'Protected Routes', moduleId: 16 },
  { id: 64, title: 'Navigation & Layouts', moduleId: 16 },

  // Module 17
  { id: 65, title: 'Python Setup', moduleId: 17 },
  { id: 66, title: 'Print & Input', moduleId: 17 },
  { id: 67, title: 'Basic Syntax', moduleId: 17 },
  { id: 68, title: 'Simple Programs', moduleId: 17 },

  // Module 18
  { id: 69, title: 'Strings & Numbers', moduleId: 18 },
  { id: 70, title: 'Lists & Tuples', moduleId: 18 },
  { id: 71, title: 'Dictionaries', moduleId: 18 },
  { id: 72, title: 'Type Conversion', moduleId: 18 },

  // Module 19
  { id: 73, title: 'if-else', moduleId: 19 },
  { id: 74, title: 'while & for Loops', moduleId: 19 },
  { id: 75, title: 'break & continue', moduleId: 19 },
  { id: 76, title: 'List Comprehension', moduleId: 19 },

  // Module 20
  { id: 77, title: 'Defining Functions', moduleId: 20 },
  { id: 78, title: 'Arguments & Return', moduleId: 20 },
  { id: 79, title: 'Lambda & Map', moduleId: 20 },
  { id: 80, title: 'Recursion', moduleId: 20 },
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
