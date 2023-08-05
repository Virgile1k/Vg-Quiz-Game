import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface ProfileIconProps {
  onClick: () => void; 
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <AccountCircleIcon />
    </IconButton>
  );
};

export default ProfileIcon;