import React from 'react';
import { Container, Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import almalogo from '../almalogo.jpg';
import fondo from '../fondo.png'
function Registros() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fbe7e8',
        backgroundImage:  `url(${fondo})`, 
        backgroundSize: 'cover',
        padding: isMobile ? '20px' : '40px',
        textAlign: 'center',
      }}
    >
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
      {/* Title */}
      <Box
        sx={{
          backgroundColor: '#f8dada',
          padding: '10px 20px',
          borderRadius: '20px',
          marginBottom: 3,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" color="textPrimary" fontWeight="bold">
          Registros Akáshicos
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        color="textPrimary"
        sx={{
          whiteSpace: 'pre-line',
          fontSize: isMobile ? '0.9rem' : '1.1rem',
          lineHeight: 1.6,
          marginBottom: 3,
        }}
      >
        {`Son la memoria universal donde se archivan todas las memorias del alma incluyendo las experiencias de vidas pasadas.
Accedemos a través del permiso de los guardianes del Akasha y de los Maestros que nos transmiten la información a todo conocimiento que necesitemos y estemos preparados para recibir.
Además de conseguir información, la apertura puede traer limpieza, sanación y desbloqueo.

Para la sesión: te comparto una meditación (aunque no es obligatorio hacerla).
Sólo necesito tu nombre completo como aparece en la partida de nacimiento y fecha.
Luego te comparto la información y si lo necesitas, hacemos una videollamada.`}
      </Typography>

      {/* Price */}
      <Typography
        variant="h6"
        color="textPrimary"
        fontWeight="bold"
        sx={{
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: '#f8dada',
          width: 'fit-content',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Valor de la sesión: $15000
      </Typography>
    </Container>
  );
}

export default Registros;
