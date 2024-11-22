// src/components/PlumberContact.tsx
export function PlumberContact() {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Need a Plumber?</h1>
            <div className="inline-flex items-center space-x-4 bg-cyan-50 rounded-full p-2">
              <span className="px-6 py-2 bg-cyan-600 text-white rounded-full">
                Available 24/7
              </span>
              <span className="px-6 py-2 text-cyan-900">
                Fast Response Time
              </span>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <div className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500">
                      <option>Emergency Repair</option>
                      <option>Installation</option>
                      <option>Maintenance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500"></textarea>
                </div>
                
                <button className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700">
                  Request Service
                </button>
              </form>
            </div>
            
            <div className="bg-cyan-50 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-medium text-cyan-900 mb-2">Phone</h3>
                  <p className="text-cyan-700">(555) 234-5678</p>
                </div>
                <div>
                  <h3 className="font-medium text-cyan-900 mb-2">Email</h3>
                  <p className="text-cyan-700">help@plumber.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-cyan-900 mb-2">Address</h3>
                  <p className="text-cyan-700">789 Water Street</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}