import { GlobalIconConfig, IconProviderId } from './types';
import { ICON_REGISTRY } from './registry';
import { PROVIDER_STRATEGIES } from './providers';

export const DEFAULT_ICON_CONFIG: GlobalIconConfig = {
  primaryProvider: 'devicon',
  fallbackChain: ['simpleicons', 'material'],
};

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const MATERIAL_BASE = 'https://cdn.jsdelivr.net/gh/material-extensions/vscode-material-icon-theme@main/icons';

function findRegistryEntry(name: string) {
  if (!name) return null;
  const exact = ICON_REGISTRY[name];
  if (exact) return exact;

  const normalized = name.toLowerCase().replace(/[\s\.\-]/g, '');
  if (ICON_REGISTRY[normalized]) return ICON_REGISTRY[normalized];

  for (const entry of Object.values(ICON_REGISTRY)) {
    if (entry.displayName.toLowerCase() === name.toLowerCase()) return entry;
    if (entry.aliases?.some((a) => a.toLowerCase() === name.toLowerCase() || a.toLowerCase() === normalized)) {
      return entry;
    }
  }

  return null;
}

export function getCandidateUrls(
  name: string,
  preferredProvider?: IconProviderId,
  config: GlobalIconConfig = DEFAULT_ICON_CONFIG
): string[] {
  if (!name) return [];

  const entry = findRegistryEntry(name);
  const normalizedKey = name.toLowerCase().replace(/[\s\.\-]/g, '');

  const providersToTry: IconProviderId[] = [];

  if (preferredProvider) {
    providersToTry.push(preferredProvider);
  } else if (entry?.pinnedProvider) {
    providersToTry.push(entry.pinnedProvider);
  }

  if (!providersToTry.includes(config.primaryProvider)) {
    providersToTry.push(config.primaryProvider);
  }

  for (const fallback of config.fallbackChain) {
    if (!providersToTry.includes(fallback)) {
      providersToTry.push(fallback);
    }
  }

  const urls: string[] = [];

  for (const providerId of providersToTry) {
    if (providerId === 'devicon') {
      if (entry?.devicon) {
        if (typeof entry.devicon === 'string') {
          if (entry.devicon.includes('/')) {
            urls.push(`${DEVICON_BASE}/${entry.devicon}`);
          } else {
            urls.push(`${DEVICON_BASE}/${entry.devicon}/${entry.devicon}-original.svg`);
          }
        } else {
          const variant = entry.devicon.variant || 'original';
          urls.push(`${DEVICON_BASE}/${entry.devicon.slug}/${entry.devicon.slug}-${variant}.svg`);
        }
      } else if (!entry) {
        urls.push(`${DEVICON_BASE}/${normalizedKey}/${normalizedKey}-original.svg`);
      }
    } else if (providerId === 'simpleicons') {
      if (entry?.simpleicon) {
        const { slug, color } = entry.simpleicon;
        urls.push(color ? `https://cdn.simpleicons.org/${slug}/${color}` : `https://cdn.simpleicons.org/${slug}`);
      } else {
        urls.push(`https://cdn.simpleicons.org/${normalizedKey}`);
      }
    } else if (providerId === 'material') {
      if (entry?.materialIcon) {
        urls.push(`${MATERIAL_BASE}/${entry.materialIcon}`);
      }
    }
  }

  return urls;
}
