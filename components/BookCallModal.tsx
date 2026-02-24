
import React, { useState, useRef, useEffect } from 'react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Country {
  name: string;
  code: string;
  prefix: string;
  flag: string;
}

const countries: Country[] = [
  { name: 'United Kingdom', code: 'GB', prefix: '+44', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'United States', code: 'US', prefix: '+1', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'Poland', code: 'PL', prefix: '+48', flag: 'https://flagcdn.com/w40/pl.png' },
  { name: 'Germany', code: 'DE', prefix: '+49', flag: 'https://flagcdn.com/w40/de.png' },
  { name: 'France', code: 'FR', prefix: '+33', flag: 'https://flagcdn.com/w40/fr.png' },
  { name: 'Spain', code: 'ES', prefix: '+34', flag: 'https://flagcdn.com/w40/es.png' },
  { name: 'Italy', code: 'IT', prefix: '+39', flag: 'https://flagcdn.com/w40/it.png' },
  { name: 'Canada', code: 'CA', prefix: '+1', flag: 'https://flagcdn.com/w40/ca.png' },
  { name: 'Australia', code: 'AU', prefix: '+61', flag: 'https://flagcdn.com/w40/au.png' },
  { name: 'Ireland', code: 'IE', prefix: '+353', flag: 'https://flagcdn.com/w40/ie.png' },
];

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        <div className="flex justify-end p-4 pb-0">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-slate-400">close</span>
          </button>
        </div>
        
        <div className="px-8 pb-10 pt-2 flex flex-col items-center text-center">
          <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
            <span className="material-symbols-outlined text-primary text-3xl font-bold">call</span>
          </div>
          
          <h2 className="text-[#181611] text-3xl font-extrabold leading-tight tracking-tight mb-3">
            Talk to our AI agent
          </h2>
          
          <p className="text-[#4b4739] text-base font-medium leading-relaxed mb-8 px-2">
            Enter your phone number below and my AI assistant will call you instantly to ask a few questions, allowing us to personalise your strategy and offer.
          </p>
          
          <div className="w-full space-y-6">
            <div className="flex flex-col text-left">
              <label className="text-sm font-bold text-[#181611] mb-2 ml-1">Phone Number</label>
              <div className="flex items-center group relative">
                {/* Prefix Selector */}
                <div ref={dropdownRef} className="relative">
                  <button 
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="relative flex items-center justify-center h-14 px-4 bg-slate-50 border border-[#e6e3db] border-r-0 rounded-l-xl hover:bg-slate-100 transition-colors"
                  >
                    <img 
                      alt={selectedCountry.name} 
                      className="w-6 h-4 object-cover rounded-sm mr-2 shadow-sm" 
                      src={selectedCountry.flag} 
                    />
                    <span className="text-sm font-bold text-[#181611]">{selectedCountry.prefix}</span>
                    <span className="material-symbols-outlined text-xs ml-1 text-gray-400 transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}>
                      expand_more
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-[#e6e3db] rounded-xl shadow-xl z-10 py-2 max-h-60 overflow-y-auto scrollbar-hide animate-in fade-in slide-in-from-top-2 duration-200">
                      {countries.map((c) => (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(c);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 transition-colors text-left"
                        >
                          <img src={c.flag} alt={c.name} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                          <span className="flex-grow text-sm font-medium text-slate-700">{c.name}</span>
                          <span className="text-sm font-bold text-primary">{c.prefix}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <input 
                  className="flex-1 h-14 px-4 border border-[#e6e3db] rounded-r-xl text-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-400" 
                  placeholder="000 000 000" 
                  type="tel"
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 text-left px-1">
              <input 
                id="call-consent"
                type="checkbox" 
                checked={isConsentChecked}
                onChange={(e) => setIsConsentChecked(e.target.checked)}
                className="mt-1 w-5 h-5 text-primary border-[#e6e3db] rounded focus:ring-primary transition-all cursor-pointer"
              />
              <label htmlFor="call-consent" className="text-sm text-[#4b4739] leading-tight cursor-pointer font-medium selection:bg-transparent">
                I consent to receive an immediate AI phone call to discuss my inquiry.
              </label>
            </div>
            
            <button 
              disabled={!isConsentChecked}
              className={`w-full h-14 font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg ${
                isConsentChecked 
                  ? 'bg-primary hover:bg-[#C19A2E] text-white shadow-primary/20 active:scale-[0.98]' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <span>Receive a Call Now</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          
          <div className="mt-8 flex items-start gap-3 px-4">
            <span className="material-symbols-outlined text-gray-400 text-sm mt-0.5">verified_user</span>
            <p className="text-[12px] text-gray-500 font-medium leading-normal text-left">
              My AI voice agent will call you immediately. No marketing spam, just a quick chat to get you booked in. By clicking above, you agree to our Terms.
            </p>
          </div>
        </div>
        
        <div className="h-1.5 w-full bg-slate-100">
          <div className="h-full bg-primary transition-all duration-1000 ease-out" style={{ width: isOpen ? '66%' : '0%' }}></div>
        </div>
      </div>
    </div>
  );
};
