import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-lg py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-sans tracking-tight">Youness Khringou</h1>
          <h2 className="text-3xl text-gray-700 mb-4">Apps Developer</h2>
          <p className="text-xl text-gray-600">Apps Development & Management Services</p>
          
          <nav className="mt-12">
            <div className="flex justify-center space-x-12">
              <Link to="/" className="text-gray-900 hover:text-indigo-600 text-lg font-medium transition duration-150 ease-in-out">About Us</Link>
              <Link to="/services" className="text-gray-900 hover:text-indigo-600 text-lg font-medium transition duration-150 ease-in-out">Products and Services</Link>
              <Link to="/best-selling" className="text-gray-900 hover:text-indigo-600 text-lg font-medium transition duration-150 ease-in-out">Best Selling</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/best-selling" element={<BestSelling />} />
        </Routes>
      </main>

      <footer className="bg-gray-900 text-white mt-16 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Contacts</h2>
          <address className="not-italic space-y-4 text-gray-300">
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              75 B LOT SALAM RTE SEFROU APT 2 ETG 1 ET 1, Fes 30000
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +212643792711
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Younes.khringou@hotmail.com
            </p>
          </address>
        </div>
      </footer>
    </div>
  )
}

function About() {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 backdrop-blur-lg bg-opacity-90">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
      <div className="flex items-center space-x-12">
        <div className="flex-1">
          <p className="text-xl text-gray-600 leading-relaxed">
            I am the developer and owner of the apps and games associated with this account. I use this account to receive payments from the app stores and clients who purchase or license my applications. With years of experience in mobile development, I specialize in creating high-quality, user-friendly applications that meet modern business needs.
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
          alt="Developer workspace" 
          className="w-96 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

function Services() {
  const services = [
    {
      title: "Convert Website to Apps",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      description: "Transform your website into powerful native Android and iOS applications, ensuring a seamless user experience across all platforms.",
      price: "Starting from $299",
      features: ["Custom UI/UX Design", "Native Performance", "Push Notifications", "Analytics Integration"]
    },
    {
      title: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      price: "Starting from $699",
      features: ["iOS Development", "Android Development", "Flutter Cross-platform", "React Native Solutions"]
    },
    {
      title: "Shopify to Mobile Apps",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "Convert your Shopify store into a dedicated mobile app, boosting sales and improving customer engagement.",
      price: "Starting from $399",
      features: ["Full Store Integration", "Custom Branding", "Push Notifications", "Analytics Dashboard"]
    }
  ]

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Products and Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-xl font-bold text-indigo-600 mb-4">{service.price}</p>
              {service.description && (
                <p className="text-gray-600 mb-4">{service.description}</p>
              )}
              {service.features && (
                <ul className="mt-4 space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BestSelling() {
  const projects = [
    {
      title: "Scholastic College App",
      subtitle: "Student Management System",
      description: "A comprehensive solution for educational institutions to manage student data, attendance, and academic performance.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      price: "$599",
      features: ["Student Portal", "Attendance Tracking", "Grade Management", "Parent Communication"]
    },
    {
      title: "Taxi App Interface",
      subtitle: "Modern Ride Booking Platform",
      description: "An intuitive taxi booking application with real-time tracking, secure payments, and driver rating system.",
      image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      price: "$699",
      features: ["Real-time Tracking", "Secure Payments", "Driver Rating", "Route Optimization"]
    }
  ]

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Best Selling Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="h-72 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-lg text-indigo-600 mt-2">{project.subtitle}</p>
                </div>
                <p className="text-2xl font-bold text-indigo-600">{project.price}</p>
              </div>
              <p className="text-gray-600 mt-4 mb-6">{project.description}</p>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App