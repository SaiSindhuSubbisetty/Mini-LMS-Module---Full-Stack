import Link from "next/link";

export default function ModuleCard({ module }: { module: any }) {
  return (
    <Link href={`/modules/${module.id}`}>
      <div className="p-4 border rounded hover:bg-gray-100">
        <h3 className="font-semibold">{module.title}</h3>
        <p className="text-sm">{module.summary}</p>
      </div>
    </Link>
  );
}
