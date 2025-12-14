import { Link } from 'react-router-dom';
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
import CoreTeam from '../components/home/CoreTeam';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const values = [
  {
    icon: <LightbulbIcon sx={{ fontSize: 28 }} />,
    title: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
    color: '#014584',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 28 }} />,
    title: 'Partnership',
    description: 'We build lasting relationships with our clients, working as an extension of their team.',
    color: '#014584',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in everything we do.',
    color: '#10B981',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 28 }} />,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical standards in all our engagements.',
    color: '#F59E0B',
  },
];

const processSteps = [
  {
    icon: <SearchIcon sx={{ fontSize: 32 }} />,
    step: '01',
    title: 'Discover',
    description: 'We begin by understanding your business, challenges, and goals through in-depth consultation.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
    step: '02',
    title: 'Design',
    description: 'Our team crafts tailored solutions and architectures that align with your specific requirements.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 32 }} />,
    step: '03',
    title: 'Develop',
    description: 'We build your solution using agile methodologies, ensuring quality and regular feedback.',
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    step: '04',
    title: 'Deploy',
    description: 'We launch your solution and provide ongoing support to ensure continued success.',
  },
];

const About = () => {
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
              linear-gradient(rgba(1, 69, 132, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(1, 69, 132, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
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
                  Building the Future,{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Together
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  TechSergy is an IT consultancy founded on the belief that technology 
                  should empower businesses, not complicate them. We partner with organizations 
                  to deliver innovative solutions that drive real results.
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
                    <Typography sx={{ color: 'white', fontSize: '1.75rem' }}>🎯</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    To empower businesses with innovative technology solutions that drive 
                    growth, efficiency, and competitive advantage in the digital era.
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
                    bgcolor: 'rgba(1, 69, 132, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '1.5rem' }}>💡</Typography>
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
                    bgcolor: 'rgba(2, 96, 168, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '1.25rem' }}>✨</Typography>
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
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        bgcolor: `${value.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: value.color,
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
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
                        top: 40,
                        left: '60%',
                        right: '-40%',
                        height: 2,
                        background: 'linear-gradient(90deg, #014584 0%, transparent 100%)',
                        opacity: 0.3,
                      }}
                    />
                  )}

                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 4px 20px rgba(1, 69, 132, 0.15)',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      position: 'relative',
                    }}
                  >
                    {step.icon}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -10,
                        right: -10,
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      {step.step}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
                  TechSergy was born from a simple idea: businesses deserve technology 
                  partners who truly understand their challenges and are invested in their 
                  success.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                >
                  We've already begun making our mark with clients like Tether, delivering 
                  innovative solutions like our Video Analysis AI platform. As we grow, 
                  our commitment remains the same: to provide exceptional IT consultancy 
                  services that transform businesses.
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
                  { value: '2+', label: 'Projects Completed' },
                  { value: '24h', label: 'Response Time' },
                  { value: '100%', label: 'Commitment' },
                  { value: '24/7', label: 'Available' },
                ].map((stat, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    sx={{
                      p: 3,
                      bgcolor: 'background.surface',
                      borderRadius: 3,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Team Section */}
      <CoreTeam />

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
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
              Let's Build Something Amazing
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgba(255, 255, 255, 0.95)', mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Ready to transform your business with innovative technology solutions? 
              We'd love to hear from you.
            </Typography>
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
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default About;

