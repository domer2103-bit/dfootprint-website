
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  detailsText: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
