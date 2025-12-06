import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'store' | 'investors') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleLinkClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    
    if (linkName === 'Investors') {
      onNavigate('investors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (linkName === 'Contact Us') {
      window.location.href = "mailto:elhabibullah@gmail.com?subject=Inquiry%20regarding%20S3Ts%20Pro%203.0";
    } else if (linkName === 'Pro 3.0') {
      onNavigate('store');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // For demo purposes for other links
      console.log(`Navigating to ${linkName}`);
    }
  };

  const footerLinks = {
    'S3Ts Products': ['Pro 3.0', 'Pro 3.0 Transparent', 'Holo-Headset', 'Solar Case'],
    'Support': ['Concierge', 'Service Centers', 'Contact Us', 'Recycling', 'Authentication'],
    'Explore': ['Neural OS', 'Manifesto', 'Sustainability', 'Investors', 'Press'],
    'Legal': ['Privacy', 'Terms', 'Warranty']
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Brand */}
        <div className="mb-16">
            <h2 className="text-3xl font-display font-bold tracking-[0.2em] mb-4">S3Ts</h2>
            <p className="text-gray-500 text-xs tracking-widest uppercase max-w-sm leading-relaxed">
                Pioneering the post-silicon era with holographic interfaces and infinite energy systems.
            </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-gray-900 pt-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-white">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-xs tracking-wide text-gray-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-900 pt-12">
          
          <div className="flex gap-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 hover:text-white transition-colors">
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
              ))}
          </div>

          <div className="text-[10px] text-gray-600 tracking-widest uppercase">
             © 2025 S3Ts Tech Corp.
          </div>

          <div className="flex items-center gap-2 text-gray-500 hover:text-white cursor-pointer transition-colors">
              <span className="text-xs tracking-wide">Saudi Arabia (EN)</span>
              <ChevronDown size={14} />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;