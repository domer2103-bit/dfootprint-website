
import React, { useState } from 'react';

interface Package {
  id: string;
  title: string;
  price: string;
  description: string;
  details: string;
  image: string;
  tag: string;
  features: { icon: string; text: string }[];
}

const packages: Package[] = [
  {
    id: 'refresh',
    title: 'The "Visual Refresh"',
    price: 'Starting at £299',
    tag: 'Boutique & Cafe Focus',
    description: 'Elegant, AI-enhanced branding for high-end retail and hospitality.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771880863/the_22Visual_Refresh_22_Starter_o12jjh.jpg',
    features: [
      { icon: 'palette', text: 'Elegant, AI-enhanced branding for high-end retail and hospitality.' },
      { icon: 'tablet_mac', text: 'Multi-device visual optimization for web and mobile customer journeys.' }
    ],
    details: `Imagine walking into your business and feeling that same spark of pride you had on day one, but amplified. 

The "Visual Refresh" isn't just about new pictures; it's about reclaiming your time and your brand's soul. Stop spending your late nights struggling with Canva or worrying if your social media looks "cheap." 

We take the creative weight off your shoulders, giving you a premium, high-end aesthetic that commands respect and attracts better customers. This means less time pixel-pushing and more time actually running your shop, or better yet, getting home in time for dinner without a "to-do" list haunting your thoughts.`
  },
  {
    id: 'launch',
    title: 'The "Launch Kit"',
    price: 'Custom Campaign Strategy',
    tag: 'High Conversion Focus',
    description: 'Full-funnel campaign visuals designed for rapid local business growth.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771880862/The_22Campaign_Launch_Kit_22_Growth_fbln9i.jpg',
    features: [
      { icon: 'ads_click', text: 'Full-funnel campaign visuals designed for rapid local business growth.' },
      { icon: 'rocket_launch', text: 'High-impact landing pages that turn local interest into loyal customers.' }
    ],
    details: `You started this business to be the expert in your field, not to become a full-time marketing manager. 

The "Launch Kit" is your shortcut to growth without the burnout. We build the entire engine—from the "stop-the-scroll" visuals to the high-conversion landing pages—so you don't have to. 

Picture your phone buzzing with new inquiries while you're actually focused on your clients, or spending a Saturday morning with your family instead of stressing over your next ad campaign. We give you the professional edge of a big-budget agency at a fraction of the cost, letting you scale your dream while we handle the digital heavy lifting.`
  },
  {
    id: 'partner',
    title: 'The "Growth Partner"',
    price: 'Monthly Retainer',
    tag: 'Enterprise Logic',
    description: 'Continuous AI-driven performance tracking and asset generation.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771880862/The_22Monthly_Visual_Partner_22_Scale_sngzup.jpg',
    features: [
      { icon: 'query_stats', text: 'Continuous AI-driven performance tracking and asset generation.' },
      { icon: 'hub', text: 'Full automation of backend leads and frontend visual consistency.' }
    ],
    details: `The biggest stress for any local business owner is the "feast or famine" cycle. One month you're flying, the next you're wondering where the customers went. 

As your "Growth Partner," we become the invisible engine that keeps your business moving forward 24/7. This is the ultimate peace of mind. No more "marketing panic" when things get quiet. No more wondering if your brand is going stale. 

We provide constant, high-level creative and strategic support, essentially acting as your dedicated marketing department. This allows you to step out of the "daily grind" and into the role of a true CEO. Reclaim your weekends, eliminate the anxiety of the unknown, and watch your business grow with a partner who is as invested in your success as you are.`
  }
];

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const openDetails = (pkg: Package) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  const handleTalkToUs = () => {
    closeDetails();
    onOpenBooking();
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Founder Focus
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Hi, I'm <span className="text-primary">Dominik</span>
            </h1>
            <div className="space-y-6 text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              <p>
                I'm the founder of DFootprint, an AI agency born out of a simple realization: small and local businesses are being left behind in the AI revolution.
              </p>
              <p>
                My passion lies in taking the "scary" out of technology. I've spent years obsessing over how automation can solve real-world problems.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={onOpenBooking}
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
                >
                  Any questions? Chat to me
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-[600px] object-cover"
                poster="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800"
              >
                <source src="https://res.cloudinary.com/dtr0kdeh3/video/upload/v1770823622/The_man_turns_202602111051_a3ha9_t7qoia.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-8 right-8">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-primary/20 shadow-xl">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Founder & AI Strategist</p>
                  <p className="text-lg font-bold">Dominik Wierzchowski</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-surface-light border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-8">format_quote</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight italic">
            "My mission is to bridge the gap between complex AI technology and local business success."
          </h2>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter">Core Values</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group p-8 rounded-3xl hover:bg-surface-light transition-all">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-100 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">psychology</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Expertise</h3>
              <p className="text-slate-600">Helping you navigate the complex world of automation with clarity, precision, and state-of-the-art tools.</p>
            </div>
            <div className="text-center group p-8 rounded-3xl hover:bg-surface-light transition-all">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-100 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">trending_up</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Growth</h3>
              <p className="text-slate-600">We help you scale through efficiency, ensuring every technological investment drives measurable business value.</p>
            </div>
            <div className="text-center group p-8 rounded-3xl hover:bg-surface-light transition-all">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-100 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">person_pin_circle</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalized Approach</h3>
              <p className="text-slate-600">No cookie-cutter templates. Direct communication and custom-tailored solutions that fit your business DNA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Packages */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-slate-900">AI Visual & Strategy Packages</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Elevate your physical business into the digital future with bespoke AI-generated visual assets and conversion strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <div key={pkg.id} className={`flex flex-col bg-white rounded-[2rem] overflow-hidden border ${pkg.id === 'launch' ? 'border-2 border-primary shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-lg'} hover:shadow-2xl transition-all group`}>
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={pkg.image} 
                    alt={`${pkg.title} - AI Strategy Package for Local Businesses`} 
                  />
                  {pkg.id === 'launch' && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">Most Popular</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-primary px-3 py-1 rounded-full">{pkg.tag}</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-extrabold mb-2 text-slate-900 leading-tight">{pkg.title}</h3>
                  <p className="text-primary font-bold text-lg mb-6">{pkg.price}</p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl">{feature.icon}</span>
                        <span className="text-sm text-slate-600 leading-snug">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => openDetails(pkg)}
                    className={`w-full font-bold py-4 rounded-xl transition-all shadow-md ${pkg.id === 'launch' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-slate-900 text-white hover:bg-primary'}`}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary px-3 py-1 bg-primary/10 rounded-full">Package Details & Vision</span>
              </div>
              <button 
                onClick={closeDetails}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-slate-400">close</span>
              </button>
            </div>
            
            <div className="p-10 max-h-[80vh] overflow-y-auto scrollbar-hide">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-lg">auto_awesome</span>
                {selectedPackage.tag}
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 leading-tight">
                {selectedPackage.title}
              </h2>
              <p className="text-primary font-bold text-xl mb-8">{selectedPackage.price}</p>
              
              <div className="prose prose-slate max-w-none">
                <div className="w-16 h-1 bg-primary/20 rounded-full mb-8"></div>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                  {selectedPackage.details}
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleTalkToUs}
                  className="flex-1 bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Talk to us
                </button>
                <button 
                  onClick={closeDetails}
                  className="px-8 py-4 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Impact Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center lg:text-left">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Take the first step</span>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">Ready to transform your brand?</h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Let's discuss how we can blend your physical business expertise with our AI creative engine to unlock unprecedented growth.
              </p>
            </div>
            <button 
              onClick={onOpenBooking}
              className="bg-primary text-white px-12 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/40 hover:scale-105 transition-transform"
            >
              Talk to us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
