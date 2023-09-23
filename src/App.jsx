import { useEffect, useState } from 'react';
import styles from './App.module.css';

import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import { fetchGenreList, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';

import FAQAccordion from './components/FAQ/FAQAccordion.jsx';
import GenreSection from './components/GenreSection/GenreSection';


function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genreList, setGenreList] = useState([]);
  
  const generatedata = async () => {
    setTopAlbums(await fetchTopAlbums());
    setNewAlbums(await fetchNewAlbums());
    setSongs(await fetchSongs());
    setGenreList(await fetchGenreList());
  }


  useEffect(() => {
    generatedata();
  }, [])

  return (
    <div className={styles.app}>
      <NavBar songs={songs}/>
      <HeroSection />
      <div style={{marginBottom: '30px'}}>
        <Section data={topAlbums} title="Top Albums" />
      </div>
      <div style={{marginBottom: '30px'}}>
        <Section data={newAlbums} title="New Albums" />
      </div>
      <hr className={styles.divider} />
      <div>
        <GenreSection data={songs} title="Songs" genreList={genreList} />
      </div>
      <hr className={styles.divider} />
      <FAQAccordion />
    </div>
  );
}

export default App;
