import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const caseStudies = [
  {
    id: 'tether',
    client: 'Tether',
    clientLogo: '₮',
    clientLogoColor: '#26A17B',
    title: 'Enterprise Blockchain Solutions',
    subtitle: 'Scalable infrastructure for global operations',
    description: 'Collaborated with Tether to develop and optimize blockchain infrastructure solutions, ensuring high availability and security for their global stablecoin operations.',
    challenge: 'Tether required robust, scalable infrastructure capable of handling millions of transactions while maintaining the highest security standards in the cryptocurrency industry.',
    solution: 'We designed and implemented a comprehensive infrastructure solution with advanced monitoring, automated scaling capabilities, and multi-layer security protocols.',
    results: [
      { metric: '99.99%', label: 'Uptime Achieved' },
      { metric: '<100ms', label: 'Transaction Latency' },
      { metric: '24/7', label: 'Monitoring Coverage' },
    ],
    technologies: ['Blockchain', 'Cloud Infrastructure', 'Security', 'DevOps'],
    color: '#26A17B',
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 48 }} />,
  },
  {
    id: 'video-ai',
    client: 'Video Analysis AI',
    clientLogo: '▶',
    clientLogoColor: '#4F46E5',
    title: 'Intelligent Video Analytics Platform',
    subtitle: 'AI-powered real-time video processing',
    description: 'Developed an advanced AI-powered video analysis system capable of real-time object detection, tracking, and behavioral analysis for various use cases.',
    challenge: 'The client needed a scalable solution that could process multiple video streams in real-time while maintaining high accuracy in object detection and classification.',
    solution: 'We built a custom deep learning pipeline using state-of-the-art computer vision models, optimized for real-time performance with GPU acceleration.',
    results: [
      { metric: '95%', label: 'Detection Accuracy' },
      { metric: '50ms', label: 'Processing Time' },
      { metric: '100+', label: 'Concurrent Streams' },
    ],
    technologies: ['AI/ML', 'Computer Vision', 'Python', 'TensorFlow', 'Real-time Processing'],
    color: '#68bac5',
    icon: <PlayCircleOutlineIcon sx={{ fontSize: 48 }} />,
  },
];

const Portfolio = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'background.surface',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(104, 186, 197, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(104, 186, 197, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: '0.12em',
                mb: 2,
                display: 'block',
              }}
            >
              Our Work
            </Typography>
            <Typography variant="h1" sx={{ mb: 3 }}>
              Projects That{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #68bac5 0%, #7ecbd4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Deliver Results
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', fontSize: '1.2rem' }}
            >
              Explore how we've helped our clients achieve their goals through 
              innovative technology solutions and strategic partnerships.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <Box
          key={study.id}
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: index % 2 === 0 ? 'white' : 'background.surface',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
              {/* Visual Section */}
              <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    position: 'relative',
                    height: { xs: 350, md: 450 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${study.color}15 0%, ${study.color}05 100%)`,
                    border: '1px solid',
                    borderColor: `${study.color}20`,
                  }}
                >
                  {/* Client Logo */}
                  <Box
                    component={motion.div}
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 140,
                        height: 140,
                        borderRadius: 4,
                        bgcolor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 20px 40px ${study.color}25`,
                        color: study.color,
                      }}
                    >
                      {study.icon}
                    </Box>
                  </Box>

                  {/* Client Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 24,
                      left: 24,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      px: 2,
                      py: 1,
                      bgcolor: 'white',
                      borderRadius: 2,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: study.clientLogoColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1rem',
                      }}
                    >
                      {study.clientLogo}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {study.client}
                    </Typography>
                  </Box>

                  {/* Decorative Elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20%',
                      right: '15%',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: `${study.color}15`,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '25%',
                      left: '20%',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: `${study.color}10`,
                    }}
                  />
                </Box>
              </Grid>

              {/* Content Section */}
              <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    {study.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: `${study.color}15`,
                          color: study.color,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>

                  <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
                    {study.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: study.color, fontWeight: 500, mb: 3 }}
                  >
                    {study.subtitle}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                  >
                    {study.description}
                  </Typography>

                  {/* Challenge & Solution */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="overline"
                        sx={{ color: 'text.secondary', letterSpacing: '0.1em', display: 'block', mb: 1 }}
                      >
                        The Challenge
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                        {study.challenge}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ color: 'text.secondary', letterSpacing: '0.1em', display: 'block', mb: 1 }}
                      >
                        Our Solution
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                        {study.solution}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Results */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="overline"
                      sx={{ color: 'text.secondary', letterSpacing: '0.1em', display: 'block', mb: 2 }}
                    >
                      Key Results
                    </Typography>
                    <Grid container spacing={2}>
                      {study.results.map((result, i) => (
                        <Grid size={4} key={i}>
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
                              variant="h5"
                              sx={{ fontWeight: 700, color: study.color, mb: 0.5 }}
                            >
                              {result.metric}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: 'text.secondary', fontSize: '0.7rem' }}
                            >
                              {result.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}

      {/* More Coming Soon */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'background.surface',
        }}
      >
        <Container maxWidth="md">
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{
              textAlign: 'center',
              p: { xs: 4, md: 6 },
              border: '2px dashed',
              borderColor: 'divider',
              bgcolor: 'transparent',
              boxShadow: 'none',
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: 'rgba(104, 186, 197, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <Typography sx={{ fontSize: '2rem' }}>🚀</Typography>
            </Box>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
              More Projects Coming Soon
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 4, maxWidth: 500, mx: 'auto' }}
            >
              We're actively working on exciting new projects. Stay tuned for more 
              case studies showcasing our latest work and innovations.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ color: 'white' }}
            >
              Start Your Project
            </Button>
          </Card>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #68bac5 0%, #7ecbd4 100%)',
        }}
      >
        <Container maxWidth="md">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h2"
              sx={{ color: 'white', mb: 2, fontWeight: 700 }}
            >
              Ready to Be Our Next Success Story?
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgba(255, 255, 255, 0.95)', mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Let's discuss how we can help transform your business with innovative 
              technology solutions tailored to your needs.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  px: 4,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                Start a Project
              </Button>
              <Button
                component={Link}
                to="/services"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  px: 4,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                View Services
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default Portfolio;

