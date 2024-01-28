import flattenNestedObj from './flatten-obj' // Replace with the actual path to your module

describe('flattenNestedObj', () => {
  it('should flatten a nested object', () => {
    const nestedObj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: {
            g: 4,
          },
        },
      },
    }

    const flattenedObj = flattenNestedObj(nestedObj)

    expect(flattenedObj).toEqual({
      a: 1,
      'b.c': 2,
      'b.d.e': 3,
      'b.d.f.g': 4,
    })
  })

  it('should handle an empty object', () => {
    const emptyObj = {}

    const flattenedObj = flattenNestedObj(emptyObj)

    expect(flattenedObj).toEqual({})
  })

  it('should handle an object with no nested properties', () => {
    const objWithNoNesting = {
      x: 42,
      y: 'hello',
      z: true,
    }

    const flattenedObj = flattenNestedObj(objWithNoNesting)

    expect(flattenedObj).toEqual({
      x: 42,
      y: 'hello',
      z: true,
    })
  })
})
