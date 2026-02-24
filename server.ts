import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_FILE = path.join(__dirname, 'posts.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR);
}

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
});

// Initialize posts.json if it doesn't exist
if (!fs.existsSync(POSTS_FILE)) {
  const initialPosts = [
    {
      id: '1',
      title: '5 Automation Hacks for Small Businesses to Save 10+ Hours Weekly',
      category: 'Automation',
      readTime: '5 min read',
      date: 'Oct 18, 2023',
      excerpt: 'Learn the simple workflows you can implement today to reclaim your time.',
      image: 'https://picsum.photos/600/400?random=21',
      content: 'Automation is no longer just for big corporations. Small businesses can leverage simple tools to save hours of manual work every week. Here are five hacks you can implement today...\n\n1. Email Filtering: Use rules to sort your inbox automatically.\n2. Appointment Scheduling: Stop the back-and-forth with tools like Calendly.\n3. Social Media Posting: Batch your content and schedule it in advance.\n4. Invoice Reminders: Automate follow-ups for unpaid bills.\n5. Customer FAQs: Use a simple chatbot to answer common questions.'
    },
    {
      id: '2',
      title: 'Building an AI-First Culture: Why It Matters for Main Street',
      category: 'Strategy',
      readTime: '12 min read',
      date: 'Oct 12, 2023',
      excerpt: 'Why adoption starts with mindset, not just tools. Preparing your team.',
      image: 'https://picsum.photos/600/400?random=22',
      content: 'Adopting AI is as much about culture as it is about technology. For local businesses, the transition can feel daunting, but it starts with a simple shift in mindset. Your team needs to see AI as a collaborator, not a replacement...\n\nEducation is key. Start with small wins and celebrate them. Encourage experimentation and provide the training necessary for your staff to feel confident using these new tools.'
    },
    {
      id: '3',
      title: 'The Best AI Tools for Small Business Owners in 2024',
      category: 'AI News',
      readTime: '4 min read',
      date: 'Oct 05, 2023',
      excerpt: 'A curated list of battle-tested tools that actually deliver ROI.',
      image: 'https://picsum.photos/600/400?random=23',
      content: 'The AI landscape is changing fast. In 2024, several tools have emerged as clear winners for small business owners looking for real return on investment. From content creation to data analysis, these are the tools we recommend...\n\n- ChatGPT for drafting and brainstorming.\n- Midjourney for high-quality visual assets.\n- Zapier for connecting your apps and automating workflows.\n- Fireflies.ai for transcribing and summarizing meetings.'
    }
  ];
  fs.writeFileSync(POSTS_FILE, JSON.stringify(initialPosts, null, 2));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use('/uploads', express.static(UPLOADS_DIR));

  // API Routes
  app.get('/api/posts', (req, res) => {
    try {
      const data = fs.readFileSync(POSTS_FILE, 'utf-8');
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: 'Failed to read posts' });
    }
  });

  app.get('/api/posts/:id', (req, res) => {
    try {
      const data = fs.readFileSync(POSTS_FILE, 'utf-8');
      const posts = JSON.parse(data);
      const post = posts.find((p: any) => p.id === req.params.id);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to read post' });
    }
  });

  // Webhook endpoint for automated posts (e.g., from n8n or GravityWrite)
  app.post('/api/webhook/post', (req, res) => {
    try {
      const { title, excerpt, content, category, readTime, image, secret } = req.body;
      
      const adminSecret = process.env.ADMIN_SECRET || 'admin123';
      if (secret !== adminSecret) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      if (!title || !excerpt || !content) {
        return res.status(400).json({ error: 'Title, excerpt, and content are required' });
      }

      const data = fs.readFileSync(POSTS_FILE, 'utf-8');
      const posts = JSON.parse(data);
      
      const postWithId = {
        id: Date.now().toString(),
        title,
        excerpt,
        content,
        category: category || 'AI News',
        readTime: readTime || '5 min read',
        image: image || 'https://picsum.photos/600/400?random=' + Math.floor(Math.random() * 100),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
      };

      posts.unshift(postWithId);
      fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
      res.status(201).json({ success: true, post: postWithId });
    } catch (error) {
      console.error('Webhook post error:', error);
      res.status(500).json({ error: 'Failed to process automated post' });
    }
  });

  app.post('/api/posts', upload.single('image'), (req, res) => {
    try {
      const { title, excerpt, content, category, readTime, secret } = req.body;
      
      // Simple security check
      const adminSecret = process.env.ADMIN_SECRET || 'admin123';
      if (secret !== adminSecret) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      if (!title || !excerpt || !content) {
        return res.status(400).json({ error: 'Title, excerpt, and content are required' });
      }

      const data = fs.readFileSync(POSTS_FILE, 'utf-8');
      const posts = JSON.parse(data);
      
      const postWithId = {
        id: Date.now().toString(),
        title,
        excerpt,
        content,
        category: category || 'General',
        readTime: readTime || '5 min read',
        image: req.file ? `/uploads/${req.file.filename}` : 'https://picsum.photos/600/400?random=1',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
      };

      posts.unshift(postWithId);
      fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
      res.status(201).json(postWithId);
    } catch (error) {
      console.error('Save error:', error);
      res.status(500).json({ error: 'Failed to save post' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
