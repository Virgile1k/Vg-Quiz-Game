import React from 'react';

interface ProfileIconProps {
  imgSrc?: string;
  onClick: () => void; 
}

const ProfileIcon: React.FC<ProfileIconProps> = ({
  imgSrc,
  onClick  
}) => {
  return (
    <img 
      src={imgSrc || 'profile.png'}
      className="w-10 h-10 rounded-full"
      onClick={onClick}
      alt="Profile"
    />
  );
}

export default ProfileIcon;