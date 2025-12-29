import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

// Video Analysis AI Case Study Data
const videoAICaseStudy = {
  id: 'video-ai',
  color: '#014584',
  icon: <PlayCircleOutlineIcon sx={{ fontSize: 48 }} />,
  
  // Summary (Always Visible)
  title: 'Video Analysis AI Platform',
  subtitle: 'Intelligent search and moment detection at scale',
  description: 'An AI system that analyzes video streams, detects objects, tracks movement, and identifies patterns. Built to handle millions of hours of video content with sub-second search times.',
  technologies: ['AI/ML', 'Computer Vision', 'Python', 'TensorFlow', 'Real-time Processing', 'Vector Search'],
  results: [
    { metric: '5M+', label: 'Hours of Video Processed' },
    { metric: '<500ms', label: 'Search Response Time' },
    { metric: '95%', label: 'Detection Accuracy' },
  ],
  
  // Expanded Content
  projectSummary: 'We built a video analysis platform that does two things: finds specific moments from massive video libraries and enables intelligent search across actual video content—not just metadata.',
  
  challenges: [
    {
      title: 'Context Length Limits',
      description: 'Videos can run 6-12 hours or longer. No current AI model can fit that much content into its context window. We needed a way to process massive videos without losing important information.',
      icon: <AnalyticsIcon sx={{ fontSize: 32 }} />,
    },
    {
      title: 'Temporal Alignment',
      description: 'A video has multiple data streams: visuals, audio, speech, on-screen text, and metadata. These streams don\'t naturally align in time. Syncing them correctly is critical for accurate analysis.',
      icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
    },
    {
      title: 'Scale',
      description: 'The solution needed to work for millions of hours of video content. That\'s a different engineering problem than a demo that works on 10 videos.',
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
    },
  ],
  
  approach: [
    {
      title: 'Multi-Stream Processing',
      description: 'We created separate processing pipelines for each content stream: visual analysis for object detection and scene understanding, audio analysis for sounds and music, speech transcription for dialogue, and on-screen text extraction (OCR) for embedded information.',
    },
    {
      title: 'Vector Indexing Strategy',
      description: 'We evaluated multiple approaches for creating searchable indexes. The solution uses rich vector embeddings generated from each stream, then merged into a unified index. This allows semantic search—finding content by meaning, not just keywords.',
    },
    {
      title: 'Smart Clustering',
      description: 'We implemented clustering algorithms to group similar segments of video content. This serves two purposes: it identifies recurring patterns and reduces the computational load by processing representative samples rather than every frame.',
    },
    {
      title: 'Model Selection & Fine-Tuning',
      description: 'We explored multiple models for each use case—video analysis, audio analysis, object detection. We then fine-tuned these models for the specific domain, improving accuracy significantly over off-the-shelf solutions.',
    },
    {
      title: 'Algorithmic Efficiency',
      description: 'To work around model context limits, we developed mechanical approaches that reduce the load on AI models. We use less token-intensive streams (like transcription) to guide the heavier analysis, and semantic clustering of vectors to identify what actually needs detailed processing.',
    },
  ],
  
  technicalSolution: [
    {
      title: 'Architecture Overview',
      description: 'The system processes video through multiple parallel pipelines, generates embeddings for each content type, and stores them in a vector database optimized for similarity search. A query router determines the best search strategy based on the user\'s question.',
    },
    {
      title: 'Handling Long-Form Content',
      description: 'For videos exceeding 6 hours, we segment the content into digestible chunks, process each segment independently, then use our clustering algorithms to maintain coherence across the full video. Research papers and our own experimentation guided this approach.',
    },
    {
      title: 'Extensibility',
      description: 'The platform extends to content with minimal metadata—live streams, gaming videos, concerts—where moments are driven by viewer comments at specific timestamps rather than traditional scene detection.',
    },
  ],
  
  useCases: [
    {
      title: 'Smart Moment Detection',
      description: 'Finds the exact moments that matter from millions of hours of video. The system learns preferences and surfaces relevant content automatically.',
      icon: <AutoAwesomeIcon sx={{ fontSize: 24 }} />,
    },
    {
      title: 'Deep Content Search',
      description: 'Search through actual video content, not just titles and descriptions. Find objects, emotions, dialogue, and embedded text across entire libraries.',
      icon: <SearchIcon sx={{ fontSize: 24 }} />,
    },
    {
      title: 'Content Moderation',
      description: 'Automated detection of specific content types, behaviors, or policy violations at scale.',
      icon: <SecurityIcon sx={{ fontSize: 24 }} />,
    },
    {
      title: 'Archive Analysis',
      description: 'Make decades of video content searchable and accessible without manual tagging.',
      icon: <AnalyticsIcon sx={{ fontSize: 24 }} />,
    },
  ],
  
  detailedResults: [
    { metric: '5M+', label: 'Hours', context: 'Total video library the system handles' },
    { metric: '<500ms', label: 'Search Speed', context: 'Response time for complex semantic queries' },
    { metric: '95%', label: 'Detection Accuracy', context: 'Object and scene recognition precision' },
    { metric: '100+', label: 'Concurrent Streams', context: 'Video streams analyzed simultaneously' },
    { metric: '50ms', label: 'Processing Time', context: 'Per-frame analysis latency' },
  ],
  
  techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Vector Databases', 'GPU Clusters', 'Kubernetes', 'Real-time Streaming'],
};

// ATS Case Study Data
const atsCaseStudy = {
  id: 'ats',
  color: '#10B981',
  icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
  
  // Summary (Always Visible)
  title: 'Algorithmic Trading System (ATS)',
  subtitle: 'Automated trading platform',
  description: 'A comprehensive trading automation platform built with microservices architecture, enabling algorithmic trading across multiple financial markets. Features pluggable broker integration, real-time market scanning, and automated strategy execution with robust state management and crash recovery.',
  technologies: ['Django', 'React', 'Redis', 'MySQL', 'Docker', 'WebSocket', 'Microservices', 'Material UI'],
  results: [
    { metric: '6', label: 'Microservices' },
    { metric: '70%', label: 'Test Coverage' },
    { metric: 'Multi-Broker', label: 'Support' },
  ],
  
  // Expanded Content
  projectSummary: 'We built an algorithmic trading system that automates trading strategies across multiple financial markets. The platform features a modular, pluggable architecture allowing seamless integration with various broker APIs—from stock exchanges to cryptocurrency platforms—enabling traders to execute sophisticated strategies 24/7.',
  
  challenges: [
    {
      title: 'Real-Time Market Scanning at Scale',
      description: 'Processing thousands of financial instruments in real-time while maintaining low latency. The system needed to scan multiple markets simultaneously, analyze multi-timeframe data, and detect trading opportunities without overwhelming computational resources.',
      icon: <SpeedIcon sx={{ fontSize: 32 }} />,
    },
    {
      title: 'Multi-Broker Integration',
      description: 'Each broker has different APIs, authentication flows, and data formats. We needed a flexible architecture that could connect to any trading platform without rewriting core logic—supporting stocks, crypto, derivatives, and custom markets.',
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 32 }} />,
    },
    {
      title: 'State Persistence & Crash Recovery',
      description: 'Trading systems must be resilient. If the system crashes mid-trade or during market scanning, it needs to recover gracefully without losing position information, pending orders, or scanner progress. Financial operations cannot afford data loss.',
      icon: <CloudSyncIcon sx={{ fontSize: 32 }} />,
    },
  ],
  
  approach: [
    {
      title: 'Microservices Architecture',
      description: 'Built six independent services communicating via Redis Streams: Gateway Service (auth), Trade Management Unit (sessions/P&L), Scanning Service (market analysis), Initiation Service (entry logic), Integration Service (broker APIs), and Session Monitor (health checks). This isolation enables independent scaling and fault tolerance.',
    },
    {
      title: 'Pluggable Algorithm Framework',
      description: 'Implemented a strategy pattern for trading algorithms. Users select from available scanning, initiation, and termination strategies without code changes. Each algorithm is self-contained, making it easy to add new strategies or customize existing ones for specific markets.',
    },
    {
      title: 'Event-Driven Communication',
      description: 'Used Redis Streams for asynchronous event processing between services. Scanning results trigger initiation events, which trigger execution events. This decoupling allows services to scale independently and provides natural retry mechanisms for failed operations.',
    },
    {
      title: 'State Management with Redis',
      description: 'Implemented checkpoint-based progress tracking stored in Redis. Scanner state, active sessions, and pending operations are persisted continuously. On restart, the system resumes from the last checkpoint, preventing duplicate processing or missed opportunities.',
    },
    {
      title: 'Secure Credential Management',
      description: 'All broker credentials are encrypted at rest using AES Fernet encryption. Credentials are only decrypted during API calls and never exposed in logs. OAuth flows are supported for brokers requiring token-based authentication.',
    },
  ],
  
  technicalSolution: [
    {
      title: 'Container Orchestration',
      description: 'Deployed as a multi-container Docker application with proper dependency management. Services include MySQL database, Redis message broker, main Django API, scanning daemon, and health monitor. Each service has health checks and automatic restart policies.',
    },
    {
      title: 'Real-Time Communication Layer',
      description: 'Built WebSocket gateway using Django Channels for live updates to frontend. Clients subscribe to specific channels (trade updates, scanner events, session status). The system tracks active subscriptions to optimize resource usage—stopping unnecessary processing when no clients are listening.',
    },
    {
      title: 'Comprehensive Testing',
      description: 'Achieved 70% test coverage using Pytest with factory-based test data generation. Unit tests cover core trading logic, integration tests verify service communication, and mocking ensures tests run without external broker connections.',
    },
  ],
  
  useCases: [
    {
      title: 'Multi-Market Trading',
      description: 'Connect to any broker or exchange through the pluggable integration layer. Trade traditional stocks, cryptocurrency, derivatives, or custom instruments from a unified interface.',
      icon: <ShowChartIcon sx={{ fontSize: 24 }} />,
    },
    {
      title: 'Automated Strategy Execution',
      description: 'Run algorithmic trading strategies 24/7 with configurable scanning, entry, and exit logic. The system monitors markets continuously and executes trades based on predefined criteria.',
      icon: <SpeedIcon sx={{ fontSize: 24 }} />,
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Live dashboard showing active sessions, recent trades, P&L tracking, and scanner activity. WebSocket-based updates ensure you always see current system state.',
      icon: <AnalyticsIcon sx={{ fontSize: 24 }} />,
    },
    {
      title: 'Paper Trading Mode',
      description: 'Test strategies with simulated capital before risking real money. Paper trading runs through the same execution pipeline as live trading, ensuring strategy validation.',
      icon: <SecurityIcon sx={{ fontSize: 24 }} />,
    },
  ],
  
  detailedResults: [
    { metric: '6', label: 'Microservices', context: 'Independent scalable services' },
    { metric: '70%', label: 'Test Coverage', context: 'Comprehensive automated testing' },
    { metric: 'Multi-Broker', label: 'Integration', context: 'Pluggable broker architecture' },
    { metric: 'Real-time', label: 'Processing', context: 'Live market scanning and execution' },
    { metric: 'Crash Resilient', label: 'Recovery', context: 'State persistence and auto-resume' },
  ],
  
  techStack: ['Python', 'Django', 'Django REST Framework', 'React', 'Material UI', 'Redis', 'MySQL', 'Docker', 'WebSocket', 'JWT', 'Pytest'],
};

const Portfolio = () => {
  const [expandedStudies, setExpandedStudies] = useState({
    'video-ai': false,
    'ats': false,
  });

  const toggleExpanded = (studyId) => {
    setExpandedStudies((prev) => ({
      ...prev,
      [studyId]: !prev[studyId],
    }));
  };

  const renderCaseStudy = (caseStudy) => {
    const isExpanded = expandedStudies[caseStudy.id];
    
    return (
      <Card
        key={caseStudy.id}
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
            background: caseStudy.id === 'video-ai' 
              ? 'linear-gradient(135deg, #014584 0%, #0260a8 100%)'
              : 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
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
              {caseStudy.icon}
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
                  bgcolor: `rgba(${caseStudy.id === 'video-ai' ? '1, 69, 132' : '16, 185, 129'}, 0.1)`,
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
              onClick={() => toggleExpanded(caseStudy.id)}
              endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{
                borderColor: caseStudy.color,
                color: caseStudy.color,
                '&:hover': {
                  borderColor: caseStudy.color,
                  bgcolor: `rgba(${caseStudy.id === 'video-ai' ? '1, 69, 132' : '16, 185, 129'}, 0.04)`,
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
                  {caseStudy.projectSummary}
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
                  {caseStudy.challenges.map((challenge, i) => (
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
                            bgcolor: `rgba(${caseStudy.id === 'video-ai' ? '1, 69, 132' : '16, 185, 129'}, 0.1)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: caseStudy.color,
                            flexShrink: 0,
                          }}
                        >
                          {challenge.icon}
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
                  {caseStudy.approach.map((item, i) => (
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
                  {caseStudy.technicalSolution.map((item, i) => (
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
                  {caseStudy.useCases.map((useCase, i) => (
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
                            bgcolor: `rgba(${caseStudy.id === 'video-ai' ? '1, 69, 132' : '16, 185, 129'}, 0.1)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: caseStudy.color,
                            flexShrink: 0,
                          }}
                        >
                          {useCase.icon}
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
                  {caseStudy.detailedResults.map((result, i) => (
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
              <Box>
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
                  {caseStudy.techStack.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="medium"
                      sx={{
                        bgcolor: `rgba(${caseStudy.id === 'video-ai' ? '1, 69, 132' : '16, 185, 129'}, 0.1)`,
                        color: caseStudy.color,
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Collapse>
        </Box>
      </Card>
    );
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Our Work & Case Studies | TechSergy</title>
        <meta name="description" content="See what we've built - from AI video analysis platforms processing 5M+ hours to custom web applications. Real projects, real results." />
        <link rel="canonical" href="https://techsergy.com/portfolio" />
      </Helmet>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'background.surface',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/pattern-gradient-mesh.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: '0.12em',
                mb: 2,
                display: 'block',
              }}
            >
              Our Work
            </Typography>
            <Typography variant="h1" sx={{ mb: 3 }}>
              What We've{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Built
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary', fontSize: '1.2rem' }}
            >
              A few examples of what we've built. We're still growing, but we're proud of what we've shipped so far.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Case Studies Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="lg">
          {renderCaseStudy(videoAICaseStudy)}
          {renderCaseStudy(atsCaseStudy)}
        </Container>
      </Box>

      {/* Your Project Could Be Next */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'background.surface',
        }}
      >
        <Container maxWidth="md">
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{
              textAlign: 'center',
              p: { xs: 4, md: 6 },
              border: '2px dashed',
              borderColor: 'divider',
              bgcolor: 'transparent',
              boxShadow: 'none',
              '&:hover': {
                transform: 'none',
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: 'rgba(1, 69, 132, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <LightbulbOutlinedIcon sx={{ fontSize: '2.5rem', color: 'primary.main' }} />
            </Box>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
              Your Project Could Be Next
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 4, maxWidth: 500, mx: 'auto' }}
            >
              We're selective about the projects we take on. If you've got something interesting, let's talk.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ color: 'white' }}
            >
              Start a Conversation
            </Button>
          </Card>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #014584 0%, #0260a8 100%)',
        }}
      >
        <Container maxWidth="md">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h2"
              sx={{ color: 'white', mb: 2, fontWeight: 700 }}
            >
              Got a Project in Mind?
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgba(255, 255, 255, 0.95)', mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Let's talk about your project. No commitment, no hard sell—just a conversation about what you need.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#F59E0B',
                  color: 'white',
                  px: 4,
                  '&:hover': {
                    bgcolor: '#D97706',
                    boxShadow: '0 8px 20px rgba(245, 158, 11, 0.4)',
                  },
                }}
              >
                Start a Project
              </Button>
              <Button
                component={Link}
                to="/services"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  px: 4,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                View Services
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default Portfolio;
