
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { BookCallModal } from './components/BookCallModal';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { VoiceAgents } from './pages/VoiceAgents';
import { Admin } from './pages/Admin';
import { PostDetail } from './pages/PostDetail';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Show subscription popup after 5 seconds
    const timer = setTimeout(() => {
      setShowSubscription(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const openBooking = () => setIsBookingOpen(true);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://n8n.srv1179774.hstgr.cloud/webhook/1759db22-821f-4926-929f-36e6d6309dd1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: subscriberName,
          email: subscriberEmail,
          source: 'popup_subscription'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setSubscriberName('');
        setSubscriberEmail('');
        setTimeout(() => {
          setShowSubscription(false);
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
        <Navbar onOpenBooking={openBooking} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={openBooking} />} />
            <Route path="/services" element={<Services onOpenBooking={openBooking} />} />
            <Route path="/services/voice-agents" element={<VoiceAgents />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<PostDetail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>

        <Footer />
        
        <ChatWidget />
        
        <BookCallModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
        />

        {/* Subscription Popup */}
        {showSubscription && (
          <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-[90] max-w-sm mx-auto md:mx-0 w-auto md:w-full animate-in slide-in-from-bottom-5 md:slide-in-from-left-5 duration-500">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 relative group">
              <button 
                onClick={() => setShowSubscription(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-50 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold mb-1 md:mb-2 leading-tight">Scale with weekly AI tips.</h3>
              <p className="text-slate-500 text-xs md:text-sm mb-4 md:mb-6">Join 2,000+ local business owners.</p>
              
              {isSuccess ? (
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm font-bold animate-in fade-in zoom-in duration-300">
                  Thanks for subscribing! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input 
                    required
                    className="w-full bg-slate-50 border-none rounded-xl py-3.5 px-4 text-sm focus:ring-primary" 
                    placeholder="Enter your name" 
                    type="text" 
                    value={subscriberName}
                    onChange={(e) => setSubscriberName(e.target.value)}
                  />
                  <input 
                    required
                    className="w-full bg-slate-50 border-none rounded-xl py-3.5 px-4 text-sm focus:ring-primary" 
                    placeholder="Enter your email" 
                    type="email" 
                    value={subscriberEmail}
                    onChange={(e) => setSubscriberEmail(e.target.value)}
                  />
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
