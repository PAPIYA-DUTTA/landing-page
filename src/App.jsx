
import FeatureSection from "./Components/FeatureSection";
import Workflow from "./Components/WorkF";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";



const App = () => {
  return (
    <>
    
      <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
         </div>
    </>
  );
};

export default App;