// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full bg-gray-100 text-gray-600 py-6 border-t">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="mb-2">Built for the ALX Project 0x01 setup.</p>
        <p>
          <Link href="/posts" className="underline hover:text-blue-600 mr-4">
            Posts
          </Link>
          <Link href="/users" className="underline hover:text-blue-600">
            Users
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
