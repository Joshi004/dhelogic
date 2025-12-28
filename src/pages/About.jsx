import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import SectionHeader from '../components/common/SectionHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const values = [
  {
    icon: <LightbulbIcon sx={{ fontSize: 28 }} />,
    title: 'Innovation',
    description: 'We stay current with new tech, but we won\'t rebuild your app in the latest framework just because it\'s trendy.',
    color: '#014584',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 28 }} />,
    title: 'Partnership',
    description: 'Most of our clients come back for their next project. That\'s how we measure success.',
    color: '#014584',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
    title: 'Excellence',
    description: 'We write tests, do code reviews, and don\'t ship broken features. Quality isn\'t optional for us.',
    color: '#014584',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 28 }} />,
    title: 'Integrity',
    description: 'We give honest estimates. If something will take 3 months, we say 3 months - not 6 weeks to win the bid.',
    color: '#F59E0B',
  },
];

const processSteps = [
  {
    icon: <SearchIcon sx={{ fontSize: 32 }} />,
    step: '01',
    title: 'Discover',
    description: 'Week 1: We learn your business, talk to stakeholders, and audit your current setup.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
    step: '02',
    title: 'Design',
    description: 'Week 2: We propose a technical architecture and timeline. You review, we refine.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 32 }} />,
    step: '03',
    title: 'Develop',
    description: 'Weeks 3-8: We ship working software every week. You see progress in real-time.',
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    step: '04',
    title: 'Deploy',
    description: 'Week 9+: We deploy to production and stick around for support and improvements.',
  },
];

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us | TechSergy - Engineers from Apple & Tether</title>
        <meta name="description" content="TechSergy is a small IT consultancy run by engineers from Apple, Tether, and fast-growing startups. We help companies ship better software, faster." />
        <link rel="canonical" href="https://techsergy.com/about" />
      </Helmet>
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
            backgroundImage: 'url("/pattern-waves.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
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
                  About Us
                </Typography>
                <Typography variant="h1" sx={{ mb: 3 }}>
                  Who{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    We Are
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  TechSergy is a small IT consultancy run by engineers who've built 
                  products at Apple, Tether, and fast-growing startups. We help 
                  companies ship better software, faster. We know how it works - 
                  how to scale from 0 to large-scale systems. You're working with 
                  the specialists.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                sx={{
                  position: 'relative',
                  height: { xs: 300, md: 400 },
                }}
              >
                {/* Visual Card */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    bgcolor: 'white',
                    borderRadius: 4,
                    p: 4,
                    boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <GpsFixedIcon sx={{ color: 'white', fontSize: '2rem' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    To empower ambitious teams building new things with technology solutions 
                    that drive growth, efficiency, and competitive advantage in the digital era.
                  </Typography>
                </Box>

                {/* Decorative Elements */}
                <Box
                  component={motion.div}
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '10%',
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    bgcolor: 'rgba(245, 158, 11, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid',
                    borderColor: 'rgba(245, 158, 11, 0.2)',
                  }}
                >
                  <LightbulbIcon sx={{ fontSize: '1.5rem', color: '#F59E0B' }} />
                </Box>
                <Box
                  component={motion.div}
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    bgcolor: 'rgba(1, 69, 132, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid',
                    borderColor: 'rgba(1, 69, 132, 0.15)',
                  }}
                >
                  <AutoAwesomeIcon sx={{ fontSize: '1.25rem', color: '#014584' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <SectionHeader
            overline="Our Values"
            title="What Drives Us"
            subtitle="Our core values guide every decision we make and every solution we deliver."
          />

          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 4,
                    bgcolor: 'white',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: `${value.color}10`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: value.color,
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: '1.125rem' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.surface' }}>
        <Container maxWidth="lg">
          <SectionHeader
            overline="Our Process"
            title="How We Work"
            subtitle="A proven methodology that ensures successful project delivery every time."
          />

          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                  }}
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'block' },
                        position: 'absolute',
                        top: 50,
                        left: '60%',
                        right: '-40%',
                        height: 2,
                        bgcolor: 'rgba(1, 69, 132, 0.2)',
                        zIndex: 0,
                      }}
                    />
                  )}

                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      border: '3px solid',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.icon}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                      }}
                    >
                      {step.step}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: '1.125rem' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Story Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                  Our Story
                </Typography>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  From Vision to{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Reality
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}
                >
                  TechSergy exists to be the kind of engineering partner teams can rely on - 
                  clear communication, strong architecture, and steady delivery.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                >
                  We've worked with teams like Tether to build production AI systems, 
                  trading platforms, and web apps. We stay small and hands-on so 
                  projects move fast and stay maintainable.
                </Typography>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ color: 'white' }}
                >
                  Work With Us
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 3,
                }}
              >
                {[
                  { value: 'Zero', label: 'Overhead', accent: false },
                  { value: '24h', label: 'Response Time', accent: true },
                  { value: 'Weekly', label: 'Demos', accent: false },
                  { value: 'Founder', label: 'Oversight', accent: true },
                ].map((stat, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    sx={{
                      p: 4,
                      bgcolor: 'white',
                      borderRadius: 4,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: stat.accent ? 'rgba(245, 158, 11, 0.3)' : '#E5E7EB',
                      boxShadow: 'none',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: stat.accent ? '#F59E0B' : 'primary.main',
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary', 
                        fontWeight: 400,
                        fontSize: '0.875rem',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Founder Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.surface' }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: '0.12em',
              mb: 2,
              display: 'block',
              textAlign: 'center',
            }}
          >
            Founder & CEO
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            Building With{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Purpose
            </Box>
          </Typography>

          <Grid container spacing={8} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{
                  textAlign: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/founder.jpg"
                  alt="Naresh Joshi"
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: 4,
                    mb: 3,
                    mx: 'auto',
                    objectFit: 'cover',
                  }}
                />
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  Naresh Joshi
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'primary.main', 
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Founder & CEO
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/naresh-joshi-004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: 'divider',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(1, 69, 132, 0.05)',
                    },
                  }}
                >
                  View LinkedIn Profile
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}
                >
                  Hi, I'm Naresh Joshi, Founder & CEO of TechSergy. I'm an engineer at heart, and I 
                  started TechSergy because I love solving complex technical challenges - especially 
                  the ones that require both deep systems thinking and rapid execution.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                >
                  Over the years, I've built production systems across fintech, AI/ML platforms, and 
                  enterprise software. I've worked at companies like Apple, Tether, and high-growth 
                  startups, and learned what consistently makes projects succeed: strong architecture, 
                  clear communication, and shipping in measurable steps.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  How We Work
                </Typography>

                <Box sx={{ mb: 4 }}>
                  {[
                    'Lean, senior-led team - you get focused specialists, not layers of management',
                    'Founder oversight on every project - I personally review architecture and key decisions',
                    'Weekly demos and written updates - you always know where we are',
                    'Continuous delivery - we ship working software every sprint, not at the end',
                    'Long-term thinking - we build systems that scale and teams can maintain',
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: 'primary.main',
                          mr: 2,
                          mt: 0.5,
                          fontSize: 24,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                >
                  When you work with TechSergy, you're working directly with someone who's been 
                  in the trenches and knows what it takes to deliver. Let's talk about your project.
                </Typography>

                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ color: 'white' }}
                >
                  Talk to the Founder
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold accent line */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent 0%, #F59E0B 50%, transparent 100%)',
          }}
        />
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
              Let's Talk
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgba(255, 255, 255, 0.95)', mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Have a project in mind? Send us the details and we'll get back to you 
              within 24 hours with our take.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#F59E0B',
                color: 'white',
                px: 4,
                border: 'none',
                '&:hover': {
                  bgcolor: '#D97706',
                  boxShadow: '0 8px 20px rgba(245, 158, 11, 0.4)',
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default About;

