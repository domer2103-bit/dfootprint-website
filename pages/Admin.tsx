
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [secret, setSecret] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    category: 'Automation',
    readTime: '5 min read',
    excerpt: '',
    content: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!secret) {
      alert('Please enter the admin passcode.');
      return;
    }
    setIsSubmitting(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('category', formData.category);
    data.append('readTime', formData.readTime);
    data.append('excerpt', formData.excerpt);
    data.append('content', formData.content);
    data.append('secret', secret);
    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        alert('Post published successfully!');
        navigate('/blog');
      } else {
        const errorData = await response.json();
        alert(`Failed to publish post: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-20 bg-surface-light min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-slate-100">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Create New <span className="text-primary">Blog Post</span></h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Admin Passcode</label>
              <input 
                required
                type="password"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none"
                placeholder="Enter secret passcode to publish"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
              <input 
                required
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none"
                placeholder="Enter post title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                <select 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option>Automation</option>
                  <option>Strategy</option>
                  <option>AI News</option>
                  <option>Local Business</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Read Time</label>
                <input 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none"
                  placeholder="e.g. 5 min read"
                  value={formData.readTime}
                  onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Excerpt</label>
              <textarea 
                required
                rows={2}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none resize-none"
                placeholder="Brief summary of the post..."
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Content</label>
              <textarea 
                required
                rows={10}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none resize-none"
                placeholder="Write your full article here..."
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Upload Image</label>
              <div className="relative">
                <input 
                  type="file"
                  accept="image/*"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                  onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Publishing...' : 'Publish Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
