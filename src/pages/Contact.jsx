import { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import PageTransition from '../components/common/PageTransition';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const services = [
  { value: 'ai-ml', label: 'AI/ML Solutions & Data Analytics' },
  { value: 'web-dev', label: 'Web & Mobile Development' },
  { value: 'consulting', label: 'IT Strategy & Consulting' },
  { value: 'staff-augmentation', label: 'Staff Augmentation' },
  { value: 'other', label: 'Other / Not Sure' },
];

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
    title: 'Location',
    content: 'Remote-first Company',
    subtitle: 'Serving clients worldwide',
  },
];

const socialLinks = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/naresh-joshi-004/' },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    },
  });

  // Setup global Turnstile callbacks
  useEffect(() => {
    window.onTurnstileSuccess = (token) => {
      setTurnstileToken(token);
    };

    window.onTurnstileExpired = () => {
      setTurnstileToken('');
    };

    window.onTurnstileError = () => {
      setTurnstileToken('');
    };

    return () => {
      delete window.onTurnstileSuccess;
      delete window.onTurnstileExpired;
      delete window.onTurnstileError;
    };
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          'cf-turnstile-response': turnstileToken,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.ok) {
        setSnackbar({
          open: true,
          message: "Thank you for your message! We'll get back to you within 24 hours.",
          severity: 'success',
        });
        reset();
        setTurnstileToken('');
        // Reset Turnstile widget
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.reset(turnstileRef.current);
        }
      } else {
        setSnackbar({
          open: true,
          message: result.error || 'Something went wrong. Please try again.',
          severity: 'error',
        });
      }
    } catch (err) {
      setSnackbar({
        open: true,
        message: 'Network error. Please check your connection and try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
        {/* Clean minimal background - no pattern for contact page */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(1, 69, 132, 0.02) 0%, transparent 100%)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}
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
              Get in Touch
            </Typography>
            <Typography variant="h1" sx={{ mb: 3 }}>
              Let's Start a{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Conversation
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', fontSize: '1.2rem' }}
            >
              Have a project in mind? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  p: { xs: 3, md: 5 },
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)',
                }}
              >
                <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                  Send Us a Message
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', mb: 4 }}
                >
                  Fill out the form below and we'll get back to you within 24 hours.
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Your Name"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name?.message}
                          />
                        )}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Controller
                        name="email"
                        control={control}
                        rules={{
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Email Address"
                            type="email"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email?.message}
                          />
                        )}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Controller
                        name="company"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Company (Optional)"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Controller
                        name="service"
                        control={control}
                        rules={{ required: 'Please select a service' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            select
                            label="Service Interested In"
                            fullWidth
                            error={!!errors.service}
                            helperText={errors.service?.message}
                          >
                            {services.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        )}
                      />
                    </Grid>
                    <Grid size={12}>
                      <Controller
                        name="message"
                        control={control}
                        rules={{
                          required: 'Message is required',
                          minLength: {
                            value: 20,
                            message: 'Message must be at least 20 characters',
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Your Message"
                            multiline
                            rows={5}
                            fullWidth
                            error={!!errors.message}
                            helperText={errors.message?.message}
                            placeholder="Tell us about your project, goals, and timeline..."
                          />
                        )}
                      />
                    </Grid>
                    <Grid size={12}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          my: 2,
                        }}
                      >
                        <div
                          ref={turnstileRef}
                          className="cf-turnstile"
                          data-sitekey="0x4AAAAAACJQJ83A7LaSE-oT"
                          data-callback="onTurnstileSuccess"
                          data-expired-callback="onTurnstileExpired"
                          data-error-callback="onTurnstileError"
                        />
                      </Box>
                    </Grid>
                    <Grid size={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={isSubmitting || !turnstileToken}
                        endIcon={<SendIcon />}
                        sx={{ color: 'white', py: 1.5 }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Contact Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 2.5,
                          bgcolor: 'rgba(1, 69, 132, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                          flexShrink: 0,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="overline"
                          sx={{
                            color: 'text.secondary',
                            letterSpacing: '0.1em',
                            fontSize: '0.7rem',
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {info.content}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {info.subtitle}
                        </Typography>
                      </Box>
                    </Card>
                  ))}
                </Box>

                {/* Response Promise */}
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  sx={{
                    p: 4,
                    background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                    color: 'white',
                    textAlign: 'center',
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Typography sx={{ fontSize: '1.75rem' }}>⚡</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Fast Responses
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                    Send a message and expect a real response within a day - from an actual person.
                  </Typography>
                </Card>

                {/* Social Links */}
                <Box>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'text.secondary',
                      letterSpacing: '0.1em',
                      mb: 2,
                      display: 'block',
                    }}
                  >
                    Connect With Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    {socialLinks.map((social, index) => (
                      <Box
                        key={index}
                        component="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: 'background.surface',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'text.secondary',
                          border: '1px solid',
                          borderColor: 'divider',
                          transition: 'all 0.2s',
                          '&:hover': {
                            color: 'primary.main',
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(1, 69, 132, 0.04)',
                          },
                        }}
                      >
                        {social.icon}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.surface' }}>
        <Container maxWidth="md">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', mb: 6 }}
          >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Quick answers to common questions about working with us.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                q: 'How quickly can you start on my project?',
                a: 'We typically begin new projects within 1-2 weeks of agreement, depending on scope and current workload.',
              },
              {
                q: 'Do you work with startups?',
                a: 'Yes - startups are actually our sweet spot. We understand limited budgets and tight timelines. We can start small and scale up as you grow.',
              },
              {
                q: 'What\'s your typical project timeline?',
                a: 'Most projects take 4-12 weeks. We\'ll give you a realistic timeline after understanding your scope - no generic estimates.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes. We offer hourly support packages, monthly retainers, or on-call help. We don\'t disappear after launch.',
              },
              {
                q: 'How do you handle communication?',
                a: 'We join your Slack/Teams, provide weekly updates, and are available for calls as needed. You\'ll never be left wondering what\'s happening.',
              },
              {
                q: 'What if I\'m not happy with the work?',
                a: 'We build in review checkpoints throughout the project. If something\'s not right, we fix it before moving forward. We want you happy - it\'s that simple.',
              },
              {
                q: 'Do you sign NDAs?',
                a: 'Yes, we\'re happy to sign NDAs before any discussions about sensitive projects.',
              },
              {
                q: 'Can I see more examples of your work?',
                a: 'Check our Portfolio page, or ask us directly - we can share relevant examples based on what you\'re building.',
              },
            ].map((faq, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: '1rem' }}>
                      {faq.q}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {faq.a}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageTransition>
  );
};

export default Contact;

