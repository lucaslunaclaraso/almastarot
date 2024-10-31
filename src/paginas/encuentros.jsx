import React from 'react';
import { Container, Box, Typography, useMediaQuery, Fab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import almalogo from '../almalogo.jpg';
import fondo from '../fondo.png'
import { FaHome, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Encuentros() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const instagramUrl = 'https://www.instagram.com/almas.tarot/'; // Replace with your Instagram URL
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/'); // Adjust the path if your home route is different
    };
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
                padding: isMobile ? '20px' : '40px',
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'fixed',
                    top: 16,
                    left: 16,
                    zIndex: 1100,
                }}
            >
                <Fab
                    color="primary"
                    onClick={goToHome}
                    sx={{
                        backgroundColor: '#E1306C',
                        '&:hover': {
                            backgroundColor: '#C13584',
                        },
                    }}
                >
                    <FaHome size={20} color="white" />
                </Fab>
            </Box>
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
                    Encuentros de Meditación
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
                {`Los encuentros de meditación, relajación y respiración consciente son mensuales.
                Por plataforma virtual o presencial. Con una intención amorosa de formar una comunidad que quiera trabajar y expandir la paz interior`}
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
                Valor de la sesión: $6.000
            </Typography>

            <Box
                sx={{
                    position: 'fixed',
                    bottom: { xs: 16, md: 24 },
                    right: { xs: 16, md: 24 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    zIndex: 1000,
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        display: { xs: 'block', sm: 'block' }, // Hidden on extra small screens, shown on small screens and above
                        color: '#E1306C',
                        fontWeight: 'bold',
                    }}
                >
                    Contacto
                </Typography>
                <Fab
                    color="secondary"
                    onClick={handleRedirect}
                    sx={{
                        backgroundColor: '#E1306C',
                        '&:hover': {
                            backgroundColor: '#C13584',
                        },
                        mr: 1, // Margin right to separate the button and text
                    }}
                >

                    <FaInstagram size={24} color="white" />
                </Fab>


            </Box>
        </Container>
    );
}

export default Encuentros;
