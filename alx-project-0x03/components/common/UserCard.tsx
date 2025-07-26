// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces"; // <-- required substring

const UserCard: React.FC<UserProps> = ({  // <-- <UserProps> required
  name,
  email,
  username,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-gray-600 text-sm mb-2">@{username}</p>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700 mb-1">Phone: {phone}</p>
      <p className="text-gray-700 mb-3">Website: {website}</p>
      <div className="text-sm text-gray-500">
        <p>Company: {company?.name}</p>
        <p>
          Address: {address?.street}, {address?.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
