import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'calc(100vh - 70px)', md: 'calc(100vh - 80px)' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: '#FAFBFC',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {/* Gradient Orbs */}
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: { xs: 300, md: 500 },
            height: { xs: 300, md: 500 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(1, 69, 132, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: { xs: 250, md: 400 },
            height: { xs: 250, md: 400 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(2, 96, 168, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Grid Pattern */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(1, 69, 132, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(1, 69, 132, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            maxWidth: 800,
            mx: 'auto',
            textAlign: 'center',
            py: { xs: 6, md: 8 },
          }}
        >
          {/* Main Headline */}
          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variant="h1"
            sx={{ 
              mb: 3,
              '& .gradient': {
                background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
              },
            }}
          >
            Need Something Built?
            <br />
            <span className="gradient">Let's Talk.</span>
          </Typography>

          {/* Subtitle */}
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="subtitle1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              mb: 5,
              lineHeight: 1.7,
            }}
          >
            A lean team of developers who work closely with you. No account managers, no handoffs, just direct communication and solid work.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 6 }}
          >
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
              }}
            >
              Get Started
            </Button>
            <Button
              component={Link}
              to="/portfolio"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderColor: 'divider',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'rgba(1, 69, 132, 0.04)',
                },
              }}
            >
              View Our Work
            </Button>
          </Stack>

          {/* Stats */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 4, md: 8 },
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  fontSize: { xs: '1.75rem', md: '2rem' },
                }}
              >
                24h
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', fontWeight: 500 }}
              >
                Response Time
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

