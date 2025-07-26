import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/users">Users</Link></li>
      </ul>
    </nav>
  );
}
