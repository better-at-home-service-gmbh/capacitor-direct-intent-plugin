/**
 * @author Jounes Jedlaoui
 */

export interface IntentsPlugin {
  sendIntent(options: IntentCall): Promise<void>;
  checkIntentReceived(): Promise<IntentCall>;
  finish(): void;
}

export interface IntentCall {
  action: string;
  extra: { [key: string]: any };
  data: { [key: string]: any };
  isDirect: boolean;
  component: { [key: string]: any };
}
