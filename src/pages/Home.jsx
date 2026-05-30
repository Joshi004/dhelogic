import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/common/PageTransition';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import ServicesGrid from '../components/home/ServicesGrid';
import ProblemStatement from '../components/home/ProblemStatement';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedWork from '../components/home/FeaturedWork';
import CTABanner from '../components/home/CTABanner';

const Home = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>TechSergy | AI Inference Cost Reduction</title>
        <meta name="description" content="We cut AI API costs by 60–85%. Fine-tuning, distillation, and self-hosted inference for companies overpaying OpenAI and Anthropic." />
        <link rel="canonical" href="https://techsergy.com/" />
      </Helmet>
      <Hero />
      <ProblemStatement />
      <TrustedBy />
      <ServicesGrid />
      <HowItWorks />
      <FeaturedWork />
      <CTABanner />
    </PageTransition>
  );
};

export default Home;

