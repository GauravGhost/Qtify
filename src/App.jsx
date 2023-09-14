import { useEffect, useState } from 'react';
import './App.css';
import AlbumCard from './components/AlbumCard/AlbumCard';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import { fetchTopAlbums } from './api/api';

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
      <div style={{display:'flex'}}>
        {topAlbums.map((item) => {
          return (
            <AlbumCard key={item.id} data={item} type="album" />
          )
        })}

      </div>
    </div>
  );
}

export default App;
