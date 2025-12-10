import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

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
    { label: 'Cloud & DevOps', path: '/services#cloud' },
    { label: 'IT Consulting', path: '/services#consulting' },
  ],
};

const socialLinks = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
  { icon: <TwitterIcon />, label: 'Twitter', href: '#' },
  { icon: <GitHubIcon />, label: 'GitHub', href: '#' },
  { icon: <EmailIcon />, label: 'Email', href: 'mailto:hello@dhelogic.com' },
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
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #68bac5 0%, #7ecbd4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              DheLogic
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3, maxWidth: 300 }}
            >
              Your trusted partner for innovative IT solutions. We transform ideas
              into powerful digital experiences.
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
                      bgcolor: 'rgba(104, 186, 197, 0.3)',
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

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                color: 'rgba(255, 255, 255, 0.5)',
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}
            >
              hello@dhelogic.com
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}
            >
              We respond within 24 hours
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                bgcolor: 'rgba(16, 185, 129, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#10B981',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: '#10B981', fontWeight: 500, fontSize: '0.8rem' }}
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
            variant="body2"
            sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem' }}
          >
            © {currentYear} DheLogic. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              component={Link}
              to="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                '&:hover': { color: 'white' },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              component={Link}
              to="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                '&:hover': { color: 'white' },
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

