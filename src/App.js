import "./App.css";
import About from "./components/About";
import BlogList from "./components/BlogCard";
import Footer from "./components/Footer";
import History from "./components/History";
import MainMilestones from "./components/MainMilestones";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Started from "./components/Started";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Nav />
      <Service />
      <History />
      <About />
      <Started />
      <MainMilestones />
      <Pricing />
      <Newsletter />
      <Testimonial />
      <BlogList />
      <Footer/>
    </div>
  );
}

export default App;
