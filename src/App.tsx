import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"

const App = () => {
  return (
    <div>
      <>
        <Header />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </>
    </div>
  )
}

export default App