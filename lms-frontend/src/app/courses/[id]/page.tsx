'use client';

import { use } from 'react';
import lessons from '@/data/lessons'; // ✅ Make sure this file exists

const modules = [
  // Java Basics (courseId: 1)
  { id: 1, title: 'Java Syntax & Variables', courseId: 1 },
  { id: 2, title: 'Control Flow in Java', courseId: 1 },
  { id: 3, title: 'Object-Oriented Programming', courseId: 1 },
  { id: 4, title: 'Collections Framework', courseId: 1 },
  { id: 5, title: 'Exception Handling', courseId: 1 },

  // Web Dev (courseId: 2)
  { id: 6, title: 'HTML Fundamentals', courseId: 2 },
  { id: 7, title: 'CSS Basics', courseId: 2 },
  { id: 8, title: 'JavaScript Syntax & DOM', courseId: 2 },
  { id: 9, title: 'Responsive Design', courseId: 2 },
  { id: 10, title: 'Deploying Websites', courseId: 2 },

  // Spring Boot (courseId: 3)
  { id: 11, title: 'Spring Boot Intro', courseId: 3 },
  { id: 12, title: 'REST APIs with Spring Boot', courseId: 3 },
  { id: 13, title: 'Spring Data JPA', courseId: 3 },
  { id: 14, title: 'Security & JWT', courseId: 3 },
  { id: 15, title: 'Spring Boot Testing', courseId: 3 },

  // React JS (courseId: 4)
  { id: 16, title: 'JSX & Components', courseId: 4 },
  { id: 17, title: 'State & Props', courseId: 4 },
  { id: 18, title: 'React Hooks', courseId: 4 },
  { id: 19, title: 'React Router', courseId: 4 },
  { id: 20, title: 'Advanced Patterns', courseId: 4 },

  // Python (courseId: 5)
  { id: 21, title: 'Python Syntax', courseId: 5 },
  { id: 22, title: 'Data Structures in Python', courseId: 5 },
  { id: 23, title: 'Functions & Modules', courseId: 5 },
  { id: 24, title: 'File Handling', courseId: 5 },
  { id: 25, title: 'OOP in Python', courseId: 5 },
];

export default function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ unwrap the async params
  const courseId = parseInt(id);
  const courseModules = modules.filter(m => m.courseId === courseId);

  const getModuleProgress = (moduleId: number) => {
    const moduleLessons = lessons.filter(lesson => lesson.moduleId === moduleId);
    if (moduleLessons.length === 0) return 0;

    const completed = moduleLessons.filter(l => l.completed).length;
    return Math.round((completed / moduleLessons.length) * 100);
  };

  const courseProgress = courseModules.length
    ? Math.round(
        courseModules
          .map(m => getModuleProgress(m.id))
          .reduce((acc, val) => acc + val, 0) / courseModules.length
      )
    : 0;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-2">Course #{courseId}</h1>
      <p className="mb-4 text-green-700 font-medium">Progress: {courseProgress}% completed</p>

      <ul className="space-y-4">
        {courseModules.map(mod => (
          <li key={mod.id} className="border rounded p-4 hover:bg-gray-50">
            <a href={`/modules/${mod.id}`} className="text-blue-600 hover:underline text-lg font-medium">
              {mod.title}
            </a>
            <p className="text-sm text-gray-600">Module Progress: {getModuleProgress(mod.id)}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
