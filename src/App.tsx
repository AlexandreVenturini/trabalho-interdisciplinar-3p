import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PaginaInicial from "./pages/PaginaInicial"
import PaginaBiblioteca from "./pages/PaginaBiblioteca"
import PaginaFavoritos from "./pages/PaginaFavoritos"
import PaginaSobre from "./pages/PaginaSobre"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PaginaErro404 from "./pages/PaginaErro404"
import PaginaIndie from "./pages/PaginaIndie"

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <main className="conteudo">
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/biblioteca" element={<PaginaBiblioteca />} />
            <Route path="/favoritos" element={<PaginaFavoritos />} />
            <Route path="/sobre" element={<PaginaSobre />} />
            <Route path="*" element={<PaginaErro404 />} />
            <Route path="/indie" element={<PaginaIndie />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  )
}

export default App
