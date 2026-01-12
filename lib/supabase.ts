import { createClient } from '@supabase/supabase-js';
import { Creator } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for Creator operations
export const creatorsAPI = {
  // Get all creators for map display
  async getAllCreators() {
    const { data, error } = await supabase
      .from('creators')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Creator[];
  },

  // Get single creator by username
  async getCreatorByUsername(username: string) {
    const { data, error } = await supabase
      .from('creators')
      .select('*')
      .eq('username', username)
      .single();
    
    if (error) throw error;
    return data as Creator;
  },

  // Create new creator
  async createCreator(creator: Partial<Creator>) {
    const { data, error } = await supabase
      .from('creators')
      .insert([{
        ...creator,
        last_active: new Date().toISOString(),
        followers: 0,
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data as Creator;
  },

  // Update creator
  async updateCreator(id: string, updates: Partial<Creator>) {
    const { data, error } = await supabase
      .from('creators')
      .update({
        ...updates,
        last_active: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Creator;
  },

  // Upload file to Supabase Storage
  async uploadFile(bucket: string, path: string, file: File) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true,
      });
    
    if (error) throw error;
    
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);
    
    return publicUrl;
  },
};
