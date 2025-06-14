import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Forums from './components/Forums'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.avif" 
              alt="UNI Logo" 
              className="h-10 w-10 mr-3 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">UNI - Desarrollo Adaptativo</h1>
              <p className="text-sm text-gray-600">Universidad Nacional de Ingeniería</p>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition duration-300`}
            >
              Inicio
            </Link>
            <a href="#articulos" className="text-gray-700 hover:text-blue-600 transition duration-300">Artículos</a>
            <Link 
              to="/foros" 
              className={`${isActive('/foros') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition duration-300`}
            >
              Foros
            </Link>
            <a href="#investigacion" className="text-gray-700 hover:text-blue-600 transition duration-300">Investigación</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition duration-300">Contacto</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <Link 
              to="/" 
              className={`block py-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <a href="#articulos" className="block py-2 text-gray-700 hover:text-blue-600">Artículos</a>
            <Link 
              to="/foros" 
              className={`block py-2 ${isActive('/foros') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Foros
            </Link>
            <a href="#investigacion" className="block py-2 text-gray-700 hover:text-blue-600">Investigación</a>
            <a href="#contacto" className="block py-2 text-gray-700 hover:text-blue-600">Contacto</a>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Universidad Nacional de Ingeniería</h3>
            <p className="text-gray-300">
              Curso de Desarrollo Adaptativo de Software - Promoviendo la 
              excelencia académica en ingeniería de software.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Biblioteca Digital</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Calendario Académico</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Recursos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Soporte</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="text-gray-300 mb-2">📧 desarrollo.adaptativo@uni.edu.pe</p>
            <p className="text-gray-300 mb-2">📞 +51 1 481-1070</p>
            <p className="text-gray-300">📍 Av. Túpac Amaru 210, Lima 25, Perú</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Universidad Nacional de Ingeniería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foros" element={<Forums />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
