import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/logo.avif" 
                alt="UNI Logo" 
                className="h-10 w-10 mr-3 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">UNI - Desarrollo Adaptativo</h1>
                <p className="text-sm text-gray-600">Universidad Nacional de Ingeniería</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition duration-300">Inicio</a>
              <a href="#articulos" className="text-gray-700 hover:text-blue-600 transition duration-300">Artículos</a>
              <a href="#foros" className="text-gray-700 hover:text-blue-600 transition duration-300">Foros</a>
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
              <a href="#inicio" className="block py-2 text-gray-700 hover:text-blue-600">Inicio</a>
              <a href="#articulos" className="block py-2 text-gray-700 hover:text-blue-600">Artículos</a>
              <a href="#foros" className="block py-2 text-gray-700 hover:text-blue-600">Foros</a>
              <a href="#investigacion" className="block py-2 text-gray-700 hover:text-blue-600">Investigación</a>
              <a href="#contacto" className="block py-2 text-gray-700 hover:text-blue-600">Contacto</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Desarrollo Adaptativo de
            <span className="text-blue-600 block">Software</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explora el futuro del desarrollo de software con metodologías adaptativas. 
            Un espacio académico para compartir conocimiento, investigación y experiencias 
            en el desarrollo ágil y adaptativo de sistemas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Explorar Contenido
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Unirse al Foro
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Plataforma Académica Integral
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Artículos Académicos</h3>
              <p className="text-gray-600">
                Accede a investigaciones y artículos sobre metodologías adaptativas, 
                casos de estudio y mejores prácticas en el desarrollo de software.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Foros de Discusión</h3>
              <p className="text-gray-600">
                Participa en debates académicos, comparte experiencias y 
                colabora con otros estudiantes e investigadores del área.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Investigación</h3>
              <p className="text-gray-600">
                Explora proyectos de investigación en curso, metodologías innovadoras 
                y tendencias emergentes en desarrollo adaptativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Content */}
      <section id="articulos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Contenido Reciente
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">ARTÍCULO</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Introducción a Metodologías Ágiles
                </h3>
                <p className="text-gray-600 mb-4">
                  Una revisión comprehensiva de las metodologías ágiles y su aplicación 
                  en proyectos de desarrollo de software moderno.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">15 Nov 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Leer más</a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <span className="text-sm text-green-600 font-semibold">FORO</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Discusión: Scrum vs Kanban
                </h3>
                <p className="text-gray-600 mb-4">
                  Debate abierto sobre las ventajas y desventajas de diferentes 
                  marcos de trabajo ágiles en diversos contextos.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">12 Nov 2024</span>
                  <a href="#" className="text-green-600 hover:text-green-800 font-semibold">Participar</a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <span className="text-sm text-purple-600 font-semibold">INVESTIGACIÓN</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Adaptabilidad en DevOps
                </h3>
                <p className="text-gray-600 mb-4">
                  Estudio sobre la implementación de prácticas adaptativas 
                  en pipelines de integración y despliegue continuo.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">10 Nov 2024</span>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">Ver estudio</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}

export default App
