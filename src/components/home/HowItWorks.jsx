import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SectionHeader from '../common/SectionHeader';

const steps = [
  {
    number: '01',
    icon: <ManageSearchIcon sx={{ fontSize: 28, color: '#014584' }} />,
    title: 'Cost Audit',
    duration: 'Weeks 1–2',
    description:
      "We analyze your API logs, map every call to a use case, and identify where you're overpaying. Deliverable: a written optimization roadmap ranked by ROI.",
    outcome: 'Standalone value: roadmap you can act on yourself',
  },
  {
    number: '02',
    icon: <PsychologyIcon sx={{ fontSize: 28, color: '#014584' }} />,
    title: 'Model Design',
    duration: 'Week 3',
    description:
      'We select the base model, training approach (fine-tuning vs. distillation), and quantization target. Benchmarks defined before training begins.',
    outcome: 'Standalone value: architecture decision doc',
  },
  {
    number: '03',
    icon: <BuildIcon sx={{ fontSize: 28, color: '#014584' }} />,
    title: 'Build & Train',
    duration: 'Weeks 4–7',
    description:
      'Training runs, quality benchmarking against baseline, quantization, and integration testing in your environment.',
    outcome: 'Standalone value: deployed model artifact',
  },
  {
    number: '04',
    icon: <TrendingDownIcon sx={{ fontSize: 28, color: '#014584' }} />,
    title: 'Monitor & Optimize',
    duration: 'Ongoing',
    description:
      'Cost dashboards live from day one. Quarterly model reviews as better open-source options release.',
    outcome: 'Standalone value: permanent visibility into AI spend',
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.surface' }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="OUR PROCESS"
          title="From Audit to Deployed in 6–8 Weeks"
          subtitle="A structured engagement — each stage delivers standalone value even if you stop there."
        />

        <Box sx={{ position: 'relative' }}>
          {/* Dashed connector line — desktop only */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: 28,
              left: 'calc(12.5% + 20px)',
              right: 'calc(12.5% + 20px)',
              height: '2px',
              borderTop: '2px dashed',
              borderColor: 'rgba(1, 69, 132, 0.2)',
              zIndex: 0,
            }}
          />

          <Grid container spacing={3}>
            {steps.map((step, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Box
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 3,
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Number badge */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#F59E0B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          lineHeight: 1,
                        }}
                      >
                        {step.number}
                      </Typography>
                    </Box>
                    <Chip
                      label={step.duration}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: '0.7rem',
                        borderColor: 'rgba(1, 69, 132, 0.3)',
                        color: 'primary.main',
                        height: 22,
                      }}
                    />
                  </Box>

                  {/* Icon + Title */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        bgcolor: 'rgba(1, 69, 132, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                      {step.title}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, flex: 1 }}>
                    {step.description}
                  </Typography>

                  {/* Outcome tag */}
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: 'rgba(1, 69, 132, 0.04)',
                      borderRadius: 1.5,
                      border: '1px solid',
                      borderColor: 'rgba(1, 69, 132, 0.12)',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'primary.main',
                        fontStyle: 'italic',
                        fontWeight: 500,
                        lineHeight: 1.4,
                        display: 'block',
                      }}
                    >
                      {step.outcome}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
