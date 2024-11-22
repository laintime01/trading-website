// src/components/HVACContact.tsx
export function HVACContact() {
    return (
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                    Schedule a Service
                  </h2>
                  
                  <div className="space-y-8 text-gray-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-400">🏢</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Corporate Office</h3>
                        <p>321 Climate Control Ave</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-400">⏰</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Working Hours</h3>
                        <p>24/7 Emergency Service</p>
                        <p>Mon-Fri: 8am - 6pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-400">📞</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Contact Info</h3>
                        <p>(555) 345-6789</p>
                        <p>service@hvac.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="px-4 py-3 bg-gray-100 rounded-xl"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="px-4 py-3 bg-gray-100 rounded-xl"
                    />
                  </div>
                  
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl"
                  />
                  
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl"
                  />
                  
                  <select className="w-full px-4 py-3 bg-gray-100 rounded-xl">
                    <option>Select Service</option>
                    <option>AC Installation</option>
                    <option>Heating Repair</option>
                    <option>Maintenance</option>
                  </select>
                  
                  <textarea 
                    placeholder="Message" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl"
                  ></textarea>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl hover:from-emerald-700 hover:to-cyan-700">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }