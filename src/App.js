import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MoviePage from "./pages/MoviePage";
import Movies from './pages/Movies';
import Search from './pages/Search';

function App() {
  return (
    <div className="flex bg-black min-h-screen">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MoviePage type="movie"/>} />
          <Route path="/tv/:id" element={<MoviePage type="tv" />} />
          <Route path="/tv-series" element={<Movies />} />
        </Routes>
      </div>
    </div>
  )
}

export default App; 
