import { useState } from 'react'

interface Article {
  id: string
  title: string
  author: string
  authorRole: string
  date: string
  category: string
  readTime: string
  abstract: string
  image: string
  tags: string[]
  featured?: boolean
}

function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Todos los artículos', count: 24 },
    { id: 'metodologias', name: 'Metodologías Ágiles', count: 8 },
    { id: 'arquitectura', name: 'Arquitectura de Software', count: 6 },
    { id: 'devops', name: 'DevOps', count: 5 },
    { id: 'casos', name: 'Casos de Estudio', count: 5 }
  ]

  const articles: Article[] = [
    {
      id: '1',
      title: 'Implementación efectiva de Scrum en equipos distribuidos: Un enfoque adaptativo',
      author: 'Dr. Carlos Mendoza',
      authorRole: 'Profesor de Ingeniería de Software',
      date: '15 Nov 2024',
      category: 'metodologias',
      readTime: '12 min',
      abstract: 'Este artículo examina las estrategias más efectivas para implementar Scrum en equipos distribuidos geográficamente, presentando un marco adaptativo que considera las diferencias culturales, zonas horarias y herramientas de colaboración digital. Coautores: Isaac Adauto Huaman y Jhosep Sosa Palacios.',
      image: 'from-blue-400 to-blue-600',
      tags: ['Scrum', 'Equipos Distribuidos', 'Metodologías Ágiles'],
      featured: true
    },
    {
      id: '2',
      title: 'Microservicios y Event Sourcing: Patrones para sistemas altamente escalables',
      author: 'Ing. Ana Torres',
      authorRole: 'Investigadora Senior',
      date: '12 Nov 2024',
      category: 'arquitectura',
      readTime: '15 min',
      abstract: 'Exploramos cómo combinar la arquitectura de microservicios con Event Sourcing para crear sistemas que no solo escalan horizontalmente, sino que también mantienen un registro completo de todos los cambios de estado.',
      image: 'from-purple-400 to-purple-600',
      tags: ['Microservicios', 'Event Sourcing', 'Arquitectura'],
      featured: true
    },
    {
      id: '3',
      title: 'CI/CD en la era de Kubernetes: Automatización completa del pipeline',
      author: 'Bill Lopez Milla',
      authorRole: 'DevOps Engineer - Estudiante UNI',
      date: '10 Nov 2024',
      category: 'devops',
      readTime: '10 min',
      abstract: 'Una guía práctica para implementar pipelines de CI/CD completamente automatizados utilizando Kubernetes, GitOps y herramientas cloud-native para lograr despliegues seguros y eficientes.',
      image: 'from-green-400 to-green-600',
      tags: ['CI/CD', 'Kubernetes', 'GitOps', 'DevOps']
    },
    {
      id: '4',
      title: 'Transformación Ágil en el sector bancario: Caso de éxito BCP',
      author: 'Angela Pizarro Huarcaya',
      authorRole: 'Consultora Ágil - Egresada UNI',
      date: '8 Nov 2024',
      category: 'casos',
      readTime: '8 min',
      abstract: 'Análisis detallado de cómo el Banco de Crédito del Perú implementó metodologías ágiles en sus equipos de desarrollo, logrando reducir el time-to-market en un 40% y mejorando la satisfacción del cliente.',
      image: 'from-orange-400 to-orange-600',
      tags: ['Transformación Digital', 'Banca', 'Caso de Estudio']
    },
    {
      id: '5',
      title: 'Feature Flags y Continuous Deployment: Reduciendo el riesgo en producción',
      author: 'Roberto Flores Velarde',
      authorRole: 'Tech Lead - Investigador UNI',
      date: '5 Nov 2024',
      category: 'devops',
      readTime: '9 min',
      abstract: 'Cómo implementar un sistema robusto de feature flags que permita despliegues continuos a producción sin comprometer la estabilidad del sistema, incluyendo estrategias de rollback automático.',
      image: 'from-indigo-400 to-indigo-600',
      tags: ['Feature Flags', 'Continuous Deployment', 'DevOps']
    },
    {
      id: '6',
      title: 'Domain-Driven Design en arquitecturas serverless',
      author: 'Ximena Quispe Tenorio',
      authorRole: 'Arquitecta de Software - Estudiante UNI',
      date: '2 Nov 2024',
      category: 'arquitectura',
      readTime: '14 min',
      abstract: 'Exploramos cómo aplicar los principios de Domain-Driven Design en arquitecturas serverless, manteniendo la cohesión del dominio mientras aprovechamos la escalabilidad y eficiencia de las funciones como servicio.',
      image: 'from-pink-400 to-pink-600',
      tags: ['DDD', 'Serverless', 'Arquitectura']
    },
    {
      id: '7',
      title: 'Estrategias de Testing en Desarrollo Adaptativo: Un Enfoque Práctico',
      author: 'Isaac Adauto Huaman',
      authorRole: 'Líder de Investigación - UNI',
      date: '30 Oct 2024',
      category: 'metodologias',
      readTime: '11 min',
      abstract: 'Análisis comprehensivo de estrategias de testing que se adaptan dinámicamente a los cambios del software, incluyendo técnicas de test automation, property-based testing y mutation testing.',
      image: 'from-teal-400 to-teal-600',
      tags: ['Testing', 'Automatización', 'Calidad']
    },
    {
      id: '8',
      title: 'Observabilidad en Sistemas Distribuidos: Métricas, Logs y Trazas',
      author: 'Jhosep Sosa Palacios',
      authorRole: 'Especialista DevOps - Estudiante UNI',
      date: '28 Oct 2024',
      category: 'devops',
      readTime: '13 min',
      abstract: 'Guía práctica para implementar observabilidad completa en arquitecturas de microservicios, cubriendo las mejores prácticas para métricas, logs estructurados y trazabilidad distribuida.',
      image: 'from-amber-400 to-amber-600',
      tags: ['Observabilidad', 'Monitoring', 'Microservicios']
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Artículos Académicos</h1>
          <p className="text-gray-600 mt-1">Investigaciones, análisis y mejores prácticas en desarrollo adaptativo</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Buscar artículos, autores o temas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <svg className="w-6 h-6 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Featured Articles */}
        {!searchTerm && selectedCategory === 'all' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Destacados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map(article => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className={`h-48 bg-gradient-to-r ${article.image}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime} de lectura</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.abstract}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{article.author}</p>
                        <p className="text-sm text-gray-600">{article.authorRole}</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                        Leer más
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h3>
              <nav className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm">{category.count}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags Populares</h3>
                <div className="flex flex-wrap gap-2">
                  {['Scrum', 'DevOps', 'Microservicios', 'CI/CD', 'Arquitectura', 'Kubernetes'].map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Autores Destacados</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">IH</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Isaac Adauto Huaman</p>
                      <p className="text-xs text-gray-600">5 artículos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">RF</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Roberto Flores Velarde</p>
                      <p className="text-xs text-gray-600">4 artículos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">XQ</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Ximena Quispe Tenorio</p>
                      <p className="text-xs text-gray-600">3 artículos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Articles Grid */}
          <main className="lg:col-span-3">
            <div className="grid gap-6">
              {filteredArticles.map(article => (
                <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className={`md:w-48 h-48 md:h-auto bg-gradient-to-r ${article.image} rounded-t-lg md:rounded-l-lg md:rounded-t-none`}></div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{categories.find(c => c.id === article.category)?.name}</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.abstract}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="font-medium text-gray-900">{article.author}</p>
                            <p className="text-sm text-gray-600">{article.authorRole}</p>
                          </div>
                          <div className="flex gap-2">
                            {article.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 font-semibold">
                          Leer artículo →
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                <button className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Articles 