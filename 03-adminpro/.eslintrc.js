module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    mocha: true,
  },
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'spaced-comment': 0,
    indent: ['warn', 2, { SwitchCase: 1 }],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'off',
      {
        ignoreParameters: true,
      },
    ],

    ////////// Possible Errors //////////
    // "comma-dangle": 2, // disallow trailing commas in object literals
    'no-cond-assign': 2, // disallow assignment in conditional expressions
    'no-console': 1, // disallow use of console (off by default in the node environment)
    'no-constant-condition': 0, // disallow use of constant expressions in conditions
    'no-control-regex': 0, // disallow control characters in regular expressions
    'no-debugger': 0, // disallow use of debugger
    'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
    'no-empty': 1, // disallow empty statements
    'no-empty-class': 0, // disallow the use of empty character classes in regular expressions
    'no-empty-function': 0,
    'no-ex-assign': 0, // disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': 0, // disallow double-negation boolean casts in a boolean context
    'no-extra-parens': 0, // disallow unnecessary parentheses (off by default)
    'no-extra-semi': 2, // disallow unnecessary semicolons
    'no-func-assign': 2, // disallow overwriting functions written as function declarations
    'no-inner-declarations': 0, // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 2, // disallow invalid regular expression strings in the RegExp constructor
    'no-irregular-whitespace': 2, // disallow irregular whitespace outside of strings and comments
    'no-negated-in-lhs': 0, // disallow negation of the left operand of an in expression
    'no-obj-calls': 0, // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-regex-spaces': 2, // disallow multiple spaces in a regular expression literal
    'no-sparse-arrays': 0, // disallow sparse arrays
    'no-unreachable': 0, // disallow unreachable statements after a return, throw, continue, or break statement
    'use-isnan': 0, // disallow comparisons with the value NaN
    'valid-jsdoc': 1, // Ensure JSDoc comments are valid (off by default)
    'valid-typeof': 2, // Ensure that the results of typeof are compared against a valid string

    ////////// Best Practices //////////
    'block-scoped-var': 2, // treat var statements as if they were block scoped (off by default)
    complexity: 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    // 'consistent-return': 2, // require return statements to either always or never specify values
    // curly: [1, 'multi'], // specify curly brace conventions for all control statements
    'default-case': 2, // require default case in switch statements (off by default)
    'dot-notation': 2, // encourages use of dot notation whenever possible
    eqeqeq: 2, // require the use of === and !==
    'guard-for-in': 1, // make sure for-in loops have an if statement (off by default)
    'no-alert': 1, // disallow the use of alert, confirm, and prompt
    'no-caller': 1, // disallow use of arguments.caller or arguments.callee
    'no-div-regex': 1, // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-else-return': 2, // disallow else after a return in an if (off by default)
    'no-empty-label': 0, // disallow use of labels for anything other then loops and switches
    'no-eq-null': 1, // disallow comparisons to null without a type-checking operator (off by default)
    'no-eval': 2, // disallow use of eval()
    // 'no-explicit-any': 1,
    'no-extend-native': 0, // disallow adding to native types
    'no-extra-bind': 0, // disallow unnecessary function binding
    'no-fallthrough': 0, // disallow fallthrough of case statements
    'no-floating-decimal': 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-implied-eval': 1, // disallow use of eval()-like methods
    'no-iterator': 0, // disallow usage of __iterator__ property
    'no-labels': 0, // disallow use of labeled statements
    'no-lone-blocks': 1, // disallow unnecessary nested blocks
    'no-loop-func': 2, // disallow creation of functions within loops
    'no-multi-spaces': 1, // disallow use of multiple spaces
    'no-multi-str': 0, // disallow use of multiline strings
    'no-native-reassign': 1, // disallow reassignments of native objects
    'no-new': 1, // disallow use of new operator when not part of the assignment or comparison
    'no-new-func': 1, // disallow use of new operator for Function object
    'no-new-wrappers': 2, // disallows creating new instances of String, Number, and Boolean
    'no-octal': 0, // disallow use of octal literals
    'no-octal-escape': 0, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-process-env': 0, // disallow use of process.env (off by default)
    'no-proto': 2, // disallow usage of __proto__ property
    'no-redeclare': [2, { builtinGlobals: false }], // disallow declaring the same variable more then once
    // 'no-return-assign': 2, // disallow use of assignment in return statement
    'no-script-url': 0, // disallow use of javascript: urls.
    'no-self-compare': 0, // disallow comparisons where both sides are exactly the same (off by default)
    'no-sequences': 0, // disallow use of comma operator
    'no-unused-expressions': 1, // disallow usage of expressions in statement position
    'no-void': 0, // disallow use of void operator (off by default)
    'no-warning-comments': 0, // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    'no-with': 0, // disallow use of the with statement
    radix: 0, // require use of the second argument for parseInt() (off by default)
    'vars-on-top': 2, // requires to declare all vars on top of their containing scope (off by default)
    'wrap-iife': 1, // require immediate function invocation to be wrapped in parentheses (off by default)
    yoda: 1, // require or disallow Yoda conditions

    ////////// Strict Mode //////////
    strict: [2, 'global'], // controls location of Use Strict Directives

    ////////// Variables //////////
    'no-catch-shadow': 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    'no-delete-var': 1, // disallow deletion of variables
    'no-label-var': 1, // disallow labels that share a name with a variable
    'no-shadow': 1, // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 1, // disallow shadowing of names such as arguments
    'no-undef': 0, // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef-init': 0, // disallow use of undefined when initializing variables
    'no-undefined': 2, // disallow use of undefined variable (off by default)
    'no-unused-vars': 0, // disallow declaration of variables that are not used in the code
    'no-use-before-define': 2, // disallow use of variables before they are defined

    ////////// Node.js //////////
    'handle-callback-err': 0, // enforces error handling in callbacks (off by default) (on by default in the node environment)
    'no-mixed-requires': 0, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    'no-new-require': 0, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    'no-path-concat': 0, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    'no-process-exit': 0, // disallow process.exit() (on by default in the node environment)
    'no-restricted-modules': 0, // restrict usage of specified node modules (off by default)
    'no-sync': 0, // disallow use of synchronous methods (off by default)

    ////////// Stylistic Issues //////////
    'brace-style': 2, // enforce one true brace style (off by default)
    camelcase: 2, // require camel case names
    'comma-spacing': 0, // enforce spacing before and after comma
    'comma-style': [2, 'last'], // enforce one true comma style (off by default)
    'consistent-this': 1, // enforces consistent naming when capturing the current execution context (off by default)
    'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
    'func-names': 1, // require function expressions to have a name (off by default)
    'func-style': [1, 'declaration'], // enforces use of function declarations or expressions (off by default)
    'key-spacing': 1, // enforces spacing between keys and values in object literal properties
    'max-nested-callbacks': 0, // specify the maximum depth callbacks can be nested (off by default)
    'new-cap': 0, // require a capital letter for constructors
    'new-parens': 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    'no-array-constructor': 2, // disallow use of the Array constructor
    'no-inline-comments': 0, // disallow comments inline after code (off by default)
    'no-lonely-if': 0, // disallow if as the only statement in an else block (off by default)
    'no-mixed-spaces-and-tabs': 2, // disallow mixed spaces and tabs for indentation
    'no-multiple-empty-lines': 1, // disallow multiple empty lines (off by default)
    'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
    'no-new-object': 2, // disallow use of the Object constructor
    'semi-spacing': 2, // disallow space before semicolon
    'no-spaced-func': 2, // disallow space between function identifier and application
    'no-ternary': 0, // disallow the use of ternary operators (off by default)
    'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
    'one-var': 0, // allow just one var statement per function (off by default)
    // 'operator-assignment': 1, // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    'padded-blocks': 0, // enforce padding within blocks (off by default)
    'quote-props': [2, 'as-needed'], // require quotes around object literal property names (off by default)
    quotes: [1, 'single'], // specify whether double or single quotes should be used
    semi: [1, 'always'], // require or disallow use of semicolons instead of ASI
    'sort-vars': 0, // sort variables within the same declaration block (off by default)
    'space-after-function-name': 0, // require a space after function names (off by default)
    'space-after-keywords': 0, // require a space after certain keywords (off by default)
    'space-before-blocks': 0, // require or disallow space before blocks (off by default)
    'space-in-brackets': [0, 'allways'], // require or disallow spaces inside brackets (off by default)
    'space-in-parens': 0, // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': [2, { int32Hint: false }], // require spaces around operators
    'space-return-throw-case': 0, // require a space after return, throw, and case
    'space-unary-ops': 0, // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'spaced-line-comment': 0, // require or disallow a space immediately following the // in a line comment (off by default)
    'wrap-regex': 0, // require regex literals to be wrapped in parentheses (off by default)

    ////////// ECMAScript 6 //////////
    'no-var': 2, // require let or const instead of var (off by default)
    'generator-star-spacing': 1, // enforce the position of the * in generator functions (off by default)
  },
};
