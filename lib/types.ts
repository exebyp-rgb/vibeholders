import { ArchetypeType } from './constants/archetypes';

// Database types matching Supabase schema
export interface Creator {
  id: string;
  username: string;
  archetype: ArchetypeType;
  vibe_tags: string[];
  avatar_url: string | null;
  photo_url: string | null;
  position_x: number;
  position_y: number;
  last_active: string;
  cta_text: string | null;
  cta_link: string | null;
  bio: string | null;
  instagram: string | null;
  twitter: string | null;
  youtube: string | null;
  tiktok: string | null;
  website: string | null;
  followers: number;
  created_at: string;
}

// Form data for creating/updating creator
export interface CreatorFormData {
  username: string;
  archetype: ArchetypeType;
  vibe_tags?: string[];
  avatar_url?: string;
  photo_url?: string;
  position_x?: number;
  position_y?: number;
  cta_text?: string;
  cta_link?: string;
  bio?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
  website?: string;
}

// For displaying creator on map
export interface CreatorMapData {
  id: string;
  username: string;
  archetype: ArchetypeType;
  avatar_url: string | null;
  position_x: number;
  position_y: number;
  last_active: string;
}
