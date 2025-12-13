import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const SectionHeader = ({
  overline,
  title,
  subtitle,
  align = 'center',
  titleGradient = false,
  maxWidth = 700,
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      sx={{
        textAlign: align,
        maxWidth: align === 'center' ? maxWidth : 'none',
        mx: align === 'center' ? 'auto' : 0,
        mb: { xs: 4, md: 6 },
      }}
    >
      {overline && (
        <Typography
          variant="overline"
          component="span"
          sx={{
            display: 'inline-block',
            color: 'primary.main',
            fontWeight: 600,
            mb: 1.5,
            letterSpacing: '0.12em',
          }}
        >
          {overline}
        </Typography>
      )}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: subtitle ? 2 : 0,
          ...(titleGradient && {
            background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }),
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;

