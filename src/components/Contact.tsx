import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    studentCode: '',
    category: 'general',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('Mensaje enviado correctamente. Te responderemos pronto.')
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'desarrollo.adaptativo@uni.edu.pe',
      subContent: 'Respuesta en 24-48 horas'
    },
    {
      icon: '📞',
      title: 'Teléfono',
      content: '+51 1 481-1070',
      subContent: 'Lun-Vie 8:00 AM - 6:00 PM'
    },
    {
      icon: '📍',
      title: 'Dirección',
      content: 'Av. Túpac Amaru 210',
      subContent: 'Rímac, Lima 25, Perú'
    },
    {
      icon: '🕐',
      title: 'Horario de Atención',
      content: 'Lunes a Viernes',
      subContent: '8:00 AM - 6:00 PM'
    }
  ]

  const faqs = [
    {
      question: '¿Cómo puedo inscribirme en el curso?',
      answer: 'Las inscripciones se realizan a través del sistema de matrícula de la UNI durante el período de matrícula regular. Consulta con tu facultad para más detalles.'
    },
    {
      question: '¿Necesito conocimientos previos de programación?',
      answer: 'Se recomienda tener conocimientos básicos de programación y desarrollo de software. El curso está diseñado para estudiantes de los últimos ciclos de Ingeniería de Sistemas.'
    },
    {
      question: '¿Puedo proponer temas para investigación?',
      answer: 'Sí, alentamos a los estudiantes a proponer temas de investigación. Contacta con el coordinador del curso para discutir tu propuesta.'
    },
    {
      question: '¿Hay certificación al completar el curso?',
      answer: 'El curso es parte del plan curricular regular. Adicionalmente, ofrecemos certificados por participación en proyectos de investigación específicos.'
    }
  ]

  const professors = [
    {
      name: 'Dr. Carlos Mendoza',
      role: 'Coordinador del Curso',
      email: 'cmendoza@uni.edu.pe',
      office: 'Pabellón A, Oficina 302',
      hours: 'Mar y Jue: 2:00 PM - 4:00 PM'
    },
    {
      name: 'Dra. Ana Torres',
      role: 'Profesora de Arquitectura de Software',
      email: 'atorres@uni.edu.pe',
      office: 'Pabellón B, Oficina 215',
      hours: 'Lun y Mie: 10:00 AM - 12:00 PM'
    },
    {
      name: 'Ing. Roberto Vargas',
      role: 'Profesor de DevOps',
      email: 'rvargas@uni.edu.pe',
      office: 'Pabellón A, Oficina 308',
      hours: 'Mie y Vie: 3:00 PM - 5:00 PM'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Contacto</h1>
          <p className="text-gray-600 mt-1">Estamos aquí para ayudarte con cualquier consulta sobre el curso</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-3">{info.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-800 font-medium">{info.content}</p>
              <p className="text-sm text-gray-600 mt-1">{info.subContent}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="studentCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Código de estudiante
                  </label>
                  <input
                    type="text"
                    id="studentCode"
                    name="studentCode"
                    value={formData.studentCode}
                    onChange={handleChange}
                    placeholder="Opcional"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Categoría *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">Consulta General</option>
                  <option value="inscripcion">Inscripción al Curso</option>
                  <option value="investigacion">Propuesta de Investigación</option>
                  <option value="tecnico">Soporte Técnico</option>
                  <option value="colaboracion">Colaboración</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ubicación</h2>
            <div className="aspect-w-16 aspect-h-12 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.128901897813!2d-77.04823492501984!3d-12.034523441475834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf4b9240865b%3A0x1e2203d8e5a5b5e5!2sUniversidad%20Nacional%20de%20Ingenier%C3%ADa!5e0!3m2!1ses!2spe!4v1701123456789!5m2!1ses!2spe"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Cómo llegar:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">🚇</span>
                  <span>Metro de Lima: Estación UNI (Línea 1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">🚌</span>
                  <span>Metropolitano: Estación Caquetá + alimentador</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">🚗</span>
                  <span>Estacionamiento disponible en el campus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professors Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipo Docente</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {professors.map((professor, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-1">{professor.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{professor.role}</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Email:</span>{' '}
                    <a href={`mailto:${professor.email}`} className="text-blue-600 hover:underline">
                      {professor.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Oficina:</span> {professor.office}
                  </p>
                  <p>
                    <span className="font-medium">Horario de atención:</span><br />
                    {professor.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos en redes sociales</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 