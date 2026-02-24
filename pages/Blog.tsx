
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '../types';

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch posts:', err);
        setIsLoading(false);
      });
  }, []);

  const filteredPosts = activeCategory === 'All Posts' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

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
          source: 'blog_newsletter'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setSubscriberName('');
        setSubscriberEmail('');
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Featured Post */}
      <section className="pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group overflow-hidden rounded-3xl bg-surface-light border border-slate-200">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 h-80 lg:h-[500px]">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://picsum.photos/800/800?random=31" alt="Featured" />
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-16">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">Featured Article</span>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">The Future of Local Retail: How AI is Redefining the Customer Experience</h2>
                <button 
                  onClick={() => navigate('/blog/1')}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30 hover:scale-105 transition-transform"
                >
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-8 bg-surface-light border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {['All Posts', 'Automation', 'Local Business', 'AI News', 'Strategy'].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white border border-slate-200 hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border-slate-200 focus:ring-primary text-sm" placeholder="Search insights..." />
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all">
                  <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform" src={post.image} alt={post.title} />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{post.category}</span>
                      <span className="text-xs font-medium text-slate-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors cursor-pointer" onClick={() => navigate(`/blog/${post.id}`)}>{post.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                      <span className="text-xs font-bold text-slate-400">{post.date}</span>
                      <button 
                        onClick={() => navigate(`/blog/${post.id}`)}
                        className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase bg-primary text-white rounded-full">Weekly Insights</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Scale your business with weekly AI tips.</h2>
            
            {isSuccess ? (
              <div className="bg-emerald-500/20 text-emerald-400 p-6 rounded-2xl text-lg font-bold animate-in fade-in zoom-in duration-300 border border-emerald-500/30">
                Success! You're on the list. Keep an eye on your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                  required
                  type="text" 
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-slate-500 focus:ring-primary outline-none" 
                  placeholder="Enter your name" 
                  value={subscriberName}
                  onChange={(e) => setSubscriberName(e.target.value)}
                />
                <input 
                  required
                  type="email" 
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-slate-500 focus:ring-primary outline-none" 
                  placeholder="Enter your business email" 
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                />
                <button 
                  disabled={isSubmitting}
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
