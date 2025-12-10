import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'white',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center' }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'text.secondary',
              letterSpacing: '0.15em',
              fontSize: '0.75rem',
              mb: 4,
              display: 'block',
            }}
          >
            Trusted by Industry Leaders
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 4, md: 8 },
              flexWrap: 'wrap',
            }}
          >
            {/* Tether Logo - Using SVG representation */}
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 4,
                py: 2,
                borderRadius: 2,
                bgcolor: 'background.surface',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              {/* Tether Icon */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: '#26A17B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  ₮
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#0F172A',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Tether
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
                >
                  Enterprise Client
                </Typography>
              </Box>
            </Box>

            {/* More Clients Coming indicator */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                border: '1px dashed',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                }}
              >
                + More clients joining soon
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrustedBy;

