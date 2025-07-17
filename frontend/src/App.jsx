import React from "react";
import HomePage from './Pages/HomePage'
import WhyUsSection from "./components/whyUs";
import FeaturedProperties from "./components/featureProperties";
import YouTubeChannel from "./components/youtube";

function App() {
  return (
    <div>
      <HomePage />
      <WhyUsSection />
      <FeaturedProperties />
      <YouTubeChannel />
    </div>

  );
}

export default App;
