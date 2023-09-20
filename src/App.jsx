import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Card from './components/Card/Card';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import { fetchGenreList, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';
import GenreSection from './components/genreSection/GenreSection';
import FAQAccordion from './components/FAQ/FAQAccordion.jsx';

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

  console.log(genreList);
  return (
    <div className={styles.app}>
      <NavBar />
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
