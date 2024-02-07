import { registerPlugin } from '@capacitor/core';

import type { IntentsPlugin } from './definitions';

const Intents = registerPlugin<IntentsPlugin>('Intents', {
  web: () => import('./web').then(m => new m.IntentsWeb()),
});

export * from './definitions';
export { Intents };
