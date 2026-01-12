// 12 Creator Archetypes with emojis and colors

export type ArchetypeType =
  | 'yoga-girl'
  | 'coffee-lover'
  | 'dog-lover'
  | 'gamer-girl'
  | 'travel-girl'
  | 'fitness-bro'
  | 'artist'
  | 'musician'
  | 'foodie'
  | 'tech-geek'
  | 'bookworm'
  | 'party-animal';

export interface Archetype {
  id: ArchetypeType;
  name: string;
  emoji: string;
  color: string;
}

export const ARCHETYPES: Record<ArchetypeType, Archetype> = {
  'yoga-girl': {
    id: 'yoga-girl',
    name: 'Yoga girl',
    emoji: '🧘‍♀️',
    color: '#a855f7', // purple
  },
  'coffee-lover': {
    id: 'coffee-lover',
    name: 'Coffee lover',
    emoji: '☕',
    color: '#f97316', // orange
  },
  'dog-lover': {
    id: 'dog-lover',
    name: 'Dog lover',
    emoji: '🐕',
    color: '#eab308', // yellow
  },
  'gamer-girl': {
    id: 'gamer-girl',
    name: 'Gamer girl',
    emoji: '🎮',
    color: '#22c55e', // green
  },
  'travel-girl': {
    id: 'travel-girl',
    name: 'Travel girl',
    emoji: '✈️',
    color: '#06b6d4', // cyan
  },
  'fitness-bro': {
    id: 'fitness-bro',
    name: 'Fitness bro',
    emoji: '💪',
    color: '#ef4444', // red
  },
  'artist': {
    id: 'artist',
    name: 'Artist',
    emoji: '🎨',
    color: '#ec4899', // pink
  },
  'musician': {
    id: 'musician',
    name: 'Musician',
    emoji: '🎵',
    color: '#8b5cf6', // purple
  },
  'foodie': {
    id: 'foodie',
    name: 'Foodie',
    emoji: '🍜',
    color: '#f59e0b', // amber
  },
  'tech-geek': {
    id: 'tech-geek',
    name: 'Tech geek',
    emoji: '💻',
    color: '#3b82f6', // blue
  },
  'bookworm': {
    id: 'bookworm',
    name: 'Bookworm',
    emoji: '📚',
    color: '#14b8a6', // teal
  },
  'party-animal': {
    id: 'party-animal',
    name: 'Party animal',
    emoji: '🎉',
    color: '#f43f5e', // rose
  },
};

export const ARCHETYPE_LIST = Object.values(ARCHETYPES);
