import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import SectionHeader from '../components/common/SectionHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Icons
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WebIcon from '@mui/icons-material/Web';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';

const services = [
  {
    id: 'ai-ml',
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    title: 'AI/ML Solutions & Data Analytics',
    subtitle: 'Custom AI tools that actually solve problems',
    description: 'We build AI tools for real use cases: chatbots that actually help users, prediction models that work in production, and automation that saves time. Not AI for AI\'s sake.',
    features: [
      'Custom Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Systems',
      'Predictive Analytics',
      'Data Pipeline Development',
      'AI Integration & Deployment',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'AWS SageMaker'],
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.08)',
  },
  {
    id: 'web-dev',
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: 'Web & Mobile Development',
    subtitle: 'Full-stack development',
    description: 'We build web and mobile applications. Frontend, backend, databases, APIs, deployment - the whole thing. Whatever your stack, we can work with it or help you choose the right one.',
    features: [
      'React & Next.js Applications',
      'Mobile Apps (iOS & Android)',
      'Backend APIs & Microservices',
      'Database Design & Optimization',
      'REST & GraphQL APIs',
      'Performance Optimization',
    ],
    technologies: ['React', 'Next.js', 'React Native', 'Node.js', 'Python', 'Java', 'TypeScript', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.08)',
  },
  {
    id: 'consulting',
    icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />,
    title: 'IT Strategy & Consulting',
    subtitle: 'Figure out what to build before building it',
    description: 'Not sure what to build or what tech to use? We help you figure that out before spending money on the wrong thing. Architecture reviews, tech stack decisions, build-vs-buy analysis.',
    features: [
      'Modernizing legacy systems',
      'Tech stack planning',
      'Vendor Selection',
      'Architecture Review',
      'Development workflow improvements',
    ],
    technologies: ['TOGAF', 'Agile', 'Scrum', 'SAFe', 'ITIL', 'Design Thinking'],
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.08)',
  },
  {
    id: 'staff-augmentation',
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: 'Staff Augmentation',
    subtitle: 'Developers who work like they\'re in-house',
    description: 'Need more developers but don\'t want to hire full-time? We embed with your team - join your Slack, attend your standups, use your tools. It\'s like having more teammates without the hiring overhead.',
    features: [
      'Skilled Developers & Engineers',
      'UI/UX Designers',
      'Technical Consultants',
      'QA & Testing Specialists',
      'Hourly, weekly, or project-based contracts',
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', 'DevOps', 'Agile'],
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.08)',
  },
];

const Services = () => {
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
            backgroundImage: 'url("/pattern-dots.svg")',
            backgroundRepeat: 'repeat',
            opacity: 0.8,
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
              Our Services
            </Typography>
            <Typography variant="h1" sx={{ mb: 3 }}>
              Focused Solutions for{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                What Matters Most
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', fontSize: '1.2rem' }}
            >
              Development, consulting, and team extension. Here's what we offer and how it works.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Sections */}
      {services.map((service, index) => (
        <Box
          key={service.id}
          id={service.id}
          sx={{
            py: { xs: 8, md: 10 },
            bgcolor: index % 2 === 0 ? 'white' : 'background.surface',
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 4, md: 8 }}
              alignItems="center"
              direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            >
              {/* Content */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 72,
                      height: 72,
                      borderRadius: 3,
                      bgcolor: service.bgColor,
                      color: service.color,
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: service.color, fontWeight: 500, mb: 2 }}
                  >
                    {service.subtitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                  >
                    {service.description}
                  </Typography>

                  {/* Features Grid */}
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {service.features.map((feature, i) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={i}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: service.color,
                            }}
                          />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {feature}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Technologies */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: 'text.secondary',
                        letterSpacing: '0.1em',
                        mb: 1.5,
                        display: 'block',
                      }}
                    >
                      Technologies
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {service.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: service.bgColor,
                            color: service.color,
                            fontWeight: 500,
                            fontSize: '0.8rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                      color: 'white',
                      '&:hover': {
                        background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Grid>

              {/* Visual */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    position: 'relative',
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                    border: '1px solid',
                    borderColor: `${service.color}20`,
                  }}
                >
                  {/* Icon centered */}
                  <Box
                    component={motion.div}
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 120,
                      height: 120,
                      borderRadius: 4,
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.color,
                      boxShadow: `0 20px 40px ${service.color}20`,
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Decorative circles */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20%',
                      left: '15%',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: `${service.color}15`,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '25%',
                      right: '20%',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: `${service.color}10`,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '60%',
                      left: '25%',
                      width: 25,
                      height: 25,
                      borderRadius: '50%',
                      bgcolor: `${service.color}20`,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}

      {/* CTA Section */}
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
              background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
              color: 'white',
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
              Not Sure Which Service You Need?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.95)', maxWidth: 500, mx: 'auto' }}
            >
              Schedule a call. No hard sell - just a conversation about what you need and whether we're the right fit.
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
              Schedule Consultation
            </Button>
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default Services;

