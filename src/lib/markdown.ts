import { marked } from 'marked';

export function md(text: string): string {
  return marked.parseInline(text) as string;
}
