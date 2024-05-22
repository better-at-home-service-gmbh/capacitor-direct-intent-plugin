/* eslint import/newline-after-import: "off" */
/**
 * @author Jounes Jedlaoui
 */

import { WebPlugin } from '@capacitor/core';

import type { IntentCall, IntentsPlugin } from './definitions';

export class IntentsWeb extends WebPlugin implements IntentsPlugin {

  async sendIntent(options: IntentCall): Promise<void> {
    throw new Error(`Feature not implemented in web. ${options.action}`);
  }

  async checkIntentReceived(): Promise<IntentCall> {
    throw new Error('Freature not implemented in web.')
  }

  async finish(): Promise<void> {
    throw new Error('Freature not implemented in web.')

  }
}
