// src/lib/api.ts
export const getCourses = async () =>
fetch("/api/courses").then((res) => res.json());

export const getCourseDetail = async (id: string) =>
  fetch(`/api/courses/${id}`).then((res) => res.json()); // optional if needed

export async function GET() {
  return Response.json([
    { id: "1", title: "React Basics", description: "Learn the fundamentals of React." },
    { id: "2", title: "Next.js Essentials", description: "Build apps using Next.js 14/15." },
  ]);
}
