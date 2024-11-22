// src/components/CarpenterContact.tsx
export function CarpenterContact() {
    return (
      <div className="min-h-screen bg-amber-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-amber-800 p-12 text-white">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-amber-200">123 Woodcraft Lane</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-amber-200">info@woodcraft.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p className="text-amber-200">(555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border rounded-lg"></textarea>
                  </div>
                  <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }