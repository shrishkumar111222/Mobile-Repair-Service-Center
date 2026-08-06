import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import MobileRepair from '@/components/MobileRepair';
import LaptopRepair from '@/components/LaptopRepair';
import ScreenReplacement from '@/components/ScreenReplacement';
import BatterySection from '@/components/BatterySection';
import WaterDamage from '@/components/WaterDamage';
import ChipLevelLab from '@/components/ChipLevelLab';
import GenuineParts from '@/components/GenuineParts';
import RepairProcess from '@/components/RepairProcess';
import BeforeAfter from '@/components/BeforeAfter';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import Warranty from '@/components/Warranty';
import CostEstimator from '@/components/CostEstimator';
import Gallery from '@/components/Gallery';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import MapSection from '@/components/MapSection';
import Emergency from '@/components/Emergency';
import WithoutWithWebsite from '@/components/WithoutWithWebsite';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <MobileRepair />
        <LaptopRepair />
        <ScreenReplacement />
        <BatterySection />
        <WaterDamage />
        <ChipLevelLab />
        <GenuineParts />
        <RepairProcess />
        <BeforeAfter />
        <WhyChooseUs />
        <Reviews />
        <Warranty />
        <CostEstimator />
        <Gallery />
        <Faq />
        <Contact />
        <MapSection />
        <Emergency />
        <WithoutWithWebsite />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
