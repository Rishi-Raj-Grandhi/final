export interface CMSImage {
  src: string;
  alt: string;
}

export interface BlogPost {
  layout: string;
  title: string;
  pubDate: string;
  description: string;
  author: string;
  excerpt: string;
  image: CMSImage;
  tags: string[];
  body: string;
}

export interface CMSConfig {
  backend: {
    name: string;
    branch: string;
  };
  media_folder: string;
  public_folder: string;
  collections: any[];
}