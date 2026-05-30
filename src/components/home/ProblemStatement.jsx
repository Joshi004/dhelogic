import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '../common/SectionHeader';

const comparisons = [
  {
    using: 'GPT-4o',
    usingCost: '$15/M output tokens',
    need: 'Llama 3.1 8B fine-tuned',
    needCost: '$0.08/M output tokens',
    savings: '99% cheaper',
  },
  {
    using: 'Claude 3.5 Sonnet',
    usingCost: '$15/M output tokens',
    need: 'Mistral 7B fine-tuned',
    needCost: '$0.05/M output tokens',
    savings: '99% cheaper',
  },
  {
    using: 'GPT-4o for extraction',
    usingCost: '$15/M output tokens',
    need: 'Phi-4 Mini quantized',
    needCost: '$0.04/M output tokens',
    savings: '99% cheaper',
  },
];

const ProblemStatement = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="THE PROBLEM"
          title="Paying PhD Rates for File-Clerk Work"
          subtitle="Frontier models are extraordinary general-purpose tools. Most production AI tasks don't need them."
        />

        <Grid container spacing={3}>
          {comparisons.map((item, index) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'visible',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  {/* What you're using */}
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: 'rgba(239, 68, 68, 0.05)',
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: '#DC2626',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        display: 'block',
                        mb: 1,
                      }}
                    >
                      What you're using
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {item.using}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#DC2626', fontWeight: 600 }}
                    >
                      {item.usingCost}
                    </Typography>
                  </Box>

                  {/* Arrow separator */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      py: 1.5,
                      bgcolor: 'white',
                      position: 'relative',
                    }}
                  >
                    <Chip
                      label={item.savings}
                      size="small"
                      sx={{
                        bgcolor: '#F59E0B',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        position: 'absolute',
                        right: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    />
                    <ArrowDownwardIcon sx={{ color: 'text.disabled', fontSize: 20 }} />
                  </Box>

                  {/* What you need */}
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: 'rgba(1, 69, 132, 0.05)',
                      borderTop: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        display: 'block',
                        mb: 1,
                      }}
                    >
                      What you need
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {item.need}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'primary.main', fontWeight: 600 }}
                    >
                      {item.needCost}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Callout box */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          sx={{
            mt: 4,
            p: { xs: 3, md: 4 },
            bgcolor: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid',
            borderColor: 'rgba(245, 158, 11, 0.3)',
            borderRadius: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: 'text.primary', lineHeight: 1.7, flex: 1 }}
          >
            These aren't cherry-picked numbers. They're what our clients pay before and after. The only
            difference is the model is trained specifically for their task.
          </Typography>
          <Button
            component={Link}
            to="/portfolio"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#F59E0B',
              color: 'white',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': { bgcolor: '#D97706' },
            }}
          >
            See a Real Example
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProblemStatement;
