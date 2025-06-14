import { useState } from 'react'

interface Research {
  id: string
  title: string
  leadResearcher: string
  team: string[]
  status: 'en-progreso' | 'completado' | 'publicado'
  startDate: string
  endDate?: string
  abstract: string
  objectives: string[]
  methodology: string
  funding?: string
  publications?: number
  tags: string[]
  progress?: number
}

function Research() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedArea, setSelectedArea] = useState('all')

  const researches: Research[] = [
    {
      id: '1',
      title: 'Framework Adaptativo para la Migración de Arquitecturas Monolíticas a Microservicios',
      leadResearcher: 'Isaac Adauto Huaman',
      team: ['Roberto Flores Velarde', 'Walter Velasquez Solis', 'Luis Huamán Silva'],
      status: 'en-progreso',
      startDate: 'Enero 2024',
      abstract: 'Esta investigación propone un framework adaptativo que guía la migración gradual de sistemas monolíticos hacia arquitecturas de microservicios, considerando factores técnicos, organizacionales y de negocio.',
      objectives: [
        'Desarrollar un modelo de evaluación de madurez para migración',
        'Crear patrones reutilizables de descomposición de monolitos',
        'Validar el framework en empresas del sector financiero peruano'
      ],
      methodology: 'Investigación aplicada con enfoque mixto, combinando análisis cuantitativo de métricas de software y estudios de caso cualitativos en empresas locales.',
      funding: 'CONCYTEC - Proyecto PROCIENCIA 2024',
      tags: ['Microservicios', 'Arquitectura', 'Migración'],
      progress: 65
    },
    {
      id: '2',
      title: 'Implementación de DevSecOps en Organizaciones Gubernamentales: Un Enfoque Adaptativo',
      leadResearcher: 'Dr. Roberto Vargas',
      team: ['Bill Lopez Milla', 'Fransua León Sánchez', 'Víctor Espinoza Valverde'],
      status: 'en-progreso',
      startDate: 'Marzo 2024',
      abstract: 'Investigación enfocada en desarrollar un modelo adaptativo de implementación de DevSecOps específicamente diseñado para las restricciones y requerimientos de seguridad del sector público peruano.',
      objectives: [
        'Analizar las barreras de adopción de DevSecOps en el sector público',
        'Diseñar un roadmap adaptativo de implementación',
        'Desarrollar herramientas de automatización de seguridad'
      ],
      methodology: 'Action Research en colaboración con tres entidades gubernamentales piloto, aplicando ciclos iterativos de implementación y mejora.',
      funding: 'Fondo de Investigación UNI 2024',
      tags: ['DevSecOps', 'Seguridad', 'Gobierno Digital'],
      progress: 40
    },
    {
      id: '3',
      title: 'Métricas de Efectividad en Equipos Ágiles Distribuidos: Un Estudio Longitudinal',
      leadResearcher: 'Dra. Patricia Fernández',
      team: ['Ximena Quispe Tenorio', 'Angela Pizarro Huarcaya', 'Alvaro Flores Rivas'],
      status: 'completado',
      startDate: 'Junio 2023',
      endDate: 'Octubre 2024',
      abstract: 'Estudio longitudinal de 18 meses que analiza la evolución de métricas de productividad y colaboración en equipos ágiles distribuidos, identificando factores críticos de éxito.',
      objectives: [
        'Identificar métricas clave de efectividad en equipos distribuidos',
        'Analizar el impacto de herramientas de colaboración',
        'Proponer un modelo predictivo de éxito de equipos'
      ],
      methodology: 'Estudio longitudinal con 12 equipos de desarrollo de 4 empresas diferentes, recolectando datos cuantitativos mensuales y entrevistas trimestrales.',
      publications: 3,
      tags: ['Equipos Ágiles', 'Métricas', 'Trabajo Remoto'],
      progress: 100
    },
    {
      id: '4',
      title: 'Aplicación de IA en la Automatización de Pruebas de Software Adaptativo',
      leadResearcher: 'Dr. Fernando Chen',
      team: ['Ing. Sofía Vargas', 'Ing. Ricardo López', 'Bach. María Torres'],
      status: 'en-progreso',
      startDate: 'Agosto 2024',
      abstract: 'Investigación sobre la aplicación de técnicas de Machine Learning para la generación automática de casos de prueba adaptativos que evolucionen con el software.',
      objectives: [
        'Desarrollar algoritmos de ML para generación de casos de prueba',
        'Crear un framework de pruebas auto-adaptativas',
        'Validar la efectividad en proyectos reales'
      ],
      methodology: 'Investigación experimental con desarrollo de prototipos y validación empírica en proyectos de software de código abierto.',
      funding: 'Google Research Awards 2024',
      tags: ['IA', 'Testing', 'Machine Learning'],
      progress: 25
    },
    {
      id: '5',
      title: 'Patrones de Arquitectura Serverless para Aplicaciones de Alto Rendimiento',
      leadResearcher: 'Ing. Alexandra Gutiérrez',
      team: ['Dr. Manuel Pérez', 'Ing. Diana Romero'],
      status: 'publicado',
      startDate: 'Enero 2023',
      endDate: 'Diciembre 2023',
      abstract: 'Catálogo comprehensivo de patrones arquitectónicos para implementar aplicaciones serverless que requieren alto rendimiento y baja latencia.',
      objectives: [
        'Documentar patrones serverless para alto rendimiento',
        'Desarrollar benchmarks de rendimiento',
        'Crear guías de implementación práctica'
      ],
      methodology: 'Investigación descriptiva basada en análisis de casos y benchmarking de implementaciones reales en AWS, Azure y GCP.',
      publications: 5,
      tags: ['Serverless', 'Arquitectura', 'Cloud Computing'],
      progress: 100
    }
  ]

  const filteredResearches = researches.filter(research => {
    const matchesStatus = selectedStatus === 'all' || research.status === selectedStatus
    const matchesArea = selectedArea === 'all' || research.tags.some(tag => tag.toLowerCase().includes(selectedArea.toLowerCase()))
    return matchesStatus && matchesArea
  })

  const getStatusBadge = (status: string) => {
    const styles = {
      'en-progreso': 'bg-blue-100 text-blue-800',
      'completado': 'bg-green-100 text-green-800',
      'publicado': 'bg-purple-100 text-purple-800'
    }
    const labels = {
      'en-progreso': 'En Progreso',
      'completado': 'Completado',
      'publicado': 'Publicado'
    }
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Investigación</h1>
          <p className="text-gray-600 mt-1">Proyectos de investigación en desarrollo adaptativo de software</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado del Proyecto</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Todos los estados</option>
                <option value="en-progreso">En Progreso</option>
                <option value="completado">Completados</option>
                <option value="publicado">Publicados</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Área de Investigación</label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Todas las áreas</option>
                <option value="arquitectura">Arquitectura</option>
                <option value="devops">DevOps</option>
                <option value="ágil">Metodologías Ágiles</option>
                <option value="ia">Inteligencia Artificial</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Proponer Investigación
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <p className="text-gray-600">Proyectos Activos</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <p className="text-gray-600">Completados 2024</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
            <p className="text-gray-600">Publicaciones</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">S/. 450K</div>
            <p className="text-gray-600">Financiamiento</p>
          </div>
        </div>

        {/* Research Projects */}
        <div className="space-y-6">
          {filteredResearches.map(research => (
            <div key={research.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{research.title}</h3>
                    <div className="flex items-center gap-4 mb-3">
                      {getStatusBadge(research.status)}
                      <span className="text-sm text-gray-600">
                        {research.startDate} - {research.endDate || 'Presente'}
                      </span>
                      {research.funding && (
                        <span className="text-sm text-green-600 font-medium">
                          💰 {research.funding}
                        </span>
                      )}
                    </div>
                  </div>
                  {research.progress !== undefined && (
                    <div className="text-center ml-6">
                      <div className="relative w-20 h-20">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="#3b82f6"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 36}`}
                            strokeDashoffset={`${2 * Math.PI * 36 * (1 - research.progress / 100)}`}
                            className="transition-all duration-500"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-semibold">{research.progress}%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-4">{research.abstract}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Objetivos:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {research.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Metodología:</h4>
                  <p className="text-gray-600">{research.methodology}</p>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="text-sm text-gray-900 font-medium">
                      Investigador Principal: {research.leadResearcher}
                    </p>
                    <p className="text-sm text-gray-600">
                      Equipo: {research.team.join(', ')}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {research.publications && (
                      <span className="text-sm text-gray-600">
                        📄 {research.publications} publicaciones
                      </span>
                    )}
                    <div className="flex gap-2">
                      {research.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">
                      Ver detalles →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Tienes una idea de investigación?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Únete a nuestros grupos de investigación o propón tu propio proyecto. 
            Colabora con profesores y estudiantes para avanzar el conocimiento en desarrollo adaptativo de software.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Contactar al Departamento de Investigación
          </button>
        </div>
      </div>
    </div>
  )
}

export default Research 