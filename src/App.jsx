import { useState } from 'react'
import { Leaf, Droplets, Sun, TrendingUp, Users, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('¡Gracias por tu interés! Te contactaremos pronto.')
      setFormData({ name: '', email: '', message: '' })
    } else {
      alert('Por favor completa todos los campos')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">AgroTech</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-green-600 transition">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-green-600 transition">Servicios</a>
              <a href="#beneficios" className="text-gray-700 hover:text-green-600 transition">Beneficios</a>
              <a href="#contacto" className="text-gray-700 hover:text-green-600 transition">Contacto</a>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Empezar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Innovación en
                <span className="text-green-600"> Agricultura Sostenible</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformamos la agricultura con tecnología de punta, maximizando rendimientos mientras cuidamos el medio ambiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition flex items-center justify-center">
                  Conocer más
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition">
                  Ver demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-600 rounded-3xl h-96 flex items-center justify-center">
                <Leaf className="w-64 h-64 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Soluciones integrales para el campo moderno</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Riego Inteligente</h3>
              <p className="text-gray-600">
                Sistemas automatizados que optimizan el uso del agua según las necesidades específicas de cada cultivo.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoreo Climático</h3>
              <p className="text-gray-600">
                Estaciones meteorológicas que predicen condiciones climáticas para tomar decisiones informadas.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis de Suelo</h3>
              <p className="text-gray-600">
                Tecnología de sensores para analizar nutrientes y optimizar la fertilización de tus cultivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegirnos?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Aumento de Productividad</h3>
                    <p className="text-gray-600">Incrementa tus rendimientos hasta un 40% con nuestras tecnologías.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ahorro de Recursos</h3>
                    <p className="text-gray-600">Reduce el consumo de agua y fertilizantes hasta en un 50%.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sostenibilidad Certificada</h3>
                    <p className="text-gray-600">Prácticas amigables con el medio ambiente y certificaciones internacionales.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-12 flex items-center justify-center">
              <Users className="w-64 h-64 text-green-600/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">Estamos listos para ayudarte a transformar tu campo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition font-medium"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contacto@agrotech.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
                  <p className="text-gray-600">+591 3 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-gray-600">Santa Cruz de la Sierra, Bolivia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold">AgroTech</span>
          </div>
          <p className="text-gray-400 mb-4">Innovación sostenible para el campo del futuro</p>
          <p className="text-gray-500 text-sm">© 2026 AgroTech. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App