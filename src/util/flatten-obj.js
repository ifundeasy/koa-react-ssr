export default function flattenNestedObj(obj, temp = {}, key = '') {
  for (const k in obj) {
    if (typeof obj[k] === 'object') {
      flattenNestedObj(obj[k], temp, key ? `${key}.${k}` : k)
    } else {
      const kk = key ? `${key}.${k}` : k
      temp[kk] = obj[k]
    }
  }

  return temp
}
