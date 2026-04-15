import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import ContentTabs from "./components/ContentTabs";
import SummaryMap from "./components/SummaryMap";
import ApplicationSection from "./components/ApplicationSection";
import GameSection from "./components/GameSection";
import Footer from "./components/Footer";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import "./styles/layout.css";

function App() {
  useRevealOnScroll();

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ContentTabs />
        <SummaryMap />
        <ApplicationSection />
        <GameSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
