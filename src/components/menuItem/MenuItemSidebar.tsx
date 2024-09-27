import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const MenuItemSidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (text: string) => {
    switch (text) {
      case 'Home':
        navigate('/home');
        break;
      case 'About':
        navigate('/about');
        break;
      case 'Checkout':
        navigate('/checkout');
        break;
      case 'Auth':
        navigate('/authentication');
        break;
      case 'Product':
        navigate('/product');
        break;
      default:
        navigate('/');
    }
  };

  const getIconByIndex = (index: number) => {
    switch (index) {
      case 0:
        return <HomeIcon />; 
      case 1:
        return <InfoIcon />; 
      case 2:
        return <InfoIcon />; 
      case 3:
        return <InfoIcon />; 
      case 4:
        return <InfoIcon />; 
      default:
        return ; 
    }
  };
 

  return (  
    <List>
      {['Home', 'About', 'Checkout', 'Auth', 'Product'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => handleNavigation(text)}>
            <ListItemIcon>
              { getIconByIndex(index)} 
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuItemSidebar;
