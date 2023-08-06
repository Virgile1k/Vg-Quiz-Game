import React from 'react';

interface ProfileMenuProps {
  onClose?: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ onClose }) => {
  return (
    <div className="absolute top-16 right-4 bg-white rounded-lg shadow p-4 bg-image">
      <h4 className="font-bold mb-2 text-pink-50">Profile</h4>

      <ul>
        <li className="py-2 text-pink-50 hover:text-blue-600">Leaderboard</li>
        <li className="py-2 text-pink-50 hover:text-blue-600">Settings</li>
        <li className="py-2 text-pink-50 hover:text-blue-600">Logout</li>
      </ul>

      {onClose && (
        <button className="absolute top-0 right-0 p-2 text-pink-50" onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};

export default ProfileMenu;
