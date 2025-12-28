import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/common/PageTransition';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import ServicesGrid from '../components/home/ServicesGrid';
import FeaturedWork from '../components/home/FeaturedWork';
import WhyUs from '../components/home/WhyUs';
import CTABanner from '../components/home/CTABanner';

const Home = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>TechSergy | IT Consultancy & Software Development</title>
        <meta name="description" content="A lean team of developers building AI/ML solutions, web apps, and providing IT consulting. Direct communication, no overhead. 24h response time." />
        <link rel="canonical" href="https://techsergy.com/" />
      </Helmet>
      <Hero />
      <TrustedBy />
      <ServicesGrid />
      <FeaturedWork />
      <WhyUs />
      <CTABanner />
    </PageTransition>
  );
};

export default Home;

