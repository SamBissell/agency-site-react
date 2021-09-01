import './App.css';
import './Style.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Services from './Services.js';
import Work from './Work.js';
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';



function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
