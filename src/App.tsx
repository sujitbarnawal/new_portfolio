import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-dark-800 dark:text-white transition-colors duration-200">
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Services />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;