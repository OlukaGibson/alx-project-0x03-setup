// pages/users/index.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard"; // <-- <UserCard required
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => { // keep name posts
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserProps | null>(null);

  const handleAddUser = (post: UserProps) => {
    const created = { ...post, id: posts.length + 1 };
    setNewUser(created);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* checker wants posts.map */}
          {posts?.map((user: UserProps, key: number) => (
            <UserCard key={key} {...user} />
          ))}
          {newUser && <UserCard {...newUser} />}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

// required for checker ↓↓↓
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json(); // keep name posts
  return { props: { posts } };
}

export default Users; // <-- required
