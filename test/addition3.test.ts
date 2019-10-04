import * as addition3 from '../src/addition3'

describe('addTwo', () => {
  it('does not throw', () => {
    const v1 = 1
    const v2 = 2
    addition3.addTwo(v1, v2)
    const v3 = new Date()
    const v4 = {}
    addition3.addTwo(v3, v4)
  })

  it('gives correct result', () => {
    const v1 = 1
    const v2 = 2
    expect(addition3.addTwo(v1, v2)).toStrictEqual(3)
  })
})

describe('addTwoNumbers', () => {
  it('gives correct result', () => {
    const v1 = 1
    const v2 = 2
    expect(addition3.addTwoNumbers(v1, v2)).toStrictEqual(3)
    const v3 = '1'
    const v4 = new Date()
    expect(addition3.addTwoNumbers(v3, v4)).toStrictEqual(v4.valueOf() + 1)
  })
})

describe('addArray', () => {
  it('can accept array input', () => {
    addition3.addArray([1, 2, 3])
    addition3.addArray([true, null, {}, undefined])
  })

  it('gives correct result', () => {
    expect(addition3.addArray([1, 2, 3])).toStrictEqual(1 + 2 + 3)
    expect(addition3.addArray([true, null, {}, undefined])).toStrictEqual(
      // @ts-ignore
      true + null + {} + undefined
    )
  })
})

describe('addArrayOfNumbers', () => {
  it('can accept array input', () => {
    addition3.addArrayOfNumbers([1, 2, 3])
    addition3.addArrayOfNumbers([true, null, {}, undefined])
  })

  it('gives correct result', () => {
    expect(addition3.addArrayOfNumbers([1, 2, 3])).toStrictEqual(1 + 2 + 3)
    expect(addition3.addArrayOfNumbers(['1', 2, '3'])).toStrictEqual(6)
  })
})
