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
    const v3 = '1'
    const v4 = true
    expect(addition3.addTwo(v3, v4)).toStrictEqual('1' + true)
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

describe('addThree', () => {
  it('does not throw', () => {
    const v1 = 1
    const v2 = 2
    const v3 = 3
    addition3.addThree(v1, v2, v3)
    const v4 = '1'
    const v5 = {}
    const v6 = true
    addition3.addThree(v4, v5, v6)
  })

  it('gives correct result', () => {
    const v1 = 1
    const v2 = 2
    const v3 = 3
    expect(addition3.addThree(v1, v2, v3)).toStrictEqual(6)
    const v4 = new Date()
    const v5 = {}
    const v6 = true
    // @ts-ignore
    expect(addition3.addThree(v4, v5, v6)).toStrictEqual(v4 + v5 + v6)
  })
})

describe('addThreeNumbers', () => {
  it('gives correct result', () => {
    const v1 = 1
    const v2 = 2
    const v3 = 3
    expect(addition3.addThreeNumbers(v1, v2, v3)).toStrictEqual(6)
    const v4 = new Date()
    const v5 = '1'
    const v6 = false
    // @ts-ignore
    expect(addition3.addThreeNumbers(v4, v5, v6)).toStrictEqual(v4.valueOf() + 1)
  })
})

describe('addArray', () => {
  it('can accept array input', () => {
    addition3.addArray([1, 2, 3])
    addition3.addArray([true, null, {}])
  })

  it('gives correct result', () => {
    expect(addition3.addArray([1, 2, 3])).toStrictEqual(6)
    expect(addition3.addArray(['hello', null, {}])).toStrictEqual(
      // @ts-ignore
      'hello' + null + {}
    )
  })

  it('handles nested arrays', () => {
    const v1 = addition3.addArray([1, 2, 3])
    const v2 = addition3.addArray(1, 2, 3)
    const v3 = addition3.addArray([1, [2]], [3])
    expect(v1).toStrictEqual(v2)
    expect(v1).toStrictEqual(v3)
  })
})

describe('addArrayOfNumbers', () => {
  it('can accept array input', () => {
    addition3.addArrayOfNumbers([1, 2, 3])
    addition3.addArrayOfNumbers([true, null, {}])
  })

  it('gives correct result', () => {
    expect(addition3.addArrayOfNumbers([1, 2, 3])).toStrictEqual(1 + 2 + 3)
    expect(addition3.addArrayOfNumbers(['1', 2, '3'])).toStrictEqual(6)
  })

  it('handles nested arrays', () => {
    const v1 = addition3.addArrayOfNumbers(['1', 2, '3'])
    const v2 = addition3.addArrayOfNumbers('1', 2, '3')
    const v3 = addition3.addArrayOfNumbers(['1', [2]], ['3'])
    expect(v1).toStrictEqual(v2)
    expect(v1).toStrictEqual(v3)
  })
})
