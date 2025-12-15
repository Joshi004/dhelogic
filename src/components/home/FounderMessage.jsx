import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const workingPrinciples = [
  'Lean, senior-led team : you get focused specialists, not layers of management',
  'Founder oversight on every project : I personally review architecture and key decisions',
  'Weekly demos and written updates : you always know where we are',
  'Continuous delivery : we ship working software every sprint, not at the end',
  'Long-term thinking : we build systems that scale and teams can maintain',
];

const FounderMessage = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left Column - Photo & Info Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
              }}
            >
              {/* Photo */}
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                  border: '3px solid',
                  borderColor: 'divider',
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src="/founder.jpg"
                  alt="Naresh Joshi - Founder & CEO"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Name & Title Card */}
              <Box
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: 300,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Naresh Joshi
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Founder & CEO
                </Typography>

                {/* LinkedIn Button */}
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/naresh-joshi-004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderColor: 'divider',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(1, 69, 132, 0.04)',
                    },
                  }}
                >
                  View LinkedIn Profile
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Message & Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
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
                CEO & Founder
              </Typography>

              <Typography
                variant="h2"
                sx={{ mb: 3 }}
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

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Hi, I'm Naresh Joshi, Founder & CEO of TechSergy. I'm an engineer at heart, 
                and I started TechSergy because I love solving complex technical challenges—
                especially the ones that require both deep systems thinking and rapid execution.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                Over the years, I've built production systems across fintech, AI/ML platforms, 
                and enterprise software. I've worked at companies like Apple, Tether, and 
                high-growth startups, and learned what consistently makes projects succeed: 
                strong architecture, clear communication, and shipping in measurable steps.
              </Typography>

              {/* How We Work Section */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2.5,
                    color: 'text.primary',
                  }}
                >
                  How We Work
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {workingPrinciples.map((principle, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'flex-start',
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: 'primary.main',
                          fontSize: 20,
                          mt: 0.3,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                        }}
                      >
                        {principle}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                When you work with TechSergy, you're working directly with someone who's 
                been in the trenches and knows what it takes to deliver. Let's talk about 
                your project.
              </Typography>

              {/* CTA Button */}
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: 'white',
                  px: 4,
                  py: 1.5,
                }}
              >
                Talk to the Founder
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FounderMessage;

