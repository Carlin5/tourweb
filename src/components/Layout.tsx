import React from 'react';
import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';

// Floating WhatsApp button styles
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const FloatingButton = styled('a')(({ theme }) => ({
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#25D366',
  color: 'white',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  zIndex: 1000,
  cursor: 'pointer',
  animation: `${float} 3s ease-in-out infinite`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#128C7E',
    transform: 'scale(1.1)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  },
  '& svg': {
    fontSize: '32px',
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const whatsappNumber = '+256750061926';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Wise%20Tours%2C%20I%27m%20interested%20in%20booking%20a%20tour.`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {children}
      <FloatingButton 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </FloatingButton>
    </Box>
  );
};

export default Layout;
