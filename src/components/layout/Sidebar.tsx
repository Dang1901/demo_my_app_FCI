import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  ShoppingCart as ShoppingCartIcon,
  Lock as LockIcon,
  PersonAdd as PersonAddIcon,
  Category as CategoryIcon,
  School as SchoolIcon,
  Article as ArticleIcon,
  Games as GamesIcon,
  ToggleOn as ToggleOnIcon
} from '@mui/icons-material';
import WebhookIcon from '@mui/icons-material/Webhook';

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
      case 'SignUp':
        navigate('/signup');
        break;
      case 'Product':
        navigate('/product');
        break;
      case 'Photo':
        navigate('/photos');
        break;
      case 'Post':
        navigate('/posts');
        break;
      case 'TicTacToe':
        navigate('/tictactoe');
        break;
      case 'Hook':
        navigate('/hooks');
        break;
      default:
        navigate('/');
    }
  };

  const getIconByIndex = (index: number) => {
    switch (index) {
      case 0:
        return <HomeIcon />; // Home
      case 1:
        return <WebhookIcon />; 
      case 2:
        return <ShoppingCartIcon />; // Checkout
      // case 3:
      //   return <LockIcon />; // Auth
      // case 4:
      //   return <PersonAddIcon />; // SignUp
      // case 5:
      //   return <CategoryIcon />; // Product
      // case 6:
      //   return <SchoolIcon />; // Student
      // case 7:
      //   return <ArticleIcon />; // Post
      // case 8:
      //   return <GamesIcon />; // TicTacToe
      // case 9:
      //   return <ToggleOnIcon />; // UseState
      // case 10:
      //   return <WebhookIcon />; // Hook
      default:
        return null; // Fallback icon
    }
  };
 

  return (  
    <List>
      {['Home', 'Hook', 'About', ].map((text, index) => (
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
