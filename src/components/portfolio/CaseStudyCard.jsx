import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { getIcon } from '../../data/projects/iconMap.jsx';

const CaseStudyCard = ({ caseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  // Helper function to get RGB values from hex color
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '0, 0, 0';
  };

  const rgbColor = hexToRgb(caseStudy.color);

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -1px rgba(15, 23, 42, 0.04)',
        mb: 6,
        '&:hover': {
          transform: 'none',
        },
      }}
    >
      {/* Visual Header */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 300, md: 400 },
          background: caseStudy.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Ongoing Badge */}
        {caseStudy.status.isOngoing && (
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 2,
            }}
          >
            <Chip
              label={caseStudy.status.label}
              size="small"
              sx={{
                bgcolor: 'rgba(245, 158, 11, 0.95)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
                px: 1,
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                '@keyframes pulse': {
                  '0%, 100%': {
                    opacity: 1,
                  },
                  '50%': {
                    opacity: 0.8,
                  },
                },
              }}
            />
          </Box>
        )}

        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Icon */}
        <Box
          component={motion.div}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: 3,
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
            }}
          >
            {getIcon(caseStudy.iconKey, { sx: { fontSize: 48 } })}
          </Box>
        </Box>

        {/* Decorative Elements */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: 60,
            height: 60,
            borderRadius: 2,
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />
        <Box
          component={motion.div}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            bottom: '25%',
            right: '20%',
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />
      </Box>

      {/* Summary Content */}
      <Box sx={{ p: { xs: 4, md: 6 } }}>
        {/* Technology Chips */}
        <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
          {caseStudy.technologies.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              sx={{
                bgcolor: `rgba(${rgbColor}, 0.1)`,
                color: caseStudy.color,
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        {/* Title & Subtitle */}
        <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
          {caseStudy.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: caseStudy.color, fontWeight: 500, mb: 3 }}
        >
          {caseStudy.subtitle}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
        >
          {caseStudy.description}
        </Typography>

        {/* Key Results */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', letterSpacing: '0.1em', display: 'block', mb: 2 }}
          >
            Key Results
          </Typography>
          <Grid container spacing={2}>
            {caseStudy.results.map((result, i) => (
              <Grid size={4} key={i}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.surface',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: caseStudy.color, mb: 0.5 }}
                  >
                    {result.metric}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', fontSize: '0.7rem' }}
                  >
                    {result.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Expand/Collapse Button */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Button
            variant="outlined"
            onClick={toggleExpanded}
            endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            sx={{
              borderColor: caseStudy.color,
              color: caseStudy.color,
              '&:hover': {
                borderColor: caseStudy.color,
                bgcolor: `rgba(${rgbColor}, 0.04)`,
              },
            }}
          >
            {isExpanded ? 'Show Less' : 'View Full Details'}
          </Button>
        </Box>

        {/* Expandable Content */}
        <Collapse in={isExpanded} timeout={400}>
          <Box
            component={motion.div}
            initial={false}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, delay: isExpanded ? 0.1 : 0 }}
            sx={{ pt: 4 }}
          >
            {/* THE PROJECT */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 2,
                }}
              >
                The Project
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.primary', lineHeight: 1.8 }}
              >
                {caseStudy.portfolio.projectSummary}
              </Typography>
            </Box>

            {/* WHAT PROBLEM WE SOLVED */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 3,
                }}
              >
                What Problem We Solved
              </Typography>
              <Grid container spacing={3}>
                {caseStudy.portfolio.challenges.map((challenge, i) => (
                  <Grid size={12} key={i}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.surface',
                        display: 'flex',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: `rgba(${rgbColor}, 0.1)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: caseStudy.color,
                          flexShrink: 0,
                        }}
                      >
                        {getIcon(challenge.iconKey, { sx: { fontSize: 32 } })}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          Challenge {i + 1}: {challenge.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                        >
                          {challenge.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* OUR APPROACH */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 3,
                }}
              >
                Our Approach
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {caseStudy.portfolio.approach.map((item, i) => (
                  <Box key={i}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 1, color: caseStudy.color }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* THE TECHNICAL SOLUTION */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 3,
                }}
              >
                The Technical Solution
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {caseStudy.portfolio.technicalSolution.map((item, i) => (
                  <Box key={i}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 1, color: caseStudy.color }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* USE CASES */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 3,
                }}
              >
                Use Cases
              </Typography>
              <Grid container spacing={3}>
                {caseStudy.portfolio.useCases.map((useCase, i) => (
                  <Grid size={{ xs: 12, md: 6 }} key={i}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.surface',
                        height: '100%',
                        display: 'flex',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          bgcolor: `rgba(${rgbColor}, 0.1)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: caseStudy.color,
                          flexShrink: 0,
                        }}
                      >
                        {getIcon(useCase.iconKey, { sx: { fontSize: 24 } })}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {useCase.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                        >
                          {useCase.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* DETAILED RESULTS */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 3,
                }}
              >
                Results
              </Typography>
              <Grid container spacing={2}>
                {caseStudy.portfolio.detailedResults.map((result, i) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.surface',
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, color: caseStudy.color, mb: 0.5 }}
                      >
                        {result.metric}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        {result.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
                      >
                        {result.context}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* TECH STACK */}
            <Box sx={{ mb: caseStudy.priorExperience.enabled ? 4 : 0 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  letterSpacing: '0.1em',
                  display: 'block',
                  mb: 2,
                }}
              >
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {caseStudy.portfolio.techStack.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="medium"
                    sx={{
                      bgcolor: `rgba(${rgbColor}, 0.1)`,
                      color: caseStudy.color,
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* PRIOR EXPERIENCE FOOTNOTE */}
            {caseStudy.priorExperience.enabled && (
              <Box
                sx={{
                  mt: 4,
                  pt: 3,
                  borderTop: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <WorkOutlineIcon
                    sx={{
                      fontSize: 18,
                      color: 'text.secondary',
                      mt: 0.2,
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.8rem',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}
                  >
                    {caseStudy.priorExperience.note}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Collapse>
      </Box>
    </Card>
  );
};

export default CaseStudyCard;

