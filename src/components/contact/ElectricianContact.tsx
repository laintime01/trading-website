// src/components/ElectricianContact.tsx
export function ElectricianContact() {
    return (
      <div className="min-h-screen bg-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                24/7 Emergency Service
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">📍</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Address</h3>
                    <p>456 Power Street</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">📱</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p>(555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p>service@powertech.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white placeholder:text-slate-400" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white placeholder:text-slate-400" />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white">
                    <option>Emergency Service</option>
                    <option>Installation</option>
                    <option>Maintenance</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white placeholder:text-slate-400"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }