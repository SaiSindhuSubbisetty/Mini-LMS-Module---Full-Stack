import './globals.css';
import NavBar from '../components/Navbar';

export const metadata = { title: 'Mini LMS', description: 'A simple LMS' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
