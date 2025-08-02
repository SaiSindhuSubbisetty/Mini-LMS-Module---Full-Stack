export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const courses = [
    { id: 1, title: 'Intro to Java Script', description: 'Basics of JavaScript' },
    { id: 2, title: 'Next.js 14', description: 'Using App Router and more' },
  ];

  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return new Response("Course not found", { status: 404 });
  }
  return Response.json(course);
}


const courseData = {
  "1": { id: "1", title: "React Basics", description: "Learn the fundamentals of React." },
  "2": { id: "2", title: "Next.js Essentials", description: "Build apps using Next.js 14/15." },
};
