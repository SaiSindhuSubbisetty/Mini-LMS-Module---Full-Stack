import Link from "next/link";

export default function LessonCard({ lesson }: { lesson: any }) {
  return (
    <Link href={`/lessons/${lesson.id}`}>
      <div className="p-4 border rounded hover:bg-gray-100 flex justify-between">
        <span>{lesson.title}</span>
        {lesson.completed && <span className="text-green-600">✅</span>}
      </div>
    </Link>
  );
}
