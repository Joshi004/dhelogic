import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

// Icons
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    icon: <SmartToyIcon sx={{ fontSize: 32 }} />,
    title: 'AI/ML Solutions',
    description: 'Build custom ML models that actually solve your problems - from predictive analytics to computer vision systems, Agentic Systems, or Video Analysis Systems.',
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.1)',
  },
  {
    icon: <WebIcon sx={{ fontSize: 32 }} />,
    title: 'Web & Mobile Development',
    description: 'Fast, modern web and mobile apps your customers will love. Built with React, Next.js, and battle-tested patterns.',
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.1)',
  },
  {
    icon: <CloudIcon sx={{ fontSize: 32 }} />,
    title: 'Cloud & DevOps',
    description: 'Move to the cloud without the headaches. We handle AWS, GCP, and Azure deployments with zero-downtime migrations.',
    color: '#0EA5E9',
    bgColor: 'rgba(14, 165, 233, 0.1)',
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 32 }} />,
    title: 'IT Strategy & Consulting',
    description: 'Not sure what to build next? We\'ll help you make smart tech decisions based on your budget and goals.',
    color: '#10B981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    title: 'Staff Augmentation',
    description: 'Hire senior engineers who jump into your codebase on day one. No ramp-up time, no junior devs. We only work with domain specialists.',
    color: '#8B5CF6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
    title: 'Custom Software',
    description: 'Custom software built for your exact needs - from internal tools to customer-facing platforms.',
    color: '#EC4899',
    bgColor: 'rgba(236, 72, 153, 0.1)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesGrid = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          overline="What We Do"
          title="How We Can Help"
          subtitle="From AI/ML systems to cloud infrastructure, we build the technical foundation your business needs to grow."
        />

        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                component={motion.div}
                variants={itemVariants}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                    },
                    '& .arrow-icon': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    className="service-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      bgcolor: service.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.color,
                      mb: 3,
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 1.5,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    {service.title}
                    <ArrowForwardIcon
                      className="arrow-icon"
                      sx={{
                        fontSize: 18,
                        opacity: 0,
                        transform: 'translateX(-10px)',
                        transition: 'all 0.3s ease',
                        color: 'primary.main',
                      }}
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Services Link */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          sx={{ textAlign: 'center', mt: 6 }}
        >
          <Typography
            component={Link}
            to="/services"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: 'primary.main',
              fontWeight: 600,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                '& .arrow': {
                  transform: 'translateX(4px)',
                },
              },
            }}
          >
            Explore All Services
            <ArrowForwardIcon
              className="arrow"
              sx={{ fontSize: 18, transition: 'transform 0.2s' }}
            />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesGrid;

