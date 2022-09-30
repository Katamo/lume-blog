export function url(page) {
  const { version } = page.data;

  return `../../changelog/${version}/`;
}