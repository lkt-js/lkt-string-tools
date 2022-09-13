export function stripTags(input: string, allowed: string): string {
  if (input === null) {
    input = '';
  }
  // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  allowed = (
    `${allowed || ''}`.toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
  ).join('');

  const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf(`<${$1.toLowerCase()}>`) > -1 ? $0 : '';
  });
}

export function htmlEntities(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
