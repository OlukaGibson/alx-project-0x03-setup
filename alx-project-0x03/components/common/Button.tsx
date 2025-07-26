import { type ButtonProps } from '@/interfaces';

export default function Button({ size, shape, children, onClick }: ButtonProps) {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} ${shape} bg-blue-600 text-white hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
}
