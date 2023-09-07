import './App.css';
import AlbumCard from './components/AlbumCard/AlbumCard';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AlbumCard />
    </div>
  );
}

export default App;
