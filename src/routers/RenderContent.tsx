// DemoPageContent.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginForm from '../components/Form/LoginForm';

interface DemoPageContentProps {
  pathname: string;
}

const PageContent: React.FC<DemoPageContentProps> = ({ pathname }) => {
  if (pathname === '/login') {
    return <LoginForm />;
  }

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <LoginForm/>
    </Box>
  );
};

export default PageContent;
