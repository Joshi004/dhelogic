import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';

const teamMembers = [
  {
    name: 'Naresh Joshi',
    title: 'Lead Software Engineer / Full-Stack Architect',
    previouslyAt: 'Infosys, Apple, Pramata, DeleteMe, JazzxAI, Tether',
    specialties: ['AI/ML', 'Full-Stack', 'Product (0→1)'],
    achievements: [
      'Built algorithmic trading systems and AI video indexing at scale',
      'Led product engineering from concept to production at early-stage startups',
    ],
    linkedIn: 'https://www.linkedin.com/in/naresh-joshi-004/',
    portfolio: 'https://joshi004.github.io/portfolio/',
    color: '#014584',
  },
  {
    name: 'Shashi Rohilla',
    title: 'Site Reliability Engineer',
    previouslyAt: 'HPE, Manhattan Associates, Highlevel, Uber',
    specialties: ['SRE', 'Observability', 'High Availability'],
    achievements: [
      'Improved reliability and incident response for high-traffic systems',
      'Experience with large-scale distributed infrastructure',
    ],
    linkedIn: 'https://www.linkedin.com/in/shashi-rohilla/',
    color: '#0260a8',
  },
];

const CoreTeam = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          overline="Core Team"
          title="Meet the Engineers Behind TechSergy"
          subtitle="Senior engineers with proven track records at leading technology companies."
        />

        <Grid container spacing={4} sx={{ mb: 4 }}>
          {teamMembers.map((member, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)',
                  '&:hover': {
                    boxShadow: '0 8px 30px rgba(15, 23, 42, 0.12)',
                  },
                  transition: 'box-shadow 0.3s',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Avatar */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>

                  {/* Name and Title */}
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: member.color, fontWeight: 500, mb: 2 }}
                  >
                    {member.title}
                  </Typography>

                  {/* Previously At */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: 'text.secondary',
                        letterSpacing: '0.1em',
                        fontSize: '0.7rem',
                        display: 'block',
                        mb: 0.5,
                      }}
                    >
                      Previously at
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.6 }}
                    >
                      {member.previouslyAt}
                    </Typography>
                  </Box>

                  {/* Specialties */}
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    {member.specialties.map((specialty, i) => (
                      <Chip
                        key={i}
                        label={specialty}
                        size="small"
                        sx={{
                          bgcolor: `${member.color}15`,
                          color: member.color,
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>

                  {/* Achievements */}
                  <Box sx={{ mb: 3 }}>
                    {member.achievements.map((achievement, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.5,
                          mb: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: member.color,
                            mt: 0.75,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                          {achievement}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Links */}
                  <Box sx={{ display: 'flex', gap: 1, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                    <IconButton
                      component="a"
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        color: 'text.secondary',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          color: member.color,
                          borderColor: member.color,
                          bgcolor: `${member.color}08`,
                        },
                      }}
                    >
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                    {member.portfolio && (
                      <Box
                        component="a"
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          px: 2,
                          py: 0.75,
                          borderRadius: 1,
                          border: '1px solid',
                          borderColor: 'divider',
                          color: 'text.secondary',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          transition: 'all 0.2s',
                          '&:hover': {
                            color: member.color,
                            borderColor: member.color,
                            bgcolor: `${member.color}08`,
                          },
                        }}
                      >
                        View Portfolio
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Disclaimer */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          sx={{ textAlign: 'center', mt: 2 }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontStyle: 'italic',
              fontSize: '0.8rem',
            }}
          >
            Past employment is individual experience and does not imply endorsement.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CoreTeam;
