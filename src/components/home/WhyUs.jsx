import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const features = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 28 }} />,
    title: 'Innovation First',
    description: 'We move fast and iterate quickly with cutting-edge technologies that keep you ahead of the curve.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 28 }} />,
    title: 'Collaborative Approach',
    description: 'We join your Slack, attend your standups, and work like we\'re in-house. You\'ll always know what\'s happening.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 28 }} />,
    title: 'Dedicated Support',
    description: 'Ongoing support that\'s actually responsive. Not a ticketing system, just reach out.',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
    title: 'Results Driven',
    description: 'Focused on shipping. We set deadlines and actually hit them.',
  },
];

const WhyUs = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Content Section */}
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
                Why Choose Us
              </Typography>
              <Typography
                variant="h2"
                sx={{ mb: 3 }}
              >
                What's Different{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  About Us
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
              >
                We're a small team, which means you work directly with the people building your product. No layers, no account managers, just clear communication and quality work.
              </Typography>
              
              {/* Features List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    sx={{
                      display: 'flex',
                      gap: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2.5,
                        bgcolor: 'background.surface',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                        flexShrink: 0,
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 0.5, fontSize: '1.05rem' }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Visual Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                position: 'relative',
                height: { xs: 400, md: 500 },
              }}
            >
              {/* Main Card */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  maxWidth: 350,
                  bgcolor: 'white',
                  borderRadius: 4,
                  p: 4,
                  boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
                  border: '1px solid',
                  borderColor: 'divider',
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <HandshakeIcon sx={{ color: 'white', fontSize: '1.75rem' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Partnership Approach
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  We're not vendors, we're collaborators. When you win, we win.
                </Typography>
              </Box>

              {/* Decorative Cards */}
              <Box
                component={motion.div}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                sx={{
                  position: 'absolute',
                  top: '10%',
                  left: '5%',
                  width: 120,
                  height: 80,
                  bgcolor: 'rgba(245, 158, 11, 0.08)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderColor: 'rgba(245, 158, 11, 0.2)',
                  zIndex: 1,
                }}
              >
                <LightbulbIcon sx={{ fontSize: '2rem', color: '#F59E0B' }} />
              </Box>

              <Box
                component={motion.div}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                sx={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '5%',
                  width: 100,
                  height: 100,
                  bgcolor: 'rgba(1, 69, 132, 0.08)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderColor: 'rgba(1, 69, 132, 0.15)',
                  zIndex: 1,
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: '2.5rem', color: '#014584' }} />
              </Box>

              {/* Background Circle */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(1, 69, 132, 0.05) 0%, transparent 70%)',
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;

