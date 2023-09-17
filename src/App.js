import './App.css';
import Anime from './components/Anime';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PageSection from './components/PageSection';
import TopAnime from './components/TopAnime';

function App() {
  return (
    <div className="App bg-black">
      <HeroSection />
      <TopAnime byFilter={'airing'} sectionTitle={"Watch Now!"} />
      <TopAnime byFilter={'bypopularity'} sectionTitle={"Most Popular!"} />
      <PageSection title={'惡鬼滅殺'} quote={"Set your heart ablaze."} />
      <Header title='Search Anime' />
      <Anime />
      <Footer />
    </div>
  );
}

export default App;
