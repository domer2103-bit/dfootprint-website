
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogPost } from '../types';

export const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Post not found');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-40">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 text-center">
        <h2 className="text-3xl font-bold mb-4">Post not found</h2>
        <button 
          onClick={() => navigate('/blog')}
          className="text-primary font-bold hover:underline"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <article>
        {/* Hero Section */}
        <header className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  {post.category}
                </span>
                <span className="text-white/80 text-sm font-medium">
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                <span>By Dominik Wierzchowski</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <button 
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 font-bold text-sm uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Blog
          </button>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-primary pl-6">
              {post.excerpt}
            </p>
            <div className="text-slate-800 leading-relaxed whitespace-pre-wrap text-lg">
              {post.content}
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Dominik" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Written by</p>
                  <p className="text-lg font-extrabold text-slate-900">Dominik Wierzchowski</p>
                </div>
              </div>
              <button 
                onClick={() => navigate('/services')}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all shadow-xl"
              >
                Work with us
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
