import { createTheme } from '@mui/material/styles';

// Color Palette - Clean & Modern (TechSergy Blue)
const colors = {
  primary: {
    main: '#014584',      // Deep Blue
    light: '#0260a8',
    dark: '#013566',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#0F172A',      // Slate
    light: '#1E293B',
    dark: '#020617',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#10B981',      // Emerald
    light: '#34D399',
    dark: '#059669',
  },
  background: {
    default: '#FFFFFF',   // Pure White
    paper: '#FFFFFF',
    surface: '#F8FAFC',   // Soft Gray for cards/sections
  },
  text: {
    primary: '#1E293B',   // Charcoal
    secondary: '#64748B', // Cool Gray
  },
  gradient: {
    primary: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
    subtle: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
  },
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    background: colors.background,
    text: colors.text,
  },
  typography: {
    fontFamily: '"Inter", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '1.875rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
      color: colors.text.primary,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: colors.text.secondary,
    },
    body2Light: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: 'rgba(255, 255, 255, 0.9)',
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: colors.text.secondary,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(15, 23, 42, 0.04)',
    '0px 1px 3px rgba(15, 23, 42, 0.06), 0px 1px 2px rgba(15, 23, 42, 0.04)',
    '0px 4px 6px -1px rgba(15, 23, 42, 0.06), 0px 2px 4px -1px rgba(15, 23, 42, 0.04)',
    '0px 10px 15px -3px rgba(15, 23, 42, 0.08), 0px 4px 6px -2px rgba(15, 23, 42, 0.04)',
    '0px 20px 25px -5px rgba(15, 23, 42, 0.08), 0px 10px 10px -5px rgba(15, 23, 42, 0.04)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    ...Array(18).fill('0px 25px 50px -12px rgba(15, 23, 42, 0.15)'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '12px 24px',
          fontSize: '0.9375rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(1, 69, 132, 0.25)',
          },
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          background: colors.gradient.primary,
          '&:hover': {
            background: colors.gradient.primary,
            boxShadow: '0px 8px 20px rgba(1, 69, 132, 0.35)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 6px -1px rgba(15, 23, 42, 0.06), 0px 2px 4px -1px rgba(15, 23, 42, 0.04)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 20px 25px -5px rgba(15, 23, 42, 0.08), 0px 10px 10px -5px rgba(15, 23, 42, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: 1200,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
        filled: {
          backgroundColor: colors.background.surface,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary.main,
            },
          },
        },
      },
    },
  },
});

export { colors };
export default theme;

