Lisp interpreter
===

[![Greenkeeper badge](https://badges.greenkeeper.io/Nitive/lisp-interpreter.svg)](https://greenkeeper.io/)

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
