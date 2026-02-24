
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Agent {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const agents: Agent[] = [
  {
    id: 'receptionist',
    title: 'AI Receptionist',
    description: 'Never miss a call again. Our AI Receptionist handles inbound inquiries 24/7, answering common questions and routing calls with perfect professional etiquette.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842887/Receptionist_g3fa0e.jpg',
    features: ['24/7 Availability', 'Instant Call Routing', 'FAQ Handling', 'Multi-language Support']
  },
  {
    id: 'support',
    title: 'AI Client Support',
    description: 'Scale your support without scaling your headcount. Intelligent voice agents that can troubleshoot issues, check order statuses, and provide instant resolutions.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842886/Client_support_cbbu9l.jpg',
    features: ['Real-time Troubleshooting', 'CRM Integration', 'Ticket Creation', 'Sentiment Analysis']
  },
  {
    id: 'setter',
    title: 'AI Appointment Setter',
    description: 'Fill your calendar automatically. Our agents engage with leads, qualify their needs, and book appointments directly into your calendar software.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842885/Appointment_setter_qah88s.jpg',
    features: ['Calendar Sync', 'Lead Qualification', 'Automated Follow-ups', 'Zero Latency Response']
  },
  {
    id: 'qualification',
    title: 'Lead Qualification',
    description: 'Stop wasting time on bad leads. Our AI agents call new sign-ups instantly to verify intent, budget, and timeline before passing them to your sales team.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842886/Lead_qualification_pf8qcm.jpg',
    features: ['Instant Outreach', 'Custom Scoring', 'Data Enrichment', 'Seamless Handover']
  },
  {
    id: 'reactivation',
    title: 'AI Follow-up Agent',
    description: 'Turn your "dead" database into gold. Our agents reach out to old leads with personalized offers, reigniting interest and booking new business from your existing assets.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842886/Lead_follow-up_qrbfqr.jpg',
    features: ['Database Mining', 'Personalized Offers', 'High Conversion Scripts', 'ROI Tracking']
  }
];

export const VoiceAgents: React.FC = () => {
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (showHint) {
      const timer = setTimeout(() => setShowHint(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showHint]);

  const handleDeploy = () => {
    setShowHint(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-white relative">
      {/* Floating Hint Overlay */}
      {showHint && (
        <div className="fixed top-24 right-8 z-[100] animate-in slide-in-from-top-4 duration-500">
          <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Next Step</span>
              <span className="text-lg font-extrabold">talk to our AI agent</span>
            </div>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-bounce">
              <span className="material-symbols-outlined text-white">north_east</span>
            </div>
          </div>
          {/* Arrow pointing to the top right button */}
          <div className="absolute -top-2 right-12 w-4 h-4 bg-slate-900 rotate-45 border-t border-l border-white/10"></div>
        </div>
      )}

      <header className="pt-24 pb-16 text-center border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-bold text-sm uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Services
          </button>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Voice AI Ecosystem</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            The <span className="text-primary">Voice Agent</span> Fleet
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Five specialized voice models designed to handle every stage of your customer journey with human-like precision and infinite scalability.
          </p>
        </div>
      </header>

      <div className="divide-y divide-slate-100">
        {agents.map((agent, index) => (
          <section key={agent.id} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-surface-light'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:items-center gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-primary"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">Agent Type 0{index + 1}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">{agent.title}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    {agent.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {agent.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3 text-slate-700 font-medium">
                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button 
                    className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
                    onClick={handleDeploy}
                  >
                    Deploy This Agent
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">rocket_launch</span>
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative p-3 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl group overflow-hidden">
                    <img 
                      className="w-full h-auto object-contain rounded-3xl group-hover:scale-105 transition-transform duration-700" 
                      src={agent.image} 
                      alt={`${agent.title} - Specialized AI Voice Agent for Business Automation`} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-24 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white mb-8">Ready to automate your voice operations?</h2>
          <p className="text-slate-400 text-xl mb-10 leading-relaxed">
            Our engineers can have your first custom voice agent live and taking calls in as little as 7 days.
          </p>
          <button 
            onClick={() => navigate('/services')}
            className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-primary/30"
          >
            Explore Other Services
          </button>
        </div>
      </section>
    </main>
  );
};
