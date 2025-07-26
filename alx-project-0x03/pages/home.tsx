import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

export default function HomePage() {
  const [posts, setPosts] = useState([{ title: 'Hello World', content: 'This is a card.' }]);

  const addPost = (title: string, content: string) => {
    setPosts(prev => [...prev, { title, content }]);
  };

  return (
    <>
      <Header />
      <div className="p-4">
        <PostModal onAdd={addPost} />
        {posts.map((post, i) => (
          <Card key={i} title={post.title} content={post.content} />
        ))}
      </div>
    </>
  );
}
