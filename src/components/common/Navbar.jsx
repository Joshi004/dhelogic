import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const drawer = (
    <Box sx={{ width: '100%', height: '100%', bgcolor: 'background.default' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          component="img"
          src="/techsergy_logo_transparent.png"
          alt="DheLogic"
          sx={{
            width: 100,
            height: 'auto',
          }}
        />
        <IconButton onClick={handleDrawerToggle} aria-label="close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                py: 2,
                px: 3,
                '&:hover': {
                  bgcolor: 'background.surface',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive(item.path) ? 600 : 500,
                  color: isActive(item.path) ? 'primary.main' : 'text.primary',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3, mt: 2 }}>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          fullWidth
          size="large"
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        component={motion.header}
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 4,
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="/techsergy_logo_transparent.png"
                alt="DheLogic"
                sx={{
                  width: { xs: 110, md: 140 },
                  height: 'auto',
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              {navItems.slice(0, -1).map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive(item.path) ? 'primary.main' : 'text.primary',
                    fontWeight: isActive(item.path) ? 600 : 500,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    '&:hover': {
                      bgcolor: 'rgba(104, 186, 197, 0.04)',
                    },
                    '&::after': isActive(item.path)
                      ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 20,
                          height: 3,
                          borderRadius: 2,
                          bgcolor: 'primary.main',
                        }
                      : {},
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* CTA Button - Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  color: 'white',
                  px: 3,
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 400,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ minHeight: { xs: 70, md: 80 } }} />
    </>
  );
};

export default Navbar;

