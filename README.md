Lisp interpreter
===

Simple lisp interpreter written in JS

```clojure
(+ (- 4 2) 2)
```

```js
const lisp = require('lisp-interpeter')

const ast = lisp.parse('(+ 1 2)')

cost ast = { ... }

lisp.evalAst(ast)
lisp.eval('(+ 1 2)')
```
