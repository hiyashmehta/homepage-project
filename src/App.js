import "./App.css";
import Header from "./components/Header";
import HeroComponent from "./components/HeroComponent";
import ServicesComponent from "./components/ServicesComponent";
import ProductsComponent from "./components/ProductsComponent";
import TestimonialsComponent from "./components/TestimonialsComponent";
import ContactUsComponent from "./components/ContactUsComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroComponent />
      <ServicesComponent />
      <ProductsComponent />
      <TestimonialsComponent />
      <ContactUsComponent />
      <Footer />
    </div>
  );
}

export default App;
