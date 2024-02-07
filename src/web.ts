/* eslint import/newline-after-import: "off" */
import { WebPlugin } from '@capacitor/core';

import type { IntentCall, IntentsPlugin } from './definitions';

export class IntentsWeb extends WebPlugin implements IntentsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    // console.log('ECHO', options);
    return options;
  }
  async sendIntent(options: IntentCall): Promise<void> {
    throw new Error(`Feature not implemented in web. ${options.action}`);
  }
}
