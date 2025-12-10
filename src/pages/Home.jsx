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

