import React from 'react';
import { Award, ArrowLeft, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (view: 'home') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-4 pb-24 bg-white min-h-screen animate-fade-in text-center px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <div className="flex justify-start mb-8 md:mb-12">
            <button 
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
            >
                <ArrowLeft size={16} /> Back to Home
            </button>
        </div>

        <Award size={48} className="mx-auto mb-8 text-black" strokeWidth={1} />
        
        <h1 className="text-3xl md:text-5xl font-display mb-6 text-gray-900">About S3Ts Tech</h1>
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-12">The Future of Ethical Innovation</p>

        <div className="space-y-12 text-sm text-gray-600 leading-loose font-light tracking-wide text-justify md:text-center">
            <p>
                The S3Ts Pro 3.0 is a product of the collective brilliance and dedication of our world-class engineers, scientists, and designers at <strong>S3Ts Tech</strong>. 
                As a premium technology corporation rooted in Saudi Arabia, we pride ourselves on pushing the boundaries of what was previously thought impossible.
            </p>
            
            <div className="border-t border-b border-gray-100 py-12 my-12">
                <h3 className="text-xl font-display mb-4 text-black">Founder & Inventor</h3>
                <p className="text-lg font-light text-gray-800">
                    Abdelwahid Habibullah Adam Banu Hashim
                </p>
                <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
                    Belgian Inventor, Entrepreneur, and Founder
                </p>
            </div>

            <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
                <HeartHandshake size={32} className="mx-auto mb-6 text-gray-400" strokeWidth={1} />
                <h3 className="text-lg font-display mb-6 text-black">A Vision for Humanity</h3>
                <p className="mb-6">
                    S3Ts Tech is driven by a mission to propel Saudi Arabia to the zenith of global leadership—not just economically, but humanly. 
                    We are building a diverse local workforce that champions human rights and dignity.
                </p>
                <p className="font-medium text-gray-900">
                    This technology stands against exploitation.
                </p>
                <p className="mt-4">
                    Unlike traditional tech giants, our supply chain is strictly ethical. We guarantee zero contribution to child labor or human exploitation, 
                    specifically avoiding conflict zones such as the Congo. S3Ts Pro 3.0 is not just a technological marvel; it is a victory for human dignity.
                </p>
            </div>

            <p>
                From the drawing board to the final titanium chassis, every element of the S3Ts Pro 3.0 has been crafted with one goal in mind: 
                To liberate the user from the constraints of traditional technology. No wires. No borders. No limits.
            </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;