import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// AI-mark geometry — keep these path strings in sync with /public/ai-logo.svg.
// viewBox is 0 0 260 210. "ink" paths recolor per variant; "accent" stays blue.
const AI_MARK = {
  aHollow: 'M105 15 L195 195 L15 195 Z M105 90 L155 195 L55 195 Z', // hollow "A" (fill-rule evenodd)
  aPeak: 'M105 120 L138 195 L72 195 Z', // inner blue peak
  iStem: 'M214 70 L248 70 L248 195 L214 195 Z', // "I" vertical bar (below the dot)
  iDot: 'M214 25 L248 25 L248 59 L214 59 Z', // blue "dot" above the "I", separated by a gap
};

// Render the AI mark larger than the wordmark cap height so it reads as the bolder, highlighted element.
const MARK_SCALE = 0.95;

const scaleHeight = (height) =>
  typeof height === 'object' && height !== null
    ? Object.fromEntries(
        Object.entries(height).map(([bp, v]) => [bp, v * MARK_SCALE])
      )
    : height * MARK_SCALE;

const Logo = ({ variant = 'dark', showTagline = false, height = 36, sx }) => {
  const isLight = variant === 'light';
  const ink = isLight ? '#FFFFFF' : '#1b2433';
  const accent = isLight ? '#4f8fe0' : '#2f6fd0';

  return (
    <Box
      role="img"
      aria-label="TechSergyAI"
      sx={{ display: 'inline-flex', flexDirection: 'column', ...sx }}
    >
      <Box sx={{ display: 'inline-flex', alignItems: 'flex-end', gap: 0.15 }}>
        <Typography
          component="span"
          sx={{
            fontFamily: '"General Sans", sans-serif',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.01em',
            color: ink,
            fontSize: height,
          }}
        >
          TechSergy
        </Typography>
        <Box
          component="svg"
          aria-hidden="true"
          viewBox="0 0 260 210"
          sx={{
            height: scaleHeight(height),
            width: 'auto',
            display: 'block',
          }}
        >
          <path d={AI_MARK.aHollow} fill={ink} fillRule="evenodd" />
          <path d={AI_MARK.aPeak} fill={accent} />
          <path d={AI_MARK.iStem} fill={ink} />
          <path d={AI_MARK.iDot} fill={accent} />
        </Box>
      </Box>
      {showTagline && (
        <Typography
          component="span"
          sx={{
            mt: 0.75,
            fontFamily: '"General Sans", sans-serif',
            fontWeight: 500,
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: isLight ? 'rgba(255, 255, 255, 0.6)' : 'text.secondary',
          }}
        >
          Useful Intelligence. Less Wasted Compute.
        </Typography>
      )}
    </Box>
  );
};

export default Logo;
