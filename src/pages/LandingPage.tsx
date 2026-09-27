import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImagePreviewSection from "../components/ImagePreviewSection";
import FeatureSection from "../components/FeatureSection";
import DiscoverMoreSection from "../components/DiscoverMoreSection";
import MapSection from "../components/MapSection";
import ExploreSmarterSection from "../components/ExploreSmarterSection";
import Footer from "../components/Footer";
import BrandOutroSection from "../components/BrandOutroSection";
import bg from "../assets/images/background.png";


export default function LandingPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center -50px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/75" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ImagePreviewSection />
        <FeatureSection />
        <DiscoverMoreSection />
        <MapSection />
        <ExploreSmarterSection />
        <Footer />
        <BrandOutroSection />
      </div>
    </div>
  );
}
