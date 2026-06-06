import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

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
      monthlySpend: '',
      useCase: '',
      currentProvider: '',
      message: '',
      website: '', // Honeypot field
    },
  });

  // Explicitly render Turnstile widget when script is loaded
  useEffect(() => {
    const renderWidget = () => {
      if (!window.turnstile || !turnstileRef.current || widgetIdRef.current !== null) {
        return;
      }

      try {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAACJQJ83A7LaSE-oT',
          callback: (token) => {
            setTurnstileToken(token);
          },
          'expired-callback': () => {
            setTurnstileToken('');
          },
          'error-callback': () => {
            setTurnstileToken('');
          },
        });
      } catch (error) {
        console.error('Turnstile error:', error);
      }
    };

    // Try to render immediately if script is already loaded
    if (window.turnstile) {
      renderWidget();
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkInterval);
          renderWidget();
        }
      }, 100);

      // Stop checking after 10 seconds
      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
      }, 10000);

      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
        if (widgetIdRef.current !== null && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      };
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
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
          website: data.website, // Honeypot field
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
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
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
      <Helmet>
        <title>Book a Free AI Cost Audit | TechSergy</title>
        <meta name="description" content="Tell us your monthly AI spend and use case. We'll send back a realistic cost reduction estimate and a plan to get there  no sales pitch." />
        <link rel="canonical" href="https://techsergy.com/contact" />
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
              Book a Free{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Cost Audit
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', fontSize: '1.2rem' }}
            >
              Tell us what you're spending and what you're building. We'll come back within 24 hours with a realistic savings estimate.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                        name="monthlySpend"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            select
                            label="Current Monthly AI API Spend"
                            fullWidth
                          >
                            <MenuItem value="">Prefer not to say</MenuItem>
                            <MenuItem value="under-5k">Under $5,000/month</MenuItem>
                            <MenuItem value="5k-25k">$5,000 – $25,000/month</MenuItem>
                            <MenuItem value="25k-100k">$25,000 – $100,000/month</MenuItem>
                            <MenuItem value="over-100k">Over $100,000/month</MenuItem>
                          </TextField>
                        )}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Controller
                        name="useCase"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            select
                            label="Primary AI Use Case"
                            fullWidth
                          >
                            <MenuItem value="">Select a use case</MenuItem>
                            <MenuItem value="support">Customer Support / Chatbot</MenuItem>
                            <MenuItem value="document">Document Processing / Extraction</MenuItem>
                            <MenuItem value="classification">Content Classification</MenuItem>
                            <MenuItem value="generation">Content / Code Generation</MenuItem>
                            <MenuItem value="search">Search / Semantic Retrieval</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </TextField>
                        )}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Controller
                        name="currentProvider"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            select
                            label="Current AI Provider"
                            fullWidth
                          >
                            <MenuItem value="">Select provider</MenuItem>
                            <MenuItem value="openai">OpenAI (GPT-4, GPT-4o)</MenuItem>
                            <MenuItem value="anthropic">Anthropic (Claude)</MenuItem>
                            <MenuItem value="google">Google (Gemini)</MenuItem>
                            <MenuItem value="azure-openai">Azure OpenAI</MenuItem>
                            <MenuItem value="multiple">Multiple providers</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
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
                    {/* Honeypot field - hidden from users, catches bots */}
                    <Grid size={12} sx={{ position: 'absolute', left: '-9999px' }}>
                      <Controller
                        name="website"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Website"
                            fullWidth
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
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
                        <div ref={turnstileRef} />
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
                        {isSubmitting ? 'Sending...' : 'Book My Free Audit'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
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
                q: 'Will our AI output quality drop after optimization?',
                a: 'Not without your approval. We first benchmark your current AI system against real production examples, edge cases, and business-specific acceptance criteria. That baseline becomes the standard for any optimized model or workflow we propose. We only move to production when the optimized system meets the agreed quality threshold, and we keep fallback paths to larger models for complex or low-confidence cases.',
              },
              {
                q: 'How do you reduce AI inference cost?',
                a: 'We analyze your production AI traffic and identify where large frontier models are being overused. Then we replace unnecessary model calls with the right execution path: deterministic code, lightweight ML models, encoder-based models, smaller open-source LLMs, fine-tuned task-specific models, caching, routing, or selective fallback to GPT, Claude, or Gemini only when needed.',
              },
              {
                q: 'Do you fully replace GPT, Claude, or Gemini?',
                a: 'Not always. Full replacement is not the goal. The goal is to reduce unnecessary frontier-model usage while preserving quality and reliability. Many production systems work best with a hybrid architecture where simple tasks use code or smaller models, repetitive workflows use task-specific models, and frontier models are reserved for complex edge cases.',
              },
              {
                q: 'How do you make sure the optimized system does not break production workflows?',
                a: 'We do not replace your current AI workflow blindly. We first run the optimized workflow offline against historical examples, then test it in parallel against live-like traffic, compare outputs, validate response formats, measure accuracy, latency, and failure modes, and only then roll it out gradually. For critical workflows, we use schema validation, confidence scoring, human review queues, and fallback routing.',
              },
              {
                q: 'Do we own the fine-tuned models and infrastructure after the engagement?',
                a: 'Yes. You own the fine-tuned model weights, training artifacts, evaluation datasets, deployment configuration, and infrastructure setup created for your environment. You are not locked into TechSergy to continue running the system. If you want ongoing support, we can provide optional managed monitoring, retraining, benchmarking, and optimization as your production traffic evolves.',
              },
              {
                q: 'Does our data leave our cloud environment?',
                a: 'By default, no. We can work inside your AWS, GCP, Azure, or private cloud environment so training data, evaluation data, and inference traffic remain under your control. For regulated industries such as healthcare, finance, insurance, and legal, we structure the engagement around your compliance requirements, including data minimization, access control, audit logs, and environment-specific deployment constraints.',
              },
              {
                q: 'We do not have labeled training data. Can you still help?',
                a: 'Yes. Many clients start without labeled datasets. We can create training and evaluation data from existing production examples, historical model outputs, human-reviewed samples, synthetic examples, or teacher-model generated labels. The important first step is building a reliable evaluation set so we can measure whether an optimized system is safe to deploy.',
              },
              {
                q: 'What kinds of AI workloads are best suited for optimization?',
                a: 'The best candidates are repetitive, high-volume, structured workflows where inputs and outputs follow predictable patterns. Examples include support ticket classification, document extraction, contract review, underwriting workflows, claims processing, internal knowledge assistants, summarization pipelines, routing, tagging, and structured data generation.',
              },
              {
                q: 'What does this cost, and when do we break even?',
                a: 'We usually start with a fixed-fee AI Cost Audit. The audit identifies where your current AI spend is going, which workflows are overusing large models, and where optimization is economically justified. If the savings opportunity is strong enough, we scope an implementation project around a target reduction. For high-volume AI systems, break-even is often measured in weeks or a few months after deployment, depending on your current monthly spend and optimization complexity.',
              },
              {
                q: 'How long does an optimization engagement take?',
                a: 'Most engagements run in stages. A cost audit and workload analysis can usually be completed first, followed by prototype optimization, benchmarking, shadow testing, controlled rollout, and production monitoring. A typical optimization project takes 6–8 weeks, depending on the number of workflows, data availability, deployment requirements, and compliance constraints.',
              },
              {
                q: 'What happens after deployment?',
                a: 'After deployment, the optimized AI system should be monitored like any production system. We track quality, latency, cost, failure modes, drift, input distribution changes, and fallback usage. You can manage this internally, or TechSergy can provide ongoing managed optimization to retrain models, update routing rules, benchmark new model options, and keep the system cost-efficient over time.',
              },
              {
                q: 'Is this a risky long-term project?',
                a: 'No. The work is staged so risk is controlled at every step. We start with audit and benchmarking before changing production systems. If the audit does not show enough savings or reliability upside, we stop there instead of forcing an implementation project. You are never committed beyond the phase you approve.',
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

