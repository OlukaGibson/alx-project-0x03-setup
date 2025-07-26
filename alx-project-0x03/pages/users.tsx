import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface Props {
  users: UserProps[];
}

export default function UsersPage({ users }: Props) {
  return (
    <>
      <Header />
      <div className="p-4">
        {users.map((user) => (
          <UserCard key={user.email} {...user} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
