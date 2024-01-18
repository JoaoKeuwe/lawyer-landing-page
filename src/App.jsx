import "./App.css";
import AboutUs from "./components/about-us";
import BlogSection from "./components/blog-section";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container-hero">
        <Hero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <BlogSection />
      </div>
      <div>
        <Experience />
      </div>
    </div>
  );
}

export default App;
