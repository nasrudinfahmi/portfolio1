import Navbar from './components/navbar/Navbar';
import HeroSect from './sections/HeroSect';
import AboutSect from './sections/AboutSect';
import SkillSect from './sections/SkillSect';
import PortfolioSect from './sections/PortfolioSect';
import ContactSect from './sections/ContactSect';

export default function Home() {
  return (
    <main className="pb-20 bg-teal-50/30">
      <Navbar />
      <HeroSect />
      <AboutSect />
      <SkillSect />
      <PortfolioSect />
      <ContactSect />
    </main>
  );
}
