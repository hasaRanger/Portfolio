export type IconProviderId = 'devicon' | 'simpleicons' | 'material' | 'unpkg' | 'local';

export interface ProviderStrategy {
  id: IconProviderId;
  name: string;
  getUrl: (slug: string, options?: IconOptions) => string | null;
}

export interface IconOptions {
  color?: string;
  variant?: 'original' | 'plain' | 'line' | 'wordmark';
}

export interface IconEntry {
  displayName: string;
  aliases?: string[];
  pinnedProvider?: IconProviderId;
  devicon?: string | { slug: string; variant?: string };
  simpleicon?: { slug: string; color?: string };
  materialIcon?: string;
}

export interface GlobalIconConfig {
  primaryProvider: IconProviderId;
  fallbackChain: IconProviderId[];
}

