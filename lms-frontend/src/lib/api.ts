export async function getCourses() {
  const res = await fetch('http://localhost:3000/api/courses', {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }

  return res.json();
}

export async function getCourseDetail(id: string) {
  const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch course with id ${id}`);
  }

  return res.json();
}
