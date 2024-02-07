import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import KeyPoints from './components/KeyPoints';
import InvestorsSection from './components/InvestorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <KeyPoints />
      <InvestorsSection />
      <ContactSection />
      <Footer />
    </>
    
  );
}

export default App;
