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
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';

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
          title="Recent Work"
          subtitle="A look at what we've been building."
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
                  background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
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
                      bgcolor: 'rgba(1, 69, 132, 0.1)',
                      color: 'primary.main',
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="Computer Vision"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(1, 69, 132, 0.1)',
                      color: '#014584',
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

                {/* Use Cases */}
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  <Grid size={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 2,
                        bgcolor: 'rgba(1, 69, 132, 0.04)',
                        border: '1px solid rgba(1, 69, 132, 0.1)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          bgcolor: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          flexShrink: 0,
                        }}
                      >
                        <AutoAwesomeIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Smart Moment Detection
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          Finds the exact moments that matter to you from millions of hours of video. The system learns your preferences and surfaces what you actually want to see.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 2,
                        bgcolor: 'rgba(16, 185, 129, 0.04)',
                        border: '1px solid rgba(16, 185, 129, 0.1)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          bgcolor: '#10B981',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          flexShrink: 0,
                        }}
                      >
                        <SearchIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Deep Content Search
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          Search through actual video content, not just metadata. Find objects, emotions, dialogue, and embedded information across your entire library.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                {/* Feature Highlights */}
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {[
                    { value: 'Millions', label: 'Hours of Video', color: 'primary.main' },
                    { value: '<500ms', label: 'Search Time', color: '#10B981' },
                    { value: 'Full Content', label: 'Understanding', color: '#014584' },
                  ].map((feature, index) => (
                    <Grid size={4} key={index}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          p: 2,
                          borderRadius: 2,
                          bgcolor: 'background.surface',
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, color: feature.color, mb: 0.5, fontSize: '1.1rem' }}
                        >
                          {feature.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary', fontSize: '0.7rem', lineHeight: 1.3 }}
                        >
                          {feature.label}
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

