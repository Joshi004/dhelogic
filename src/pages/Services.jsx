import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DnsIcon from '@mui/icons-material/Dns';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const services = [
  {
    id: 'cost-audit',
    icon: <ManageSearchIcon sx={{ fontSize: 40 }} />,
    title: 'AI Cost Audit',
    subtitle: 'Know exactly where your money is going',
    description: 'Before optimizing anything, we map your entire AI spend. We analyze API logs, classify each use case by complexity, and identify the top opportunities ranked by ROI. Delivered in two weeks.',
    features: [
      'API usage pattern analysis',
      'Cost-per-feature attribution',
      'Model complexity classification',
      'ROI-ranked optimization roadmap',
      'Baseline quality benchmarking',
      'Written report + live walkthrough',
    ],
    technologies: ['OpenAI API', 'Anthropic API', 'LangSmith', 'Datadog', 'Custom dashboards'],
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.08)',
  },
  {
    id: 'model-optimization',
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    title: 'Model Fine-Tuning & Distillation',
    subtitle: 'Task-specific models at 5–10% of frontier model cost',
    description: 'We train open-source models (Llama 3, Mistral, Phi-4, Gemma 3) on your specific task and data. For complex pipelines we use distillation — using GPT-4 as a teacher to label training data, then train a small student model. Result: frontier-quality on your task at a fraction of the cost.',
    features: [
      'LoRA & QLoRA fine-tuning',
      'Knowledge distillation pipelines',
      'INT8 / INT4 quantization (GPTQ, AWQ)',
      'Quality benchmarking vs. current model',
      'Delivered as portable model artifact',
      'Supports Llama, Mistral, Phi, Gemma, Qwen',
    ],
    technologies: ['Unsloth', 'Axolotl', 'HuggingFace TRL', 'GPTQ', 'AWQ', 'GGUF', 'PyTorch'],
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.08)',
  },
  {
    id: 'inference-infra',
    icon: <DnsIcon sx={{ fontSize: 40 }} />,
    title: 'Self-Hosted Inference Infrastructure',
    subtitle: 'Your model, your cloud, your data',
    description: 'We deploy and configure production-grade inference servers on your cloud (AWS, GCP, or Azure). Your queries stay inside your infrastructure — no third-party API, no usage limits, no data leaving your control. We also build intelligent routing layers that send simple queries to small models and escalate only when needed.',
    features: [
      'vLLM and TGI deployment & tuning',
      'Autoscaling and continuous batching',
      'Semantic caching (40–70% cache hit rates)',
      'LLM routing (simple → small, complex → large)',
      'HIPAA / GDPR / SOC2 compatible setup',
      'Cost and latency monitoring dashboards',
    ],
    technologies: ['vLLM', 'HuggingFace TGI', 'Ollama', 'LiteLLM', 'GPTCache', 'AWS', 'GCP', 'Azure', 'NVIDIA'],
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.08)',
  },
  {
    id: 'ongoing',
    icon: <TrendingDownIcon sx={{ fontSize: 40 }} />,
    title: 'Ongoing Cost Intelligence',
    subtitle: 'Savings that compound as the model landscape evolves',
    description: 'The open-source model landscape moves fast — a model released today may outperform last quarter\'s fine-tune at half the size. We keep your stack current with quarterly model reviews, anomaly alerting when costs spike unexpectedly, and routing optimizations as your usage patterns evolve.',
    features: [
      'Real-time cost dashboards by feature',
      'Spend anomaly alerts',
      'Quarterly model refresh cycles',
      'Routing layer optimization',
      'Usage pattern analysis',
      'Retainer or project-based',
    ],
    technologies: ['LangSmith', 'Grafana', 'Prometheus', 'Custom dashboards', 'LiteLLM'],
    color: '#014584',
    bgColor: 'rgba(1, 69, 132, 0.08)',
  },
];

const Services = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>AI Inference Cost Reduction Services | TechSergy</title>
        <meta name="description" content="AI cost audits, model fine-tuning, distillation, and self-hosted inference deployment. We cut your OpenAI and Anthropic bills by 60–85%." />
        <link rel="canonical" href="https://techsergy.com/services" />
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
              Four Services. One Goal:{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Lower Your AI Bill.
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', fontSize: '1.2rem' }}
            >
              From a two-week cost audit to a fully deployed self-hosted inference stack — structured to deliver measurable ROI at every stage.
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
              Not Sure Where to Start?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.95)', maxWidth: 500, mx: 'auto' }}
            >
              Book a free 30-minute call. Tell us what you're spending and what you're building. We'll tell you exactly where the savings are.
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
              Book a Free Audit Call
            </Button>
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default Services;

