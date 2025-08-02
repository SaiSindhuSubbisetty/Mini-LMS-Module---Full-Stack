import './globals.css';
import NavBar from '../components/Navbar';

export const metadata = { title: 'Mini LMS', description: 'A simple LMS' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mini LMS</title>
        <meta name="description" content="A simple LMS" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <NavBar />
        <header className="bg-white shadow p-4 mb-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-600">Mini LMS</h1>
            <p className="text-sm text-gray-600">A simple LMS</p>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
