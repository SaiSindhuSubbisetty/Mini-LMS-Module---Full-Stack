'use client';
import { useState } from 'react';

const lessons = [
  { id: 1, title: 'Intro to Java', type: 'TEXT', content: 'Java is an OOP language.' },
  { id: 2, title: 'Variables', type: 'VIDEO', content: 'https://www.youtube.com/embed/BJeQ8Y3aHjQ' }
];

export default function LessonView({ params }: { params: { id: string } }) {
  const lesson = lessons.find(l => l.id === parseInt(params.id));
  const [completed, setCompleted] = useState(false);

  if (!lesson) return <div>Lesson not found</div>;

  const renderContent = () => {
    switch (lesson.type) {
      case 'TEXT': return <p>{lesson.content}</p>;
      case 'IMAGE': return <img src={lesson.content} alt={lesson.title} />;
      case 'VIDEO': return (
        <iframe
          className="w-full aspect-video"
          src={lesson.content}
          allowFullScreen
        />
      );
    }
  };

  const markComplete = () => {
    // Fake API call
    setCompleted(true);
    alert('Marked as complete');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{lesson.title}</h1>
      <div className="mb-4">{renderContent()}</div>
      <button
        onClick={markComplete}
        className={`px-4 py-2 rounded ${completed ? 'bg-green-600' : 'bg-blue-600'} text-white`}
      >
        {completed ? '✅ Completed' : 'Mark as Complete'}
      </button>
    </div>
  );
}
