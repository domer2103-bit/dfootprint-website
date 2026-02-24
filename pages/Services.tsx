
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Service } from '../types';

interface ServicesProps {
  onOpenBooking: () => void;
}

const services: Service[] = [
  {
    id: 'voice-agents',
    title: 'Voice AI Agents',
    category: 'Automation',
    description: 'Human-Like Voice Automation. Scale your front-desk and outbound operations with intelligent voice agents that sound, think, and react like your best employees.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842809/Voice_AI_agents_jlby5r.jpg',
    detailsText: 'Our Voice AI Agents are designed to handle complex verbal interactions with zero latency. From managing inbound reception to proactive AI follow-up agents, we build custom voice models that integrate directly with your CRM and booking systems.\n\nPricing: Custom based on volume and complexity.'
  },
  {
    id: '1',
    title: 'Rapid Visual A/B Testing',
    category: 'Performance',
    description: 'Stop Guessing. Start Converting. We bridge the gap in visual testing using high-velocity AI generation to produce tailored variations for your specific offer.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842806/Rapid_Visual_A_B_Testing_xasds7.jpg',
    detailsText: 'Most small businesses overlook the power of visual testing due to time and cost. We bridge that gap in hours. Using high-velocity AI generation, we produce "10 Visual Variations" packages tailored to your specific offer. We combine these creatives with precision UTM tracking and Meta/Google experiments, delivering a comprehensive performance report that reveals exactly what resonates with your audience.\n\nPricing: £250–£400 per "Ad Test Pack" (8–12 variants of one core concept).'
  },
  {
    id: '2',
    title: 'Pre-Visualisation for Shoots & Refurbs',
    category: 'Strategy & Visuals',
    description: 'See the Future Before You Build It. Eliminate the risk of expensive redesigns or failed photoshoots with hyper-realistic "result" images of your actual space.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842804/Pre-Visualisation_for_Shoots_Refurbs_rj0o7e.jpg',
    detailsText: 'Eliminate the risk of expensive redesigns or failed photoshoots. Whether you’re planning a salon fit-out, a gym refurb, or a brand photoshoot, we create hyper-realistic "result" images and moodboards using your real space and style references. Visualise lighting, decor, and layouts with absolute clarity before a single penny is spent on construction or crew.\n\nPricing: From £600–£1,200 per project (includes storyboard & 5 high-res "after" renders).'
  },
  {
    id: '3',
    title: 'Brand-Consistent Micro-Content Packs',
    category: 'Creative Production',
    description: 'Your Brand, Multiplied. Stop the cycle of one-off designs. We lock in your brand’s DNA to mass-produce a month’s worth of cohesive content in seconds.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842804/Brand-Consistent_Micro-Content_Packs_nptifx.jpg',
    detailsText: 'Stop the cycle of one-off designs. We lock in your brand’s DNA—colors, vibe, and visual reference—to mass-produce a month’s worth of cohesive content in seconds. From social posts and story backgrounds to YouTube thumbnails and email headers, we provide a consistent, premium aesthetic that builds instant trust.\n\nPricing: £150–£300 per "Micro Pack" (6–8 consistent assets for one offer).'
  },
  {
    id: '4',
    title: 'Local “Micro-Brand” Mascots',
    category: 'Branding',
    description: 'Give Your Business a Pulse. Turn a generic service into a memorable local icon with a distinctive brand mascot tailored for your niche.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842807/Local_Micro-Brand_Mascots_Characters_btd5gn.jpg',
    detailsText: 'We design distinctive brand mascots that turn a generic service into a memorable local icon. From pest control to dental clinics, we create character libraries in multiple poses and moods. These assets are then integrated into your booking flows and physical touchpoints—stickers, signage, and flyers.\n\nPricing: £600–£1,200 "Identity Starter" (Mascot design + brand-matched visuals). Add £150–£300 for full brand guidelines.'
  },
  {
    id: '5',
    title: 'Hyper-Fast Campaign Landing Visuals',
    category: 'Performance',
    description: 'Launch at the Speed of Market. 24-Hour Campaign Launches for seasonal promos and MOT reminders using bespoke hero imagery and high-conversion layouts.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842803/Hyper-Fast_Campaign_Landing_Visuals_vxapfy.jpg',
    detailsText: 'Don\'t let a slow production cycle kill your momentum. We offer "24-Hour Campaign Launches" for seasonal promos and MOT reminders. We generate bespoke hero imagery, section illustrations, and custom icon sets, dropping them directly into our high-conversion landing page frameworks.\n\nPricing: £1,200–£2,500 per campaign (Visuals + Landing Page + Light Copy).'
  },
  {
    id: '6',
    title: 'Educational & Explainer Visual Kits',
    category: 'Content Strategy',
    description: 'Visualise the Process. Simplify the Sale. Turn complex repairs or diagnostics into stylised visual panels that map to your automation funnels.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842800/Educational_Explainer_Visual_Kits_amzxow.jpg',
    detailsText: 'If your customers struggle to understand complex repairs or diagnostics, we turn your process into a series of stylised visual panels. Whether you prefer clean flat illustrations or a "sketch-to-real" aesthetic, these kits map perfectly to your automation funnels.\n\nPricing: £350 per "Visual Process" (5-step stylised panel kit).'
  },
  {
    id: '7',
    title: 'Niche-Specific Template Libraries',
    category: 'Assets',
    description: 'Licensed Assets for Market Leaders. Access exclusive, niche-targeted visual libraries built for estate agents, hair salons, and automotive specialists.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842801/Niche-Specific_Template_Libraries_tiymbn.jpg',
    detailsText: 'Access our exclusive, niche-targeted visual libraries. We build reusable, high-end template packs for estate agents, hair salons, and automotive specialists. These are AI-curated backgrounds and frames designed to give you a month\'s worth of professional social presence.\n\nPricing: £49/month License or £149 One-time Purchase.'
  },
  {
    id: '8',
    title: 'AI-Powered Campaign Chaining',
    category: 'Automation',
    description: 'The Invisible Engine of Growth. We chain advanced visual generation with a custom automation stack to push creatives directly to your ad platforms.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842809/AI-Powered_Campaign_Chaining_xt4jzi.jpg',
    detailsText: 'We don\'t just sell images; we sell outcomes. By chaining advanced visual generation with our custom automation stack (n8n/Make), we push your ready-to-run creatives directly into Meta, Google Ads, and video platforms.\n\nPricing: £1,000+/month "Premium Retainer" (Includes automation, scheduling, and reporting).'
  },
  {
    id: '9',
    title: 'AI-Powered Brand Identity Refresh',
    category: 'Branding',
    description: 'Legacy Soul, Modern Edge. We take your established logo and breathe new life into it using advanced neural rendering in under 48 hours.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842799/AI-Powered_Brand_Identity_Refresh_qlsm1q.jpg',
    detailsText: 'Your brand identity shouldn\'t be a relic of the past. We take your established logo and breathe new life into it using advanced neural rendering. From 2D sketches to hyper-realistic 3D brand assets, we modernise your visual presence in 48 hours.\n\nPricing: £399 per Refresh (3 variations + social kit).'
  },
  {
    id: '10',
    title: 'Automated Video Ad Hooks',
    category: 'Video',
    description: 'Master the First Three Seconds. Generate five unique, high-energy cinematic intros for your product videos to stop the scroll.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842804/Automated_Video_Ad_Hooks_zrumpp.jpg',
    detailsText: 'In a world of infinite scrolling, the hook is everything. We generate five unique, high-energy cinematic intros for your product videos. By testing multiple psychological triggers and visual styles simultaneously, we ensure your message sticks.\n\nPricing: £250 per Hook Pack (5 AI-generated intros for 1 product).'
  },
  {
    id: '11',
    title: 'Multilingual Scaling & AI Dubbing',
    category: 'Localization',
    description: 'Go Global Without the Jetlag. Scale your reach borderlessly with natural AI dubbing and perfect lip-syncing in over 5 languages.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842798/Multilingual_Scaling_AI_Dubbing_kc0tgh.jpg',
    detailsText: 'Scale your reach across borders instantly. Our AI-driven localisation service doesn\'t just translate text; it dubs your video content with perfect lip-syncing and natural tonality in over 5 languages.\n\nPricing: £150 per video/language.'
  },
  {
    id: '12',
    title: 'Monthly Creative Retainers',
    category: 'Strategy',
    description: 'Strategic Vision, AI-Assisted Precision. Ensure your brand never goes stale with a dedicated monthly visual partner for ongoing refreshes.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842805/The_Ghost_Creative_Director_zt6ktf.jpg',
    detailsText: 'Ensure your brand never goes stale with a dedicated monthly visual partner. We provide ongoing creative refreshes, landing page updates, and reporting to keep your marketing engine running at peak performance.\n\nPricing:\n• Starter: £250–£400/month (8–12 visuals + 1 campaign refresh)\n• Standard: £500–£800/month (15–25 visuals + 2 landing updates)\n• Premium: £1,000+/month (Full automation & reporting)'
  },
  {
    id: '13',
    title: 'AI Product Photography Bundles',
    category: 'Photography',
    description: 'One Shot. Infinite Scenes. Place your product in any environment imaginable without the cost of location scouts or studio rentals.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842799/AI_Product_Photography_Bundles_lkhupw.jpg',
    detailsText: 'Stop paying for expensive location scouts and studio rentals. Send us one clean photo of your product, and we’ll place it in any environment imaginable—from high-end kitchens and luxury car interiors to sun-drenched holiday spots.\n\nPricing:\n• Starter Pack (£199): 5 Lifestyle scenes for one product.\n• Variant & Season Pack (£399): 12 Scenes rotating through seasons (Summer, Xmas, Back-to-School).'
  },
  {
    id: '14',
    title: 'Print-on-Demand Preview Kits',
    category: 'Creative Production',
    description: 'Sell the Dream, Not Just the Design. High-end lifestyle previews for PoD products that stand out from generic white backgrounds.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842802/Print-on-Demand_PoD_Preview_Kits_rsjtgg.jpg',
    detailsText: 'Professional mockups that actually sell. We take your designs and generate high-end lifestyle previews on T-shirts, mugs, canvases, and phone cases. Perfect for Etsy sellers looking to stand out from the generic "white background" crowd.\n\nPricing:\n• The Mockup Bundle (£149): 10 unique lifestyle mockups for your design range.'
  },
  {
    id: '15',
    title: 'Brand Mascot & Character Systems',
    category: 'Branding',
    description: 'Your Brand, Animated. Move beyond static logos with a library of 20–50 poses and emotions for your unique brand mascot.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842802/Brand_Mascot_Character_Systems_p5ymk3.jpg',
    detailsText: 'Move beyond static logos. We create a consistent brand mascot with a library of 20–50 poses, emotions, and scenes. Use your character across YouTube, social media, and internal training to build a face for your business.\n\nPricing:\n• Mascot Starter (£599): Character design + 15 basic poses.\n• Full Character System (£1,200): 50 poses, different outfits, and themed scenes.'
  },
  {
    id: '16',
    title: 'Video & Motion (Flow/Veo)',
    category: 'Video',
    description: 'Stop the Scroll with AI Motion. High-impact vertical video ads for TikTok, Reels, and Shorts featuring unboxing and transformations.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842807/Video_Motion_anzh0c.jpg',
    detailsText: 'High-impact vertical video ads for TikTok, Reels, and Shorts. We use AI to generate keyframes and motion, creating unboxing experiences, benefit demonstrations, and "before/after" transformations in seconds.\n\nPricing:\n• Short Ad Hook (£250): One 15s high-energy product ad.\n• The Motion Trio (£600): Three 30s ads with different hooks and music.'
  },
  {
    id: '17',
    title: 'Strategic Pre-Visualisation & Audits',
    category: 'Consulting',
    description: 'See the Result Before the Shoot. Mock up shoot ideas, lighting, and locations to sell bigger, more ambitious sessions to your clients.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842804/Pre-Visualisation_for_Shoots_Refurbs_rj0o7e.jpg',
    detailsText: 'For photographers, salons, and gyms: we mock up your shoot ideas (poses, lighting, locations) so you can sell bigger, more ambitious sessions to your own clients.\n\nPricing:\n• Visual Audit (£299): 3-4 New visual directions for your existing brand assets.\n• Agency Mood-Board Pack (£450): 20+ fast-generated visual directions for creative concepts.'
  },
  {
    id: '18',
    title: 'Local Business Menu & Showcase Boards',
    category: 'Retail & Hospitality',
    description: 'Dynamic Displays for Local Legends. Turn static menus and posters into living digital displays for in-store screens.',
    image: 'https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771842809/Local_Business_Menu_Showcase_Boards_cprb56.jpg',
    detailsText: 'Turn static menus and posters into living digital displays. Perfect for restaurants, salons, and garages. We design the visuals and animate them for your in-store screens.\n\nPricing:\n• Dynamic Menu Board (£350): Animated menu layout with high-end AI food/service photography.\n• Property Showcase (£499): Cinematic "ideal-day" walkthroughs for estate agents and venues.'
  }
];

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const navigate = useNavigate();

  const openDetails = (service: Service) => {
    if (service.id === 'voice-agents') {
      navigate('/services/voice-agents');
      return;
    }
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  const handleInquireNow = () => {
    closeDetails();
    onOpenBooking();
  };

  return (
    <main className="bg-white">
      <header className="pt-24 pb-16 text-center border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Catalog of Capabilities</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            The Full <span className="text-primary">AI Stack</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            19 specialized solutions designed to automate your operations, elevate your brand, and accelerate your growth.
          </p>
        </div>
      </header>

      <div className="divide-y divide-slate-100">
        {services.map((service, index) => (
          <section key={service.id} id={`service-${service.id}`} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-surface-light'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:items-center gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-primary"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">{service.category}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">{service.title}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => openDetails(service)}
                      className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-2 group"
                    >
                      Details
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">info</span>
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative p-3 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl group overflow-hidden">
                    <img 
                      className="w-full h-auto object-contain rounded-3xl group-hover:scale-105 transition-transform duration-700" 
                      src={service.image} 
                      alt={`${service.title} - ${service.category} Solution by DFootprint AI Agency`} 
                    />
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
                      #0{index + 1} Solution
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-24 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white mb-8">Not seeing exactly what you need?</h2>
          <p className="text-slate-400 text-xl mb-10 leading-relaxed">
            We specialize in custom AI engineering. If there's a problem in your business that logic can solve, we can build it.
          </p>
          <button 
            onClick={onOpenBooking}
            className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-primary/30"
          >
            Request Custom Build
          </button>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary px-3 py-1 bg-primary/10 rounded-full">Detailed View & Pricing</span>
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
                <span className="material-symbols-outlined text-lg">category</span>
                {selectedService.category}
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {selectedService.title}
              </h2>
              
              <div className="prose prose-slate max-w-none">
                <div className="w-16 h-1 bg-primary/20 rounded-full mb-8"></div>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                  {selectedService.detailsText}
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleInquireNow}
                  className="flex-1 bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Inquire Now
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
    </main>
  );
};
