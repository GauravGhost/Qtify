import { useEffect, useState } from 'react';
import './App.css';
import AlbumCard from './components/AlbumCard/AlbumCard';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import { fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const generatedata = async () => {
    const data = await fetchTopAlbums();
    setTopAlbums(data);
  }


  useEffect(() => {
    generatedata();
  }, [])

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div>
        <Section data={topAlbums} title="Top Album" />
      </div>
    </div>
  );
}

export default App;
