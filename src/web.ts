import { WebPlugin } from '@capacitor/core';

import type { IntentsPlugin } from './definitions';

export class IntentsWeb extends WebPlugin implements IntentsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
