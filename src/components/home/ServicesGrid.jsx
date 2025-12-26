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
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    icon: <SmartToyIcon sx={{ fontSize: 32 }} />,
    title: 'AI/ML Solutions',
    description: 'Custom AI and machine learning solutions. We figure out if AI makes sense for your use case first, then build it right.',
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.1)',
  },
  {
    icon: <WebIcon sx={{ fontSize: 32 }} />,
    title: 'Web & Mobile Development',
    description: 'Clean, fast websites and apps. We focus on getting things working first, then making them beautiful.',
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.1)',
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 32 }} />,
    title: 'IT Strategy & Consulting',
    description: 'We help you plan your tech stack, avoid expensive mistakes, and make smart decisions about what to build.',
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    title: 'Staff Augmentation',
    description: 'Need extra developers? We embed with your team and work like we\'re part of it - same tools, same meetings, same Slack.',
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.1)',
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
          title="How We Help"
          subtitle="We help you build and launch products that matter. From AI-powered solutions to responsive and scalable applications, we move fast and iterate alongside you."
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
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
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

