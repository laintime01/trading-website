// src/components/PlumberTemplate.tsx
export function PlumberTemplate() {
    return (
      <div className="min-h-screen bg-white">
        <section className="relative h-[80vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-cyan-700" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485 1.415 1.415L34.828.828 32 0zm-6.485 0L16.828 8.687l1.414 1.414 8.485-8.485L25.515 0zm12.97 0l8.485 8.485-1.414 1.415-8.485-8.485L38.485 0zm18.657 0l-1.414 1.414 2.243 2.243L60 1.828V0h-2.858zM0 0c.453 4.973 3.886 9.522 8.97 10.495l2.828-2.828C7.719 7.07 4.973 4.324 4.324 0H0zm0 60c.453-4.973 3.886-9.522 8.97-10.495l2.828 2.828C7.719 52.93 4.973 55.676 4.324 60H0zM60 0c-.453 4.973-3.886 9.522-8.97 10.495l-2.828-2.828c4.079-.597 6.825-3.343 7.474-7.667H60zm0 60c-.453-4.973-3.886-9.522-8.97-10.495l-2.828 2.828c4.079.597 6.825 3.343 7.474 7.667H60zM39.9 16.385l1.414-1.414 2.243 2.243-1.414 1.414-2.243-2.243zm-19.8 0L18.385 16.9l-2.243 2.243 1.414 1.414 2.243-2.243zM40.657 15.628l2.828-2.828 2.243 2.243-2.828 2.828-2.243-2.243zM20.343 15.628l-2.828-2.828-2.243 2.243 2.828 2.828 2.243-2.243zM42.9 18.627l1.414-1.414 2.243 2.243-1.414 1.414-2.243-2.243z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }} />
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="w-full max-w-3xl mx-auto text-center text-white">
              <span className="inline-block bg-cyan-600 text-sm px-4 py-1 rounded-full mb-6">
                Available 24/7 for Emergencies
              </span>
              <h1 className="text-5xl font-bold mb-6">Professional Plumbing Services</h1>
              <p className="text-xl mb-8 max-w-xl mx-auto">
                Expert solutions for all your plumbing needs
              </p>
              <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur rounded-full p-1">
                <button className="px-6 py-2 bg-cyan-600 text-white rounded-full">
                  Emergency Service
                </button>
                <button className="px-6 py-2 text-white rounded-full hover:bg-white/10">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'Emergency Repairs',
                'Installation',
                'Maintenance',
                'Leak Detection',
                'Water Heaters',
                'Remodeling'
              ].map((service, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-4">{service}</h3>
                  <p className="text-gray-600">Professional service guaranteed</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }