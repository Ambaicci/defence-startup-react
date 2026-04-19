import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatBar from './components/StatBar';
import Problem from './components/Problem';
import System from './components/System';
import AESAI from './components/AESAI';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Competitive from './components/Competitive';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatBar />
      <Problem />
      <System />
      <AESAI />
      <Team />
      <Roadmap />
      <Competitive />
      <Footer />
    </div>
  );
}

export default App;
