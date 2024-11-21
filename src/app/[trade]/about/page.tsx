// src/app/client/about/page.tsx
export default function About() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Our Services</h1>
          
          <div className="prose lg:prose-xl">
            <p className="text-lg text-gray-600 mb-6">
              With over 10 years of experience in the industry, we pride ourselves on delivering exceptional service to homeowners and businesses alike.
            </p>
  
            <div className="grid gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To provide reliable, professional, and high-quality trade services that exceed our clients' expectations.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>Quality Workmanship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>Professional Service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>Reliable Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }