# addition3

> Highly inspired by https://github.com/akhil004/addition2

Performs addition operation on two or more operands, with some syntactic sugar.

*Supports TypeScript and ES6

## Installation
npm install addition3

## Usage

```js
const addition3 = require('addition3')

addition3.addTwo(1, 2) // 3
addition3.addTwo('1', 2) // '12'

addition3.addTwoNumbers('1', 2) // 3
addition3.addThreeNumbers('1', 2, '3') // 6

addition3.addArray(['1', 2, '3']) // '123'
addition3.addArray(['1', [[2], '3']]) // '123'
addition3.addArrayOfNumbers(['1', [[2], '3']]) // 6

```

### Importing library

You can import the generated bundle to use the whole library:

```javascript
import * as addition3 from 'addition3'
```

Additionally, you can import the transpiled modules from `dist/lib` in case you have a modular library:

```javascript
import * as addition3 from 'addition3/dist/lib/addition3'
```
