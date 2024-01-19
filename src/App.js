import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import clickingacard from './components/clickingacard';
import './App.css';

function App() {
  return (
    <div className="App">
       <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"></link>
     <Routes>
        {/* route for home  */}
        <Route path="" element={<Home />} />

        {/* route for podcasts */}
        <Route path="Blog" element={<Blog />} />

        {/* route for signin */}
        <Route path="About" element={<About/>}/>

        {/* route for TVshows */}
        <Route path="Contact" element={<Contact/>} />
      </Routes>
      </div>
  );
}

export default App;
