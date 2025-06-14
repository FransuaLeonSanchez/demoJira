import { useState } from 'react'

interface Category {
  id: string
  name: string
  description: string
  icon: string
  color: string
  threads: number
  posts: number
  lastPost?: {
    title: string
    author: string
    time: string
  }
}

interface Thread {
  id: string
  title: string
  author: string
  avatar: string
  time: string
  category: string
  tags: string[]
  views: number
  replies: number
  likes: number
  pinned?: boolean
  answered?: boolean
  excerpt: string
}

function Forums() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('recent')

  const categories: Category[] = [
    {
      id: 'metodologias',
      name: 'Metodologías Ágiles',
      description: 'Discusiones sobre Scrum, Kanban, XP y otras metodologías',
      icon: '🏃',
      color: 'blue',
      threads: 45,
      posts: 234,
      lastPost: {
        title: 'Implementación de Scrum en equipos distribuidos',
        author: 'María García',
        time: 'hace 2 horas'
      }
    },
    {
      id: 'devops',
      name: 'DevOps y CI/CD',
      description: 'Automatización, integración continua y despliegue',
      icon: '🔧',
      color: 'green',
      threads: 38,
      posts: 189,
      lastPost: {
        title: 'Pipeline de CI/CD con GitHub Actions',
        author: 'Carlos Mendoza',
        time: 'hace 5 horas'
      }
    },
    {
      id: 'arquitectura',
      name: 'Arquitectura Adaptativa',
      description: 'Patrones, microservicios y arquitecturas evolutivas',
      icon: '🏗️',
      color: 'purple',
      threads: 29,
      posts: 156,
      lastPost: {
        title: 'Migración de monolito a microservicios',
        author: 'Ana Torres',
        time: 'ayer'
      }
    },
    {
      id: 'casos',
      name: 'Casos de Estudio',
      description: 'Experiencias reales y lecciones aprendidas',
      icon: '📚',
      color: 'orange',
      threads: 22,
      posts: 98,
      lastPost: {
        title: 'Caso: Transformación digital en empresa tradicional',
        author: 'Luis Vargas',
        time: 'hace 2 días'
      }
    }
  ]

  const threads: Thread[] = [
    {
      id: '1',
      title: '¿Cómo medir la efectividad de las retrospectivas en Scrum?',
      author: 'Fransua León Sánchez',
      avatar: '👨‍🎓',
      time: 'hace 1 hora',
      category: 'metodologias',
      tags: ['scrum', 'retrospectivas', 'métricas'],
      views: 125,
      replies: 8,
      likes: 15,
      pinned: true,
      excerpt: 'Estoy buscando formas efectivas de medir si nuestras retrospectivas están generando mejoras reales en el equipo...'
    },
    {
      id: '2',
      title: 'Implementación de feature flags para despliegues graduales',
      author: 'Luis Huamán Silva',
      avatar: '👨‍💻',
      time: 'hace 3 horas',
      category: 'devops',
      tags: ['feature-flags', 'deployment', 'best-practices'],
      views: 89,
      replies: 5,
      likes: 12,
      answered: true,
      excerpt: 'Quiero compartir nuestra experiencia implementando feature flags para reducir el riesgo en los despliegues...'
    },
    {
      id: '3',
      title: 'Patrones para manejar la consistencia eventual en microservicios',
      author: 'Víctor Espinoza Valverde',
      avatar: '👨‍🏫',
      time: 'hace 5 horas',
      category: 'arquitectura',
      tags: ['microservicios', 'consistencia', 'patrones'],
      views: 156,
      replies: 12,
      likes: 23,
      excerpt: 'La consistencia eventual es uno de los mayores desafíos al trabajar con microservicios. Aquí algunos patrones...'
    },
    {
      id: '4',
      title: 'Debate: ¿SAFe realmente funciona o es demasiado burocrático?',
      author: 'Alvaro Flores Rivas',
      avatar: '👨‍🎓',
      time: 'hace 8 horas',
      category: 'metodologias',
      tags: ['SAFe', 'escalado', 'debate'],
      views: 234,
      replies: 28,
      likes: 45,
      excerpt: 'He visto opiniones muy divididas sobre SAFe. Algunos dicen que es excelente para escalar, otros que añade demasiada complejidad...'
    },
    {
      id: '5',
      title: 'Tutorial: Configurar pipeline de ML con GitOps',
      author: 'Jhosep Sosa Palacios',
      avatar: '🧑‍💻',
      time: 'ayer',
      category: 'devops',
      tags: ['MLOps', 'GitOps', 'tutorial'],
      views: 178,
      replies: 9,
      likes: 34,
      excerpt: 'Les comparto un tutorial paso a paso para configurar un pipeline de Machine Learning usando principios de GitOps...'
    },
    {
      id: '6',
      title: 'Experiencia migrando de Jenkins a GitHub Actions',
      author: 'Walter Velasquez Solis',
      avatar: '👨‍💻',
      time: 'hace 2 días',
      category: 'devops',
      tags: ['CI/CD', 'GitHub Actions', 'Jenkins', 'migración'],
      views: 145,
      replies: 11,
      likes: 28,
      excerpt: 'Después de 3 años usando Jenkins, migramos completamente a GitHub Actions. Aquí comparto los desafíos, soluciones y lecciones aprendidas...'
    }
  ]

  const filteredThreads = threads.filter(thread => {
    const matchesCategory = selectedCategory === 'all' || thread.category === selectedCategory
    const matchesSearch = thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         thread.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         thread.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedThreads = [...filteredThreads].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return 0
      case 'popular':
        return b.views - a.views
      case 'replies':
        return b.replies - a.replies
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Foros de Discusión</h1>
              <p className="text-gray-600 mt-1">Comparte conocimiento y aprende de la comunidad</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nuevo Tema
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h2>
              
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition duration-200 ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>Todas las categorías</span>
                  <span className="text-sm text-gray-500">
                    {categories.reduce((sum, cat) => sum + cat.threads, 0)}
                  </span>
                </div>
              </button>

              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition duration-200 ${
                    selectedCategory === category.id 
                      ? `bg-${category.color}-50 text-${category.color}-700 font-medium` 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm text-gray-500">{category.threads}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                    </div>
                  </div>
                </button>
              ))}

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Etiquetas populares</h3>
                <div className="flex flex-wrap gap-2">
                  {['scrum', 'devops', 'microservicios', 'agile', 'ci/cd', 'testing'].map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 cursor-pointer transition duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Threads */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Buscar en los foros..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="recent">Más recientes</option>
                  <option value="popular">Más populares</option>
                  <option value="replies">Más respuestas</option>
                </select>
              </div>
            </div>

            {/* Threads List */}
            <div className="space-y-4">
              {sortedThreads.map(thread => (
                <div key={thread.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-3xl">{thread.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {thread.pinned && (
                                <span className="text-blue-600">📌</span>
                              )}
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                                {thread.title}
                              </h3>
                              {thread.answered && (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  ✓ Resuelto
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{thread.excerpt}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <span className="text-gray-500">
                                por <span className="font-medium text-gray-700">{thread.author}</span>
                              </span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-500">{thread.time}</span>
                              <span className="text-gray-500">•</span>
                              <div className="flex flex-wrap gap-2">
                                {thread.tags.map(tag => (
                                  <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span>{thread.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                              <span>{thread.replies}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              <span>{thread.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <span className="px-3 py-2 text-gray-500">...</span>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">8</button>
                <button className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forums 