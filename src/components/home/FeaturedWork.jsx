import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Case Study Data
const caseStudies = [
  {
    id: 'video-ai',
    title: 'Video Analysis AI Solution',
    subtitle: 'Intelligent Video Processing',
    gradient: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
    color: '#014584',
    icon: <PlayCircleOutlineIcon sx={{ fontSize: 48, color: 'white' }} />,
    technologies: [
      { label: 'AI/ML', bgcolor: 'rgba(1, 69, 132, 0.1)', color: 'primary.main' },
      { label: 'Computer Vision', bgcolor: 'rgba(1, 69, 132, 0.1)', color: '#014584' },
      { label: 'Real-time Processing', bgcolor: 'rgba(16, 185, 129, 0.1)', color: '#10B981' },
    ],
    useCases: [
      {
        icon: <AutoAwesomeIcon sx={{ fontSize: 20 }} />,
        bgcolor: 'rgba(1, 69, 132, 0.04)',
        borderColor: 'rgba(1, 69, 132, 0.1)',
        iconBg: 'primary.main',
        title: 'Smart Moment Detection',
        description: 'Finds the exact moments that matter to you from millions of hours of video. The system learns your preferences and surfaces what you actually want to see.',
      },
      {
        icon: <SearchIcon sx={{ fontSize: 20 }} />,
        bgcolor: 'rgba(16, 185, 129, 0.04)',
        borderColor: 'rgba(16, 185, 129, 0.1)',
        iconBg: '#10B981',
        title: 'Deep Content Search',
        description: 'Search through actual video content, not just metadata. Find objects, emotions, dialogue, and embedded information across your entire library.',
      },
    ],
    metrics: [
      { value: 'Millions', label: 'Hours of Video', color: 'primary.main' },
      { value: '<500ms', label: 'Search Time', color: '#10B981' },
      { value: 'Full Content', label: 'Understanding', color: '#014584' },
    ],
  },
  {
    id: 'ats',
    title: 'Algorithmic Trading System',
    subtitle: 'Automated Trading Platform',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    color: '#10B981',
    icon: <TrendingUpIcon sx={{ fontSize: 48, color: 'white' }} />,
    technologies: [
      { label: 'Django', bgcolor: 'rgba(16, 185, 129, 0.1)', color: '#10B981' },
      { label: 'React', bgcolor: 'rgba(16, 185, 129, 0.1)', color: '#059669' },
      { label: 'Microservices', bgcolor: 'rgba(1, 69, 132, 0.1)', color: '#014584' },
    ],
    useCases: [
      {
        icon: <ShowChartIcon sx={{ fontSize: 20 }} />,
        bgcolor: 'rgba(16, 185, 129, 0.04)',
        borderColor: 'rgba(16, 185, 129, 0.1)',
        iconBg: '#10B981',
        title: 'Multi-Market Trading',
        description: 'Connects to any broker or exchange with a pluggable architecture. Trade stocks, crypto, derivatives, and more from a single unified platform.',
      },
      {
        icon: <SpeedIcon sx={{ fontSize: 20 }} />,
        bgcolor: 'rgba(1, 69, 132, 0.04)',
        borderColor: 'rgba(1, 69, 132, 0.1)',
        iconBg: '#014584',
        title: 'Automated Strategy Execution',
        description: 'Execute algorithmic trading strategies 24/7 with real-time monitoring, state persistence, and automatic crash recovery for uninterrupted operation.',
      },
    ],
    metrics: [
      { value: '6', label: 'Microservices', color: '#10B981' },
      { value: '70%', label: 'Test Coverage', color: '#059669' },
      { value: 'Multi-Broker', label: 'Support', color: '#014584' },
    ],
  },
];

const FeaturedWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentIndex];

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

        {/* Carousel Container */}
        <Box sx={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <Box
              key={currentStudy.id}
              component={motion.div}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
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
                      background: currentStudy.gradient,
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

                    {/* Floating Icon */}
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
                        {currentStudy.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {currentStudy.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {currentStudy.subtitle}
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
                    {/* Technology Chips */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                      {currentStudy.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech.label}
                          size="small"
                          sx={{
                            bgcolor: tech.bgcolor,
                            color: tech.color,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>

                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 700 }}
                    >
                      {currentStudy.title}
                    </Typography>

                    {/* Use Cases */}
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                      {currentStudy.useCases.map((useCase, i) => (
                        <Grid size={12} key={i}>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 2,
                              p: 2.5,
                              borderRadius: 2,
                              bgcolor: useCase.bgcolor,
                              border: '1px solid',
                              borderColor: useCase.borderColor,
                            }}
                          >
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: 2,
                                bgcolor: useCase.iconBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                flexShrink: 0,
                              }}
                            >
                              {useCase.icon}
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                {useCase.title}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                {useCase.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    {/* Feature Highlights */}
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                      {currentStudy.metrics.map((feature, index) => (
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
          </AnimatePresence>

          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: 8, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': { bgcolor: 'white', boxShadow: 4 },
              zIndex: 2,
            }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: 8, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': { bgcolor: 'white', boxShadow: 4 },
              zIndex: 2,
            }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>

          {/* Navigation Dots */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mt: 3,
            }}
          >
            {caseStudies.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: currentIndex === index ? 'primary.main' : 'divider',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: currentIndex === index ? 'primary.dark' : 'text.secondary',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedWork;

