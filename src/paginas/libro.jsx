import React from 'react';
import { Container, Box, Typography, useMediaQuery, Fab, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import almalogo from '../almalogo.jpg';
import fondo from '../fondo.png'
import { FaHome, FaInstagram } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

function Libro() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const goToHome = () => {
        Navigate('/'); // Adjust the path if your home route is different
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
            <Button
                href="https://articulo.mercadolibre.com.ar/MLA-1460870257-amor-de-almas-libro-_JM"
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
                Comprar en Mercado Libre
            </Button>

            <Button
                href="/milibro"
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
                Comprar por transferencia 
                $20.000 silvina.marotta (santander)
            </Button>
        </Container>
    )
}

export default Libro