export interface IntentsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
