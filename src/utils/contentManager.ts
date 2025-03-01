// Content management utility functions
// This simulates a backend database using localStorage

// Content types
export type ContentType = 'page' | 'blog' | 'testimonial' | 'media';

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  content: string;
  slug: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  image?: string;
  category?: string;
  tags?: string[];
  position?: string; // For testimonials
  company?: string; // For testimonials
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'document';
  title: string;
  url: string;
  thumbnailUrl?: string;
  fileSize?: number;
  dimensions?: string;
  uploadedAt: string;
  uploadedBy: string;
}

// Initialize localStorage with default content if empty
export const initializeContent = () => {
  // Check if content already exists
  if (!localStorage.getItem('tredumo_content')) {
    // Default pages
    const defaultPages: ContentItem[] = [
      {
        id: '1',
        type: 'page',
        title: 'Home',
        content: 'Welcome to Tredumo, the revolutionary education management platform.',
        slug: 'home',
        author: 'Admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '2',
        type: 'page',
        title: 'About',
        content: 'Tredumo was founded in 2022 with a mission to transform education management.',
        slug: 'about',
        author: 'Admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '3',
        type: 'page',
        title: 'Privacy Policy',
        content: 'At Tredumo, we take your privacy seriously. This policy explains how we collect and use your data.',
        slug: 'privacy',
        author: 'Admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '4',
        type: 'page',
        title: 'Terms of Service',
        content: 'By using Tredumo, you agree to these terms of service.',
        slug: 'terms',
        author: 'Admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    // Default blog posts
    const defaultBlogPosts: ContentItem[] = [
      {
        id: '5',
        type: 'blog',
        title: 'The Future of Education Management',
        content: 'Explore how AI is transforming education management systems worldwide.',
        slug: 'future-education-management',
        author: 'Admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        featured: true,
        category: 'Technology',
        tags: ['AI', 'Education', 'Future']
      },
      {
        id: '6',
        type: 'blog',
        title: 'Streamlining Admissions Processes',
        content: 'Learn how to improve your institution\'s admissions workflow.',
        slug: 'streamlining-admissions',
        author: 'Admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        category: 'Best Practices',
        tags: ['Admissions', 'Workflow', 'Efficiency']
      }
    ];

    // Default testimonials
    const defaultTestimonials: ContentItem[] = [
      {
        id: '7',
        type: 'testimonial',
        title: 'Transformed Our Institution',
        content: 'Tredumo has completely transformed how we manage our educational processes.',
        slug: 'testimonial-1',
        author: 'Jude Lubega',
        position: 'Vice Chancellor',
        company: 'Nkumba University',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '8',
        type: 'testimonial',
        title: 'Incredible Analytics',
        content: 'The AI-driven insights have helped us identify areas for improvement that we never would have noticed otherwise.',
        slug: 'testimonial-2',
        author: 'Hakim Mulinde',
        position: 'CTO',
        company: 'Nkumba University',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    // Default media
    const defaultMedia: MediaItem[] = [
      {
        id: '9',
        type: 'image',
        title: 'Dashboard Preview',
        url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=200',
        dimensions: '1920x1080',
        uploadedAt: new Date().toISOString(),
        uploadedBy: 'Admin'
      },
      {
        id: '10',
        type: 'image',
        title: 'Analytics Dashboard',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200',
        dimensions: '1920x1080',
        uploadedAt: new Date().toISOString(),
        uploadedBy: 'Admin'
      }
    ];

    // Save to localStorage
    const allContent = [...defaultPages, ...defaultBlogPosts, ...defaultTestimonials];
    localStorage.setItem('tredumo_content', JSON.stringify(allContent));
    localStorage.setItem('tredumo_media', JSON.stringify(defaultMedia));
  }
};

// Get all content
export const getAllContent = (): ContentItem[] => {
  const content = localStorage.getItem('tredumo_content');
  return content ? JSON.parse(content) : [];
};

// Get content by type
export const getContentByType = (type: ContentType): ContentItem[] => {
  const allContent = getAllContent();
  return allContent.filter(item => item.type === type);
};

// Get content by ID
export const getContentById = (id: string): ContentItem | null => {
  const allContent = getAllContent();
  const content = allContent.find(item => item.id === id);
  return content || null;
};

// Get content by slug
export const getContentBySlug = (slug: string): ContentItem | null => {
  const allContent = getAllContent();
  const content = allContent.find(item => item.slug === slug);
  return content || null;
};

// Create new content
export const createContent = (content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>): ContentItem => {
  const allContent = getAllContent();
  
  const newContent: ContentItem = {
    ...content,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  allContent.push(newContent);
  localStorage.setItem('tredumo_content', JSON.stringify(allContent));
  
  return newContent;
};

// Update content
export const updateContent = (id: string, updates: Partial<ContentItem>): ContentItem | null => {
  const allContent = getAllContent();
  const index = allContent.findIndex(item => item.id === id);
  
  if (index === -1) return null;
  
  const updatedContent = {
    ...allContent[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  allContent[index] = updatedContent;
  localStorage.setItem('tredumo_content', JSON.stringify(allContent));
  
  return updatedContent;
};

// Delete content
export const deleteContent = (id: string): boolean => {
  const allContent = getAllContent();
  const filteredContent = allContent.filter(item => item.id !== id);
  
  if (filteredContent.length === allContent.length) return false;
  
  localStorage.setItem('tredumo_content', JSON.stringify(filteredContent));
  return true;
};

// Get all media
export const getAllMedia = (): MediaItem[] => {
  const media = localStorage.getItem('tredumo_media');
  return media ? JSON.parse(media) : [];
};

// Get media by ID
export const getMediaById = (id: string): MediaItem | null => {
  const allMedia = getAllMedia();
  const media = allMedia.find(item => item.id === id);
  return media || null;
};

// Add media
export const addMedia = (media: Omit<MediaItem, 'id' | 'uploadedAt'>): MediaItem => {
  const allMedia = getAllMedia();
  
  const newMedia: MediaItem = {
    ...media,
    id: Date.now().toString(),
    uploadedAt: new Date().toISOString()
  };
  
  allMedia.push(newMedia);
  localStorage.setItem('tredumo_media', JSON.stringify(allMedia));
  
  return newMedia;
};

// Delete media
export const deleteMedia = (id: string): boolean => {
  const allMedia = getAllMedia();
  const filteredMedia = allMedia.filter(item => item.id !== id);
  
  if (filteredMedia.length === allMedia.length) return false;
  
  localStorage.setItem('tredumo_media', JSON.stringify(filteredMedia));
  return true;
};

// Generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Get recent updates
export const getRecentUpdates = (limit: number = 5): ContentItem[] => {
  const allContent = getAllContent();
  return allContent
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
};

// Get content stats
export const getContentStats = () => {
  const allContent = getAllContent();
  const allMedia = getAllMedia();
  
  return {
    pages: allContent.filter(item => item.type === 'page').length,
    blogPosts: allContent.filter(item => item.type === 'blog').length,
    testimonials: allContent.filter(item => item.type === 'testimonial').length,
    media: allMedia.length
  };
};