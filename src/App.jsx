import CustomCursor from "./components/CustomCursor";
import ReadingProgress from "./components/ReadingProgress";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import QuoteCarousel from "./components/QuoteCarousel";
import BookShowcase from "./components/BookShowcase";
import StorySection from "./components/StorySection";
import AuthorSection from "./components/AuthorSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-dark-brown text-ivory">
      <CustomCursor />
      <ReadingProgress />
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <QuoteCarousel />
        <BookShowcase />
        <StorySection />
        <AuthorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
