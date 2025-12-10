import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const FeaturedWork = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.surface',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          overline="Featured Work"
          title="Projects That Make an Impact"
          subtitle="See how we've helped our clients achieve their goals through innovative technology solutions."
        />

        {/* Featured Case Study - Video Analysis AI */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{
            bgcolor: 'white',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -1px rgba(15, 23, 42, 0.04)',
          }}
        >
          <Grid container>
            {/* Visual Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 300, md: '100%' },
                  minHeight: { md: 450 },
                  background: 'linear-gradient(135deg, #68bac5 0%, #7ecbd4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* Background Pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1,
                    backgroundImage: `
                      linear-gradient(white 1px, transparent 1px),
                      linear-gradient(90deg, white 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Floating Elements */}
                <Box
                  component={motion.div}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 3,
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <PlayCircleOutlineIcon sx={{ fontSize: 48, color: 'white' }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Video Analysis AI
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.8 }}
                  >
                    Intelligent Video Processing
                  </Typography>
                </Box>

                {/* Decorative Elements */}
                <Box
                  component={motion.div}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '15%',
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
                <Box
                  component={motion.div}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  sx={{
                    position: 'absolute',
                    bottom: '25%',
                    right: '20%',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
              </Box>
            </Grid>

            {/* Content Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                  <Chip
                    label="AI/ML"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(104, 186, 197, 0.1)',
                      color: 'primary.main',
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="Computer Vision"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(104, 186, 197, 0.1)',
                      color: '#68bac5',
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="Real-time Processing"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(16, 185, 129, 0.1)',
                      color: '#10B981',
                      fontWeight: 500,
                    }}
                  />
                </Box>

                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ mb: 2, fontWeight: 700 }}
                >
                  Video Analysis AI Solution
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                >
                  Developed an advanced AI-powered video analysis system capable of 
                  real-time object detection, tracking, and behavioral analysis. The 
                  solution processes video streams efficiently, providing actionable 
                  insights through an intuitive dashboard.
                </Typography>

                {/* Metrics */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {[
                    { value: '95%', label: 'Accuracy Rate' },
                    { value: '50ms', label: 'Processing Time' },
                    { value: '24/7', label: 'Real-time Analysis' },
                  ].map((metric, index) => (
                    <Grid size={4} key={index}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          p: 2,
                          borderRadius: 2,
                          bgcolor: 'background.surface',
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}
                        >
                          {metric.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
                        >
                          {metric.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Button
                  component={Link}
                  to="/portfolio"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ color: 'white' }}
                >
                  View Case Study
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedWork;

