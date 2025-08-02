import Link from "next/link";

export default function CourseCard({ course }: { course: any }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="p-4 border rounded shadow hover:bg-gray-50">
        <h2 className="font-bold text-lg">{course.title}</h2>
        <p>{course.description}</p>
      </div>
    </Link>
  );
}
