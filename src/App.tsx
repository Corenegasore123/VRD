import FeatureSection from "./components/FeatureSection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

const App = () => {
  return (
    <div>
      <>
        <Header />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
        </div>
      </>
    </div>
  )
}

export default App