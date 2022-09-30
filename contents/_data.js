function slugify(text) {
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export function url(page) {
  const { type, title } = page.data;

  return `../../${type}/${slugify(title)}/`;
}