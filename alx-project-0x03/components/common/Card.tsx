import { type CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
