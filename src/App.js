import React from 'react';
import { Container, Box, Typography, Button, Link, useMediaQuery, Fab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import almalogo from './almalogo.jpg';
import fondo from './fondo.png'
import { FaInstagram } from 'react-icons/fa';
function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjusts for mobile screens
  const instagramUrl = 'https://www.instagram.com/almas.tarot/'; // Replace with your Instagram URL

  const handleRedirect = () => {
    window.open(instagramUrl, '_blank'); // Opens Instagram in a new tab
  };
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fbe7e8',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        padding: isMobile ? '10px' : '20px',
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={almalogo} // Replace with your logo image URL
        alt="Almas Logo"
        sx={{
          width: isMobile ? 150 : 100,
          height: isMobile ? 150 : 100,
          borderRadius: '50%',
          marginBottom: 2,
        }}
      />

      {/* Instagram Handle */}
      <Link
        href="https://www.instagram.com/almas.tarot/"
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
      >
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{
            fontWeight: 'bold',
            fontSize: isMobile ? '1rem' : '1.25rem',
            marginBottom: 2
          }}
        >
          @almas.tarot
        </Typography>
      </Link>

      {/* Links */}
      <Button
        href="/lectura"
        variant="contained"
        sx={{
          backgroundColor: '#f8dada',
          color: '#333',
          width: isMobile ? '90%' : '80%',
          marginBottom: 1,
          padding: isMobile ? '8px' : '10px',
          '&:hover': { backgroundColor: '#f5c8c8' },
        }}
      >
        Lectura de Tarot
      </Button>

      <Button
        href="/registros"
        variant="contained"
        sx={{
          backgroundColor: '#f8dada',
          color: '#333',
          width: isMobile ? '90%' : '80%',
          marginBottom: 1,
          padding: isMobile ? '8px' : '10px',
          '&:hover': { backgroundColor: '#f5c8c8' },
        }}
      >
        Registros Akáshicos
      </Button>

      <Button
        href="/encuentros"
        variant="contained"
        sx={{
          backgroundColor: '#f8dada',
          color: '#333',
          width: isMobile ? '90%' : '80%',
          marginBottom: 1,
          padding: isMobile ? '8px' : '10px',
          '&:hover': { backgroundColor: '#f5c8c8' },
        }}
      >
        Encuentros de Meditación
      </Button>

      <Button
        href="https://link-to-book.com"
        variant="contained"
        sx={{
          backgroundColor: '#f8dada',
          color: '#333',
          width: isMobile ? '90%' : '80%',
          marginBottom: 1,
          padding: isMobile ? '8px' : '10px',
          '&:hover': { backgroundColor: '#f5c8c8' },
        }}
      >
        Mi libro "Amor de Almas"
      </Button>

      <Fab
        color="secondary"
        onClick={handleRedirect}
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          backgroundColor: '#E1306C',
          '&:hover': {
            backgroundColor: '#C13584',
          },
          zIndex: 1000,
        }}
      >
        <FaInstagram size={24} color="white" />
      </Fab>
    </Container>
  );
}

export default App;
