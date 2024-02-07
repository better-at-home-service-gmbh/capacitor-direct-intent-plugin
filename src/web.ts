/* eslint import/newline-after-import: "off" */
import { WebPlugin } from '@capacitor/core';

import type { IntentCall, IntentsPlugin } from './definitions';

export class IntentsWeb extends WebPlugin implements IntentsPlugin {

  async sendIntent(options: IntentCall): Promise<void> {
    throw new Error(`Feature not implemented in web. ${options.action}`);
  }
}
