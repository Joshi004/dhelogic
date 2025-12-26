import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'AI/ML Solutions', path: '/services#ai-ml' },
    { label: 'Web Development', path: '/services#web-dev' },
    { label: 'IT Consulting', path: '/services#consulting' },
    { label: 'Staff Augmentation', path: '/services#staff-augmentation' },
  ],
};

const socialLinks = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/naresh-joshi-004/' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0F172A',
        color: 'white',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"General Sans", sans-serif',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              TechSergy
            </Typography>
            <Typography
              variant="body2Light"
              sx={{ opacity: 0.78, mb: 3, maxWidth: 300 }}
            >
              We build technology with you, not just for you. Let's create something 
              great together.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      color: 'white',
                      bgcolor: 'rgba(1, 69, 132, 0.3)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Company Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                color: 'rgba(255, 255, 255, 0.5)',
                mb: 2,
              }}
            >
              Company
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {footerLinks.company.map((link) => (
                <Box component="li" key={link.label} sx={{ mb: 1.5 }}>
                  <Typography
                    component={Link}
                    to={link.path}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: 'white',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Services Links */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                color: 'rgba(255, 255, 255, 0.5)',
                mb: 2,
              }}
            >
              Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {footerLinks.services.map((link) => (
                <Box component="li" key={link.label} sx={{ mb: 1.5 }}>
                  <Typography
                    component={Link}
                    to={link.path}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: 'white',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Status */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                color: 'rgba(255, 255, 255, 0.5)',
                mb: 2,
              }}
            >
              Status
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                bgcolor: 'rgba(245, 158, 11, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(245, 158, 11, 0.2)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#F59E0B',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  },
                }}
              />
              <Typography
                variant="body2Light"
                sx={{ color: '#F59E0B', fontWeight: 500, fontSize: '0.8rem' }}
              >
                Available for projects
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2Light"
            sx={{ opacity: 0.56, fontSize: '0.85rem', textAlign: { xs: 'center', sm: 'left' } }}
          >
            © {currentYear} TechSergy. A brand operated by Exergy FZC, registered in UAE. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

