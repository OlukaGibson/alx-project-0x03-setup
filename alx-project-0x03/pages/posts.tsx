import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface Props {
  posts: PostProps[];
}

export default function PostsPage({ posts }: Props) {
  return (
    <>
      <Header />
      <div className="p-4">
        {posts.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
