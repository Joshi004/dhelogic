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
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DnsIcon from '@mui/icons-material/Dns';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    icon: <ManageSearchIcon sx={{ fontSize: 32 }} />,
    title: 'AI Cost Audit',
    description: 'We map every dollar of your API spend to its use case and deliver a prioritized optimization roadmap. The entry point  typically pays for itself in week one.',
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.1)',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
    title: 'Model Fine-Tuning & Distillation',
    description: 'We train task-specific models on your data. A fine-tuned Llama 3 8B outperforms GPT-4 on narrow tasks at 5–10% of the per-token cost.',
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.1)',
  },
  {
    icon: <DnsIcon sx={{ fontSize: 32 }} />,
    title: 'Self-Hosted Inference',
    description: 'We deploy vLLM or TGI on your cloud. Your queries never hit a third-party API. You own the model, control the cost, and satisfy compliance requirements.',
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  {
    icon: <TrendingDownIcon sx={{ fontSize: 32 }} />,
    title: 'Ongoing Cost Intelligence',
    description: 'Cost dashboards, model routing layers, and quarterly refresh cycles as new open-source models release. Savings compound over time.',
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
          title="Four Ways We Cut Your AI Bill"
          subtitle="A focused set of services that take you from runaway API spend to a model you own, control, and can run at a fraction of the cost."
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

