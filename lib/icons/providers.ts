import { ProviderStrategy } from './types';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const MATERIAL_BASE = 'https://cdn.jsdelivr.net/gh/material-extensions/vscode-material-icon-theme@main/icons';

export const DeviconStrategy: ProviderStrategy = {
  id: 'devicon',
  name: 'Devicon CDN',
  getUrl: (slug, options) => {
    const variant = options?.variant || 'original';
    return `${DEVICON_BASE}/${slug}/${slug}-${variant}.svg`;
  },
};

export const SimpleIconsStrategy: ProviderStrategy = {
  id: 'simpleicons',
  name: 'Simple Icons CDN',
  getUrl: (slug, options) => {
    return options?.color
      ? `https://cdn.simpleicons.org/${slug}/${options.color}`
      : `https://cdn.simpleicons.org/${slug}`;
  },
};

export const MaterialStrategy: ProviderStrategy = {
  id: 'material',
  name: 'Material Icons CDN',
  getUrl: (filename) => `${MATERIAL_BASE}/${filename}`,
};

export const PROVIDER_STRATEGIES: Record<string, ProviderStrategy> = {
  devicon: DeviconStrategy,
  simpleicons: SimpleIconsStrategy,
  material: MaterialStrategy,
};
