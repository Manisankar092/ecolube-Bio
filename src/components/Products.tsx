import React from 'react';
import { File as Oil, Droplet, Gauge } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: "Industrial Bio-Lubricants",
      description: "High-performance, environmentally friendly lubricants for industrial machinery",
      icon: Oil,
      applications: ["Manufacturing", "Heavy Machinery", "Processing Plants"]
    },
    {
      name: "Hydraulic Fluids",
      description: "Biodegradable hydraulic fluids with excellent wear protection",
      icon: Droplet,
      applications: ["Construction", "Marine", "Agriculture"]
    },
    {
      name: "Specialty Lubricants",
      description: "Custom-formulated bio-based lubricants for specific applications",
      icon: Gauge,
      applications: ["Food Processing", "Textile", "Precision Equipment"]
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          
          <div className="grid gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <product.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}