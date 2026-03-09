import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import News from "../pages/News"
import Press from "../pages/Press"
import Gallery from "../pages/Gallery"
import Contacts from "../pages/Contacts"
import Layout from "../components/layout/Layout"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/vijesti" element={<News />} />
          <Route path="/press" element={<Press />} />
          <Route path="/galerija" element={<Gallery />} />
          <Route path="/kontakti" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;