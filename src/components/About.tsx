import React from 'react';
import { Leaf, Recycle, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About EcoLub</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-600">Made from renewable resources with minimal environmental impact</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Biodegradable</h3>
              <p className="text-gray-600">Naturally decomposing products that don't harm the environment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified</h3>
              <p className="text-gray-600">Meeting international standards for eco-friendly lubricants</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                At EcoLube Solutions, we are pioneers in promoting sustainable practices across industries. 
                Our goal is to revolutionize lubrication technology by providing eco-friendly, bio-based 
                alternatives to traditional lubricants.
              </p>
              <p>
                Our innovative platform leverages cutting-edge AI to recommend high-performance bio-lubricants 
                tailored to your specific requirements, ensuring optimal performance without compromising the 
                environment.
              </p>
              <p>
                Join us in creating a greener future. By choosing bio-lubricants, you are contributing to 
                reducing pollution, conserving resources, and protecting our planet for generations to come.
              </p>
              <p>
                We understand that finding the right lubricant for your industrial or automotive applications 
                is a critical task. Our platform simplifies this process, offering tailored suggestions that 
                meet your specific needs—whether you're looking for better performance, biodegradability, or 
                improved cost-efficiency.
              </p>
              <p>
                Bio-lubricants are an essential part of the green transition. They are made from renewable 
                resources, ensuring that they are biodegradable, non-toxic, and safe for aquatic life. By 
                transitioning to bio-based products, industries can reduce their environmental impact and 
                move toward a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}