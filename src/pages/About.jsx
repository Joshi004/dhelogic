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
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HandymanIcon from '@mui/icons-material/Handyman';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ShieldIcon from '@mui/icons-material/Shield';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PublicIcon from '@mui/icons-material/Public';

const processSteps = [
  {
    icon: <SearchIcon sx={{ fontSize: 32 }} />,
    step: '01',
    title: 'Audit',
    description: 'Two weeks: we analyze your API logs, map every dollar to a use case, and identify the top cost reduction opportunities.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
    step: '02',
    title: 'Design',
    description: 'We select the right model architecture and training approach for your use case. You review and approve before any training begins.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 32 }} />,
    step: '03',
    title: 'Build & Deploy',
    description: 'Weeks 3–8: we fine-tune, quantize, and deploy your inference stack. Weekly progress updates throughout.',
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    step: '04',
    title: 'Monitor',
    description: 'Cost dashboards go live on day one of deployment. Quarterly model reviews keep your savings growing as the landscape evolves.',
  },
];

const principles = [
  {
    icon: <HandymanIcon sx={{ fontSize: 28 }} />,
    title: 'The right tool for the problem',
    description: 'Capability is not the same as fitness. We optimize for the problem actually in front of you  no more, no less.',
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 28 }} />,
    title: 'Measured, not promised',
    description: 'We benchmark before we propose and prove before we ship. Evidence first, claims second.',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 28 }} />,
    title: 'Built to hand over',
    description: 'You get the artifacts, configuration, and documentation to run the system yourself. Your independence is the goal, not your dependence on us.',
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 28 }} />,
    title: 'Your data, your environment',
    description: 'Privacy and control are features, not afterthoughts. When your requirements call for it, inference runs inside your own cloud.',
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: 28 }} />,
    title: 'Savings that last',
    description: 'We design for durable, structural cost reduction  not a one-time patch that erodes the moment your traffic or the model landscape shifts.',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 28 }} />,
    title: 'Cost is never just financial',
    description: 'Every wasteful system also carries an environmental and strategic cost. Removing waste is the responsible thing, not only the cheaper one.',
  },
];

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About TechSergy | AI Inference Cost Reduction Specialists</title>
        <meta name="description" content="TechSergy helps companies stop overpaying for AI  replacing oversized, general-purpose models with right-sized, task-specific systems you own and control, with quality proven by benchmarks." />
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
                  TechSergy is a specialist AI inference optimization firm. We help
                  companies that have already integrated AI into production workflows
                  take back control of their costs  through fine-tuning, distillation,
                  quantization, and self-hosted deployment of models they own.
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
                    We help companies stop overpaying for AI  replacing oversized,
                    general-purpose inference with right-sized systems that match the quality
                    you depend on, cost a fraction to run, and stay fully under your control.
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

      {/* Process Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.surface' }}>
        <Container maxWidth="lg">
          <SectionHeader
            overline="Our Process"
            title="How We Work"
            subtitle="The same staged methodology we run on every engagement  benchmark first, optimize, then hand over the model and infra. Measured at each step, not promised."
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
                  The{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Right Tool
                  </Box>
                  {' '}for the Job
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}
                >
                  For about ten years before TechSergy, our founder was an engineer raised on a simple discipline: don't repeat yourself, optimize the system, and never over-engineer. You reach for the right tool for the problem in front of you  no more, no less. That isn't bureaucracy; it's respect for the user, the budget, and whoever has to maintain the thing after you.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}
                >
                  Then large, general-purpose models  GPT, Claude, and the rest  arrived, and something shifted. They're remarkable, powerful enough to do almost anything, and that power is intoxicating. We became so impressed by how easy it had become to generate a solution that we quietly stopped asking the question every engineer used to ask first: what does this actually cost? Not just in dollars, but in energy, dependency, and control.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                >
                  You don't use a bazooka to kill a mosquito, or a sword to chop vegetables. Both tools are perfectly capable  but neither is the right tool, and using them anyway costs you. Reaching for a massive frontier model to solve a small, well-defined task is the same mistake. TechSergy exists to fix it: to give you the right-sized AI for the job  leaner, cheaper, owned by you, and proven to hold the quality your users rely on.
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
                  { value: '85%', label: 'Avg Cost Reduction', accent: false },
                  { value: '6–8 wks', label: 'Delivery', accent: true },
                  { value: '<2%', label: 'Quality Delta', accent: false },
                  { value: '$0', label: 'Third-Party API After Deploy', accent: true },
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

      {/* Vision + What We Believe Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.surface' }}>
        <Container maxWidth="lg">
          {/* Vision statement */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center', maxWidth: 860, mx: 'auto', mb: { xs: 8, md: 10 } }}
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
              Our Vision
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, lineHeight: 1.5, color: 'text.primary' }}
            >
              A world where companies use AI{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                deliberately
              </Box>
              {' '} where the size of the model fits the size of the problem, intelligence is owned rather than rented, and "it works" is measured against a higher standard: the right tool, at the right cost, fully under your control, with the quality proven.
            </Typography>
          </Box>

          {/* What We Believe */}
          <SectionHeader
            overline="What We Believe"
            title="The Principles We Work By"
            subtitle="The same convictions that started TechSergy guide every engagement we take on."
          />

          <Grid container spacing={4}>
            {principles.map((principle, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    p: 4,
                    bgcolor: 'white',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
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
                      mb: 2.5,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    {principle.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1.05rem' }}>
                    {principle.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {principle.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Founder Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
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
                  Hi, I'm Naresh Joshi, founder of TechSergy. I spent about a decade as an engineer
                  under one rule I never outgrew: use the right tool for the job, and don't pay  in
                  money, energy, or complexity  for capability the problem doesn't need.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
                >
                  When powerful general-purpose models arrived, I watched that discipline quietly
                  disappear. Teams reached for the biggest model available to solve small, well-defined
                  tasks because it was the fastest path under a deadline  and never revisited the
                  decision as the bill grew. I started TechSergy to do the careful, research-heavy work
                  most teams can't pause for: replace oversized inference with right-sized systems that
                  cost a fraction to run, stay under your control, and prove  with real benchmarks 
                  that quality holds.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  How We Work
                </Typography>

                <Box sx={{ mb: 4 }}>
                  {[
                    'Audit first  no optimization begins without a documented baseline and cost map',
                    'Founder oversight on every engagement  I personally review model selection and architecture',
                    'You keep the deliverables  trained artifacts, configuration, and dashboards  set up for your team to run',
                    'Weekly progress updates with quantified cost reduction projections',
                    'Where your requirements call for it, we train and deploy inside your own cloud so sensitive data stays under your control',
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
              Book a Free Cost Audit
            </Button>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default About;

