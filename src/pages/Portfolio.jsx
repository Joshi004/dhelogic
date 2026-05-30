import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import CaseStudyCard from '../components/portfolio/CaseStudyCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { getPortfolioProjects } from '../data/projects';

const Portfolio = () => {
  const portfolioProjects = getPortfolioProjects();

  return (
    <PageTransition>
      <Helmet>
        <title>Case Studies: AI Inference Cost Reduction | TechSergy</title>
        <meta name="description" content="Real production results: an 89% inference cost reduction for a SaaS platform and 94% via distillation for a legal classifier — quality held. Inference cost reduction is all we do." />
        <link rel="canonical" href="https://techsergy.com/portfolio" />
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
            backgroundImage: 'url("/pattern-gradient-mesh.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
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
              What We've{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Built
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', fontSize: '1.2rem' }}
            >
              We show only inference cost-reduction work — it's all we do. Here's what that looks like in production.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Case Studies Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="lg">
          {portfolioProjects.map((project) => (
            <CaseStudyCard key={project.id} caseStudy={project} />
          ))}
        </Container>
      </Box>

      {/* Your Project Could Be Next */}
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
              '&:hover': {
                transform: 'none',
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: 'rgba(1, 69, 132, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <LightbulbOutlinedIcon sx={{ fontSize: '2.5rem', color: 'primary.main' }} />
            </Box>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
              Your Bill Could Be Next
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 4, maxWidth: 500, mx: 'auto' }}
            >
              These teams cut their production inference bills by 80–94% with quality held. Tell us what you're spending and we'll estimate yours.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ color: 'white' }}
            >
              Book a Free Cost Audit
            </Button>
          </Card>
        </Container>
      </Box>

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
              Overpaying for Production AI?
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgba(255, 255, 255, 0.95)', mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Get a free cost audit — a realistic estimate of how much you could cut your OpenAI or Anthropic bill, and exactly how we'd do it. No sales pitch.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
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
                  '&:hover': {
                    bgcolor: '#D97706',
                    boxShadow: '0 8px 20px rgba(245, 158, 11, 0.4)',
                  },
                }}
              >
                Book a Free Cost Audit
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
