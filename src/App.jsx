import './App.css'
import NavLinks from './pages/NavLinks'
import { Routes, Route } from 'react-router-dom'
import Lamarque from './pages/Lamarque'
import Logo from './pages/Logo'
import Lifestyle from './pages/Lifestyle'
import Hypersportscars from './pages/Hypersportscars'
import Newsroom from './pages/Newsroom'
import Store from './pages/Store'

function App() {

  return (
    <>
      <NavLinks />
      <Routes>
        <Route path="/React-LP" element={<Logo />} />
        <Route path="/React-LP/lamarque" element={<Lamarque />} />
        <Route path="/React-LP/lifestyle" element={<Lifestyle />} />
        <Route
          path="/React-LP/hypersportscars"
          element={<Hypersportscars />}
        />
        <Route path="/React-LP/newsroom" element={<Newsroom />} />
        <Route path="/React-LP/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App
