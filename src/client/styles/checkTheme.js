export const is = n => n !== undefined && n !== null;

export const get = (obj, path, fallback) => {
  console.log(path);
  return (
    path.split('.').reduce((a, b) => (a && a[b] ? a[b] : null), obj) || fallback
  );
};

export const fallbackTheme = props => ({
  ...get(props, 'theme'),
});

export default function checkTheme(props, key, path) {
  const m = is(props[key]) ? props[key] : undefined;
  if (!is(m)) return null;

  const th = fallbackTheme(props);
  const sx = n => get(th, [path, n].join('.'), n);

  return sx(m);
}
