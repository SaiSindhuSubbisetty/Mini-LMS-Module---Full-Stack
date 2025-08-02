import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      {items.map((item, idx) => (
        <span key={idx}>
          <Link href={item.href} className="hover:underline text-blue-600">{item.label}</Link>
          {idx < items.length - 1 && <span className="mx-1 text-gray-400">&gt;</span>}
        </span>
      ))}
    </nav>
  );
}
