export default function updateUniqueItems(map) {
  const list = map;

  if (list instanceof Map) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of list) {
      if (value === 1) {
        list.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return list;
}
