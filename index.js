const LANGUAGES = {

  JavaScript: [
    // Keywords
    { pattern: /\bundefined\b/g, points: 2 },
    { pattern: /\bnull\b/g, points: 2 },
    { pattern: /\btrue\b|\bfalse\b/g, points: 2 },

    // Console logging
    { pattern: /console\.(log|warn|error|info|debug)\(/, points: 3 },

    // Document object methods
    { pattern: /document\.(getElementById|getElementsByClassName|getElementsByTagName|querySelector|querySelectorAll)\(/, points: 5 },
    { pattern: /document\.addEventListener\(/, points: 5 },
    { pattern: /window\.addEventListener\(/, points: 5 },

    // Variable declarations
    { pattern: /\b(var|let|const)\s+\w+\s*=?/, points: 4 },

    // Function definitions (regular and generator functions)
    { pattern: /\bfunction\*?\s+\w*\s*\(.*\)/g, points: 3 },

    // Arrow functions (with and without curly braces)
    { pattern: /\(?\w*\)?\s*=>\s*\{?/, points: 3 },

    // Class declarations
    { pattern: /\bclass\s+\w+\s*{/, points: 3 },
    { pattern: /\bconstructor\s*\(.*\)\s*{/, points: 3 },

    // Object and array literals
    { pattern: /\b\w+\s*:\s*[\[{]/, points: 2 },
    { pattern: /\[[^\]]*\]/, points: 2 }, // Arrays
    { pattern: /\{[^\}]*\}/, points: 2 }, // Objects

    // If-else conditions
    { pattern: /\bif\s*\(.+\)\s*{/, points: 2 },
    { pattern: /\belse if\s*\(.+\)\s*{/, points: 2 },
    { pattern: /\belse\s*{/, points: 2 },

    // Loops
    { pattern: /\bfor\s*\(.*;.*;.*\)\s*{/, points: 3 }, // Classic for loop
    { pattern: /\bfor\s*\(.*\s+of\s+.*\)\s*{/, points: 3 }, // for...of
    { pattern: /\bfor\s*\(.*\s+in\s+.*\)\s*{/, points: 3 }, // for...in
    { pattern: /\bwhile\s*\(.+\)\s*{/, points: 2 },
    { pattern: /\bdo\s*{/, points: 2 },

    // Switch case
    { pattern: /\bswitch\s*\(.+\)\s*{/, points: 3 },
    { pattern: /\bcase\s+.+:/, points: 2 },
    { pattern: /\bdefault\s*:/, points: 2 },

    // Try-catch-finally
    { pattern: /\btry\s*{/, points: 3 },
    { pattern: /\bcatch\s*\(.+\)\s*{/, points: 3 },
    { pattern: /\bfinally\s*{/, points: 2 },

    // ES6+ Template literals
    { pattern: /`[^`]*\$\{[^}]+\}[^`]*`/, points: 3 },

    // Spread/rest operators
    { pattern: /\.{3}\w+/, points: 3 },

    // Destructuring assignment
    { pattern: /\bconst|let|var\s*{[^}]+}\s*=/, points: 3 },
    { pattern: /\bconst|let|var\s*\[[^\]]+\]\s*=/, points: 3 },

    // Promises & Async/Await
    { pattern: /\bPromise\s*\(/, points: 3 },
    { pattern: /\.then\s*\(/, points: 3 },
    { pattern: /\.catch\s*\(/, points: 3 },
    { pattern: /\.finally\s*\(/, points: 2 },
    { pattern: /\basync\s+function/, points: 3 },
    { pattern: /\bawait\s+\w+/, points: 3 },

    // Modules (ES6 imports/exports, CommonJS require)
    { pattern: /\bimport\s+.*\s+from\s+['"].+['"]/, points: 3 },
    { pattern: /\bexport\s+default\s+/, points: 3 },
    { pattern: /\bexport\s+{.*}/, points: 3 },
    { pattern: /\bmodule\.exports\s*=/, points: 3 },
    { pattern: /\brequire\s*\(.+\)/, points: 3 },

    // JSON handling
    { pattern: /\bJSON\.stringify\s*\(/, points: 3 },
    { pattern: /\bJSON\.parse\s*\(/, points: 3 },

    // Regular expressions
    { pattern: /\/.*\/[gimsuy]*/, points: 2 },

    // Dynamic property access (object[key])
    { pattern: /\[\w+\]/, points: 2 },

    // Global objects (setTimeout, setInterval, clearTimeout, clearInterval)
    { pattern: /\bsetTimeout\s*\(/, points: 3 },
    { pattern: /\bsetInterval\s*\(/, points: 3 },
    { pattern: /\bclearTimeout\s*\(/, points: 2 },
    { pattern: /\bclearInterval\s*\(/, points: 2 },

    // Node.js-specific syntax (require, __dirname, __filename)
    { pattern: /\brequire\s*\(/, points: 3 },
    { pattern: /\b__dirname\b/, points: 3 },
    { pattern: /\b__filename\b/, points: 3 },

    // Event loop-related methods (setImmediate, process.nextTick)
    { pattern: /\bsetImmediate\s*\(/, points: 3 },
    { pattern: /\bprocess\.nextTick\s*\(/, points: 3 },

    // Fetch API and AJAX requests
    { pattern: /\bfetch\s*\(/, points: 3 },
    { pattern: /\bXMLHttpRequest\s*\(/, points: 2 },

    // jQuery detection
    { pattern: /\$\(\s*['"].+['"]\s*\)/, points: 3 },
    { pattern: /\b\$.ajax\s*\(/, points: 3 },

    // React-specific patterns
    { pattern: /\bReact\.createElement\s*\(/, points: 3 },
    { pattern: /\buseState\s*\(/, points: 3 },
    { pattern: /\buseEffect\s*\(/, points: 3 },
    { pattern: /\buseContext\s*\(/, points: 3 },
    { pattern: /\buseReducer\s*\(/, points: 3 },

    // Penalty for HTML script tags (JS inside HTML)
    { pattern: /<(\/)?script( type=('|")text\/javascript('|"))?>/, points: -2 },

    // Penalty for C-style variable declarations (mistaken for C/C++)
    { pattern: /\b(char|long|int|float|double)\s+\w+\s*=?/, points: -1 },

    // Penalty for C-style pointers
    { pattern: /\b\w+\s*\*\s*\w+/, points: -1 },
],

  C: [
    // Primitive variable declaration.
    { pattern: /(char|long|int|float|double)( )+\w+( )*=?/, points: 2 },
    // malloc function call
    { pattern: /malloc\(.+\)/, points: 2 },
    // #include <whatever.h>
    { pattern: /#include (<|")\w+\.h(>|")/, points: 2, nearTop: true },
    // pointer
    { pattern: /(\w+)( )*\*( )*\w+/, points: 2 },
    // Variable declaration and/or initialisation.
    { pattern: /(\w+)( )+\w+(;|( )*=)/, points: 1 },
    // Array declaration.
    { pattern: /(\w+)( )+\w+\[.+\]/, points: 1 },
    // #define macro
    { pattern: /#define( )+.+/, points: 1 },
    // NULL constant
    { pattern: /NULL/, points: 1 },
    // void keyword
    { pattern: /void/g, points: 1 },
    // (else )if statement
    { pattern: /(else )?if( )*\(.+\)/, points: 1 },
    // while loop
    { pattern: /while( )+\(.+\)/, points: 1 },
    // printf function
    { pattern: /(printf|puts)( )*\(.+\)/, points: 1 },
    // new Keyword from C++
    { pattern: /new \w+/, points: -1 },
    // Single quote multicharacter string
    { pattern: /'.{2,}'/, points: -1 },
    // JS variable declaration
    { pattern: /var( )+\w+( )*=?/, points: -1 },
  ],

  "C++": [
    // Primitive variable declaration.
    { pattern: /(char|long|int|float|double)( )+\w+( )*=?/, points: 2 },
    // #include <whatever.h>
    { pattern: /#include( )*(<|")\w+(\.h)?(>|")/, points: 2, nearTop: true },
    // using namespace something
    { pattern: /using( )+namespace( )+.+( )*;/, points: 2 },
    // template declaration
    { pattern: /template( )*<.*>/, points: 2 },
    // std
    { pattern: /std::\w+/g, points: 2 },
    // cout/cin/endl
    { pattern: /(cout|cin|endl)/g, points: 2 },
    // Visibility specifiers
    { pattern: /(public|protected|private):/, points: 2 },
    // nullptr
    { pattern: /nullptr/, points: 2 },
    // new Keyword
    { pattern: /new \w+(\(.*\))?/, points: 1 },
    // #define macro
    { pattern: /#define( )+.+/, points: 1 },
    // template usage
    { pattern: /\w+<\w+>/, points: 1 },
    // class keyword
    { pattern: /class( )+\w+/, points: 1 },
    // void keyword
    { pattern: /void/g, points: 1 },
    // (else )if statement
    { pattern: /(else )?if( )*\(.+\)/, points: 1 },
    // while loop
    { pattern: /while( )+\(.+\)/, points: 1 },
    // Scope operator
    { pattern: /\w*::\w+/, points: 1 },
    // Single quote multicharacter string
    { pattern: /'.{2,}'/, points: -1 },
    // Java List/ArrayList
    {
      pattern: /(List<\w+>|ArrayList<\w*>( )*\(.*\))(( )+[\w]+|;)/,
      points: -1,
    },
  ],

  Python: [
    // Function definition (regular and async)
    { pattern: /^\s*def\s+\w+\(.*\):/, points: 3 },
    { pattern: /^\s*async\s+def\s+\w+\(.*\):/, points: 3 },

    // Class definition
    { pattern: /^\s*class\s+\w+(\(\w+\))?:/, points: 3 },

    // Import statements (import and from-import)
    { pattern: /^\s*(import\s+\w+|from\s+\w+\s+import\s+[\w,*]+)/, points: 3 },

    // Python standard library modules (e.g., sys, os, re, json, etc.)
    { pattern: /^\s*(import|from)\s+(sys|os|re|json|math|random|datetime|collections|itertools|functools)\b/, points: 3 },

    // Indentation-based blocks (whitespace, not tabs)
    { pattern: /^\s+(?!\t)/, points: 1 },

    // Single-line and inline comments
    { pattern: /#.+/, points: 2 },

    // Docstrings (triple-quoted multi-line strings)
    { pattern: /""".*?"""|'''.*?'''/s, points: 3 },

    // Variable assignments (x = value, including multiple assignments)
    { pattern: /^\s*\w+\s*=\s*.+/, points: 3 },
    { pattern: /^\s*(\w+, )+\w+\s*=\s*.+/, points: 3 },  // Tuple unpacking

    // Numeric literals (integers, floats, complex numbers)
    { pattern: /\b\d+(\.\d+)?(j)?\b/, points: 2 },

    // Boolean values and None
    { pattern: /\b(True|False|None)\b/, points: 2 },

    // Data structures (Lists, Tuples, Dictionaries, Sets)
    { pattern: /\[[^\[\]]*\]/, points: 3 }, // Lists
    { pattern: /\([^\(\)]*\)/, points: 3 }, // Tuples
    { pattern: /\{(\s*'.+'\s*:\s*.+,?)+\}/, points: 3 }, // Dicts
    { pattern: /\{[^:]*\}/, points: 2 }, // Sets

    // If-elif-else statements
    { pattern: /^\s*(if|elif|else)\s+.+:/, points: 3 },

    // Loops (for, while)
    { pattern: /^\s*(for|while)\s+.+:/, points: 3 },
    { pattern: /\bfor\s+\w+\s+in\s+range\(.+\)/, points: 3 },  // Common pattern

    // Exception handling (try-except-finally)
    { pattern: /^\s*try\s*:/, points: 3 },
    { pattern: /^\s*except\s+.*:/, points: 3 },
    { pattern: /^\s*finally\s*:/, points: 3 },

    // Context managers (with statement)
    { pattern: /^\s*with\s+.+:/, points: 3 },

    // List, Dict, and Set comprehensions
    { pattern: /\[.+\s+for\s+\w+\s+in\s+.+\]/, points: 3 },
    { pattern: /\{.+:.+\s+for\s+\w+\s+in\s+.+\}/, points: 3 },
    { pattern: /\(.+\s+for\s+\w+\s+in\s+.+\)/, points: 3 },  // Generator expression

    // Print statements (Python 2 and 3)
    { pattern: /^\s*print\(.*\)/, points: 3 },
    { pattern: /^\s*print\s+.+/, points: -2 }, // Penalize Python 2 print syntax

    // String formatting (`f"Hello {name}"`, `.format()`, `%` formatting)
    { pattern: /f"[^"]*{[^}]+}[^"]*"/, points: 3 }, // f-strings
    { pattern: /".*?%[dsf]/, points: 2 }, // Old-style % formatting
    { pattern: /".*?\.format\(.*\)/, points: 2 }, // .format() method

    // Decorators (@decorator_name)
    { pattern: /^\s*@\w+/, points: 3 },

    // Async features (await keyword)
    { pattern: /await\s+\w+/, points: 3 },

    // Type hints (Python 3.5+)
    { pattern: /\w+\s*:\s*\w+/, points: 3 },
    { pattern: /->\s*\w+/, points: 3 },

    // Walrus operator (Python 3.8+)
    { pattern: /:=/, points: 3 },

    // Dataclasses (Python 3.7+)
    { pattern: /^\s*@dataclass/, points: 3 },

    // Match-case statement (Python 3.10+)
    { pattern: /^\s*match\s+\w+:/, points: 3 },
    { pattern: /^\s*case\s+.+:/, points: 3 },

    // Penalties for deprecated syntax (Python 2)
    { pattern: /^\s*exec\s+.+/, points: -2 }, // exec statement
    { pattern: /^\s*print\s+.+/, points: -2 }, // print statement (Python 2)

    // Common built-in functions
    { pattern: /\b(len|sum|map|filter|zip|sorted|range|enumerate|type|id|open|dir|vars|globals|locals)\s*\(.*\)/, points: 3 },

    // Commonly used Python libraries (NumPy, Pandas, etc.)
    { pattern: /^\s*(import|from)\s+(numpy|pandas|matplotlib|scipy|sklearn|tensorflow|torch)\b/, points: 3 },

    // Negative Points for JavaScript Syntax
    { pattern: /function\s+\w+\s*\(.*\)\s*{/, points: -5 }, // JS function
    { pattern: /console\.log\s*\(.*\)/, points: -5 }, // JS console.log
    { pattern: /let\s+\w+\s*=?/, points: -5 }, // JS let keyword
    { pattern: /const\s+\w+\s*=?/, points: -5 }, // JS const keyword
    { pattern: /var\s+\w+\s*=?/, points: -5 }, // JS var keyword
    { pattern: /window\.addEventListener\s*\(.*\)/, points: -10 }, // JS event listener
    { pattern: /document\.(getElementById|getElementsByClassName|getElementsByTagName|querySelector|querySelectorAll)\(/, points: -10 }, // JS DOM API
    { pattern: /document\.addEventListener\(/, points: -10 },
    { pattern: /export\s+default\s+/, points: -5 }, // JS export
    { pattern: /import\s+.*\s+from\s+["']/, points: -5 }, // JS import syntax
    { pattern: /\(\)\s*=>/, points: -5 }, // Arrow functions in JS
    { pattern: /Promise\s*\(/, points: -5 }, // JS Promise
    { pattern: /\.then\s*\(/, points: -5 }, // JS Promise .then()
    { pattern: /setTimeout\s*\(.*\)/, points: -5 }, // JavaScript setTimeout
    { pattern: /setInterval\s*\(.*\)/, points: -5 }, // JavaScript setInterval
],

 Java: [
  // Package and import statements
  { pattern: /^\s*package\s+\w+(\.\w+)*\s*;/, points: 2 },
  { pattern: /^\s*import\s+(\w+(\.\w+)*|\w+(\.\w+)*\.\*);\s*$/, points: 2 },
  // Class declaration
  { pattern: /^\s*(public|private|protected)?\s*class\s+\w+(\s+extends\s+\w+)?(\s+implements\s+\w+(,\s*\w+)*)?\s*{/, points: 3 },
  // Interface declaration
  { pattern: /^\s*(public|private|protected)?\s*interface\s+\w+/, points: 3 },
  // Method declaration
  { pattern: /^\s*(public|private|protected)?\s*(static)?\s*(void|\w+)\s+\w+\s*\(.*\)\s*{/, points: 3 },
  // Variable declarations
  { pattern: /^\s*(public|private|protected)?\s*(static)?\s*(final)?\s*\w+\s+\w+\s*=?\s*.+\s*;/, points: 2 },
  // Primitive data types
  { pattern: /\b(int|long|double|float|char|byte|short|boolean)\b/, points: 2 },
  // Object data types
  { pattern: /\b(String|Integer|Double|Float|Boolean|List|Map|Set|Queue)\b/, points: 2 },
  // Main method
  { pattern: /public\s+static\s+void\s+main\s*\(\s*String\[\]\s+\w+\s*\)\s*{/, points: 5 },
  // Loops
  { pattern: /for\s*\(.*\)\s*{/, points: 2 },
  { pattern: /while\s*\(.*\)\s*{/, points: 2 },
  { pattern: /do\s*{/, points: 2 },
  // Conditionals
  { pattern: /if\s*\(.*\)\s*{/, points: 2 },
  { pattern: /else\s*{/, points: 2 },
  { pattern: /else\s+if\s*\(.*\)\s*{/, points: 2 },
  // Try-catch-finally blocks
  { pattern: /try\s*{/, points: 2 },
  { pattern: /catch\s*\(.*\)\s*{/, points: 2 },
  { pattern: /finally\s*{/, points: 2 },
  // Enhanced for loop
  { pattern: /for\s*\(\s*\w+\s+:\s+\w+\s*\)\s*{/, points: 3 },
  // Annotations
  { pattern: /@\w+/, points: 3 },
  // Generics
  { pattern: /\w+<\w+>/, points: 3 },
  // Static blocks
  { pattern: /static\s*{/, points: 3 },
  // Synchronized blocks
  { pattern: /synchronized\s*\(.*\)\s*{/, points: 3 },
  // Lambda expressions (Java 8+)
  { pattern: /\(.*\)\s*->\s*.+/, points: 3 },
  // Streams (Java 8+)
  { pattern: /\.stream\(\)/, points: 2 },
  { pattern: /\.collect\(.*\)/, points: 2 },
  // Try-with-resources (Java 7+)
  { pattern: /try\s*\(.*\)\s*{/, points: 3 },
  // Switch statements
  { pattern: /switch\s*\(.*\)\s*{/, points: 2 },
  { pattern: /case\s+.+:/, points: 2 },
  { pattern: /default\s*:/, points: 2 },
  // Deprecated syntax or conventions (penalize)
  { pattern: /System\.gc\(\)/, points: -2 },
  { pattern: /Thread\.stop\(\)/, points: -3 },
  { pattern: /System\.runFinalizersOnExit\(\)/, points: -3 },
  // Singleton pattern (bonus detection)
  { pattern: /private\s+static\s+\w+\s+instance\s*;/, points: 3 },
  { pattern: /public\s+static\s+\w+\s+getInstance\s*\(.*\)\s*{/, points: 3 },
  // Deprecated API usage
  { pattern: /java\.util\.Vector|java\.util\.Hashtable/, points: -2 },
  // Basic system output
  { pattern: /System\.out\.print(ln)?\s*\(.*\)/, points: 2 },
  // Collections usage
  { pattern: /new\s+(ArrayList|LinkedList|HashMap|HashSet|TreeSet|TreeMap)<.*>\s*\(.*\)/, points: 2 }
],


  HTML: [
    // Standard HTML doctype
    { pattern: /<!DOCTYPE html>/i, points: 15 },
    // Common HTML elements
    { pattern: /<(html|head|body|div|span|h[1-6]|p|a|img|ul|ol|li|table|tr|td|th|form|input|button|label|select|option|textarea)>/i, points: 5 },
    { pattern: /<\/(html|head|body|div|span|h[1-6]|p|a|img|ul|ol|li|table|tr|td|th|form|input|button|label|select|option|textarea)>/i, points: 5 },
    // Self-closing tags
    { pattern: /<(img|br|hr|meta|link|input|source|area|base|col|embed|param|track|wbr)( [^>]*)?>/i, points: 3 },
    // Anchor with href
    { pattern: /<a\s+[^>]*href="[^"]*"/i, points: 3 },
    // Image with src and alt
    { pattern: /<img\s+[^>]*src="[^"]*"[^>]*alt="[^"]*"/i, points: 3 },
    // Forms and related elements
    { pattern: /<form( [^>]*)?>/i, points: 2 },
    { pattern: /<input( [^>]*)?>/i, points: 2 },
    { pattern: /<button( [^>]*)?>/i, points: 2 },
    { pattern: /<select( [^>]*)?>/i, points: 2 },
    { pattern: /<textarea( [^>]*)?>/i, points: 2 },
    // Tables
    { pattern: /<table( [^>]*)?>/i, points: 2 },
    { pattern: /<tr( [^>]*)?>/i, points: 2 },
    { pattern: /<td( [^>]*)?>/i, points: 2 },
    { pattern: /<th( [^>]*)?>/i, points: 2 },
    // Inline styles
    { pattern: /style="[^"]*"/i, points: 1 },
    // Event attributes
    { pattern: /on(click|load|mouseover|mouseout|change|submit|keydown|keyup|focus|blur)="[^"]*"/i, points: 2 },
    // HTML comments
    { pattern: /<!--.*-->/, points: 1 },
    // Inline scripts
    { pattern: /<script( [^>]*)?>.*<\/script>/is, points: 2 },
    // Inline CSS
    { pattern: /<style( [^>]*)?>.*<\/style>/is, points: 2 },
    // Meta tags
    { pattern: /<meta( [^>]*)?>/i, points: 3 },
    // Links to external stylesheets
    { pattern: /<link\s+[^>]*rel="stylesheet"[^>]*>/i, points: 3 },
    // Accessibility attributes
    { pattern: /alt="[^"]*"/i, points: 2 },
    { pattern: /aria-[a-z]+="[^"]*"/i, points: 2 },
    { pattern: /role="[^"]*"/i, points: 2 },
    // Deprecated or non-standard elements
    { pattern: /<(font|center|big|strike|tt|marquee|blink)/i, points: -3 },
    // Missing alt attribute in <img>
    { pattern: /<img\s+[^>]*src="[^"]*"[^>]*(?!alt)/i, points: -2 },
    // Incorrect nesting
    { pattern: /<p>.*<(div|table|form).*<\/(div|table|form)>.*<\/p>/is, points: -2 },
    // Inline JavaScript event handler usage
    { pattern: /on\w+="[^"]*"/i, points: 1 },
],

CSS: [
  // Basic selectors
  { pattern: /^[\w\.\#]+[^\{\}]*\{/, points: 2 }, // Class, ID, or tag selectors
  // Universal selector
  { pattern: /\*\s*\{/, points: 1 },
  // Attribute selectors
  { pattern: /\[.+?\]/, points: 2 },
  // Pseudo-classes
  { pattern: /:\w+/, points: 2 },
  // Pseudo-elements
  { pattern: /::\w+/, points: 3 },
  // Descendant combinator
  { pattern: /[\w\.\#]+\s+[\w\.\#]+/, points: 2 },
  // Child combinator
  { pattern: /[\w\.\#]+\s*>\s*[\w\.\#]+/, points: 2 },
  // Adjacent sibling combinator
  { pattern: /[\w\.\#]+\s*\+\s*[\w\.\#]+/, points: 2 },
  // General sibling combinator
  { pattern: /[\w\.\#]+\s*~\s*[\w\.\#]+/, points: 2 },
  // Media queries
  { pattern: /@media\s+[^{]+\{/, points: 3 },
  // Keyframes
  { pattern: /@keyframes\s+\w+\s*\{/, points: 3 },
  // CSS Variables
  { pattern: /--\w+\s*:\s*.+;/, points: 3 },
  { pattern: /var\(--\w+\)/, points: 3 },
  // Flexbox properties
  { pattern: /display\s*:\s*flex\s*;/, points: 3 },
  { pattern: /justify-content\s*:\s*(center|space-between|space-around|space-evenly|flex-start|flex-end)\s*;/, points: 2 },
  { pattern: /align-items\s*:\s*(center|stretch|flex-start|flex-end|baseline)\s*;/, points: 2 },
  // Grid properties
  { pattern: /display\s*:\s*grid\s*;/, points: 3 },
  { pattern: /grid-template-columns\s*:\s*.+;/, points: 3 },
  { pattern: /grid-template-rows\s*:\s*.+;/, points: 3 },
  // Transition properties
  { pattern: /transition\s*:\s*.+;/, points: 2 },
  { pattern: /transition-duration\s*:\s*.+;/, points: 2 },
  { pattern: /transition-timing-function\s*:\s*.+;/, points: 2 },
  // Animation properties
  { pattern: /animation\s*:\s*.+;/, points: 3 },
  { pattern: /animation-name\s*:\s*.+;/, points: 2 },
  { pattern: /animation-duration\s*:\s*.+;/, points: 2 },
  // Colors (hex, RGB, RGBA, HSL, HSLA)
  { pattern: /#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})/, points: 2 },
  { pattern: /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/, points: 2 },
  { pattern: /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0?\.\d+|1)\s*\)/, points: 2 },
  { pattern: /hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)/, points: 2 },
  { pattern: /hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*(0?\.\d+|1)\s*\)/, points: 2 },
  // Background and gradient properties
  { pattern: /background\s*:\s*.+;/, points: 2 },
  { pattern: /background-image\s*:\s*linear-gradient\(.+\);/, points: 3 },
  { pattern: /background-image\s*:\s*radial-gradient\(.+\);/, points: 3 },
  // Box model properties
  { pattern: /margin\s*:\s*.+;/, points: 2 },
  { pattern: /padding\s*:\s*.+;/, points: 2 },
  { pattern: /border\s*:\s*.+;/, points: 2 },
  { pattern: /width\s*:\s*.+;/, points: 2 },
  { pattern: /height\s*:\s*.+;/, points: 2 },
  // Deprecated/invalid syntax (penalize)
  { pattern: /-webkit-[^:]+:\s*.+;/, points: -1 }, // Vendor prefixes
  { pattern: /-moz-[^:]+:\s*.+;/, points: -1 }, // Vendor prefixes
  { pattern: /-ms-[^:]+:\s*.+;/, points: -1 }, // Vendor prefixes
  // Inline styles
  { pattern: /style\s*=\s*".*"/, points: -3 }, // Penalize inline styles
],


  Ruby: [
    // require/include
    { pattern: /(require|include)( )+'\w+(\.rb)?'/, points: 2, nearTop: true },
    // Function definition
    { pattern: /def( )+\w+( )*(\(.+\))?( )*\n/, points: 2 },
    // Instance variables
    { pattern: /@\w+/, points: 2 },
    // Boolean property
    { pattern: /\.\w+\?/, points: 2 },
    // puts (Ruby print)
    { pattern: /puts( )+("|').+("|')/, points: 2 },
    // Inheriting class
    { pattern: /class [A-Z]\w*( )*<( )*([A-Z]\w*(::)?)+/, points: 2 },
    // attr_accessor
    { pattern: /attr_accessor( )+(:\w+(,( )*)?)+/, points: 2 },
    // new
    { pattern: /\w+\.new( )+/, points: 2 },
    // elsif keyword
    { pattern: /elsif/, points: 2 },
    // do
    { pattern: /do( )*\|(\w+(,( )*\w+)?)+\|/, points: 2 },
    // for loop
    { pattern: /for (\w+|\(?\w+,( )*\w+\)?) in (.+)/, points: 1 },
    // nil keyword
    { pattern: /nil/, points: 1 },
    // Scope operator
    { pattern: /[A-Z]\w*::[A-Z]\w*/, points: 1 },
  ],

  Go: [
    // package something
    { pattern: /package( )+[a-z]+\n/, points: 2, nearTop: true },
    // import
    {
      pattern: /(import( )*\(( )*\n)|(import( )+"[a-z0-9\/\.]+")/,
      points: 2,
      nearTop: true,
    },
    // error check
    { pattern: /if.+err( )*!=( )*nil.+{/, points: 2 },
    // Go print
    { pattern: /fmt\.Print(f|ln)?\(.*\)/, points: 2 },
    // function
    { pattern: /func(( )+\w+( )*)?\(.*\).*{/, points: 2 },
    // variable initialisation
    { pattern: /\w+( )*:=( )*.+[^;\n]/, points: 2 },
    // if/else if
    { pattern: /(}( )*else( )*)?if[^\(\)]+{/, points: 2 },
    // var/const declaration
    { pattern: /(var|const)( )+\w+( )+[\w\*]+(\n|( )*=|$)/, points: 2 },
    // public access on package
    { pattern: /[a-z]+\.[A-Z]\w*/, points: 1 },
    // nil keyword
    { pattern: /nil/, points: 1 },
    // Single quote multicharacter string
    { pattern: /'.{2,}'/, points: -1 },
  ],

  PHP: [
    // PHP tag
    { pattern: /<\?php/, points: 2 },
    // PHP style variables.
    { pattern: /\$\w+/, points: 2 },
    // use Something\Something;
    { pattern: /use( )+\w+(\\\w+)+( )*;/, points: 2, nearTop: true },
    // arrow
    { pattern: /\$\w+\->\w+/, points: 2 },
    // require/include
    {
      pattern:
        /(require|include)(_once)?( )*\(?( )*('|").+\.php('|")( )*\)?( )*;/,
      points: 2,
    },
    // echo 'something';
    { pattern: /echo( )+('|").+('|")( )*;/, points: 1 },
    // NULL constant
    { pattern: /NULL/, points: 1 },
    // new keyword
    { pattern: /new( )+((\\\w+)+|\w+)(\(.*\))?/, points: 1 },
    // Function definition
    { pattern: /function(( )+[\$\w]+\(.*\)|( )*\(.*\))/g, points: 1 },
    // (else)if statement
    { pattern: /(else)?if( )+\(.+\)/, points: 1 },
    // scope operator
    { pattern: /\w+::\w+/, points: 1 },
    // === operator
    { pattern: /\===/g, points: 1 },
    // !== operator
    { pattern: /!==/g, points: 1 },
    // C/JS style variable declaration.
    {
      pattern: /(^|\s)(var|char|long|int|float|double)( )+\w+( )*=?/,
      points: -1,
    },
  ],

  CSharp: [
    // Namespace declaration
    { pattern: /^\s*namespace\s+\w+(\.\w+)*\s*{/, points: 2 },
    // Using directives (imports)
    { pattern: /^\s*using\s+[\w\.\,]+\s*;/, points: 2 },
    // Detecting `using System;`
    { pattern: /^\s*using\s+System\s*;/, points: 3 },
    // Class declaration
    { pattern: /^\s*(public|private|protected|internal|static|sealed|abstract)?\s*class\s+\w+(\s+extends\s+\w+)?(\s+implements\s+\w+(,\s*\w+)*)?\s*{/, points: 3 },
    // Interface declaration
    { pattern: /^\s*(public|private|protected|internal|static|sealed|abstract)?\s*interface\s+\w+(\s+extends\s+\w+)?\s*{/, points: 3 },
    // Method declaration
    { pattern: /^\s*(public|private|protected|internal|static|virtual|abstract|sealed|async)?\s*(void|\w+(\[\])?(\s*\[\w+\])?)\s+\w+\s*\(.*\)\s*{/, points: 3 },
    // Properties
    { pattern: /^\s*(public|private|protected|internal|static|virtual|abstract|sealed)?\s*(\w+\[\])?\s+\w+\s*{.*}/, points: 2 },
    // Field declaration
    { pattern: /^\s*(public|private|protected|internal|static|readonly|volatile)?\s*(\w+\[\])?\s+\w+\s*=?\s*.+\s*;/, points: 2 },
    // Event declaration
    { pattern: /^\s*(public|private|protected|internal)?\s*event\s+\w+\s+\w+\s*;/, points: 2 },
    // Constructor
    { pattern: /^\s*(public|private|protected|internal|static)?\s*\w+\s*\(.*\)\s*{/, points: 3 },
    // Indexers
    { pattern: /^\s*(public|private|protected|internal|static)?\s*\[\s*(\w+\[\])?\s*\w+\s*\]\s*{/, points: 3 },
    // Lambda expressions (C# 3.0+)
    { pattern: /\(\w+\)\s*=>\s*.+/, points: 3 },
    // Async methods (C# 5.0+)
    { pattern: /async\s+(void|\w+(\[\])?(\s*\[\w+\])?)\s+\w+\s*\(.*\)\s*{/, points: 3 },
    { pattern: /await\s+\w+/, points: 3 },
    // LINQ queries (C# 3.0+)
    { pattern: /\.\s*(Where|Select|OrderBy|GroupBy|Join|SelectMany|Aggregate|FirstOrDefault|ToList|ToArray|ToDictionary)\(/, points: 3 },
    // Exception handling (try-catch-finally)
    { pattern: /try\s*{/, points: 2 },
    { pattern: /catch\s*\(.*\)\s*{/, points: 2 },
    { pattern: /finally\s*{/, points: 2 },
    // Conditional statement (if, else if, else)
    { pattern: /if\s*\(.*\)\s*{/, points: 2 },
    { pattern: /else\s*{/, points: 2 },
    { pattern: /else\s+if\s*\(.*\)\s*{/, points: 2 },
    // Switch statement
    { pattern: /switch\s*\(.*\)\s*{/, points: 2 },
    { pattern: /case\s+.*:/, points: 2 },
    { pattern: /default\s*:/, points: 2 },
    // For loops
    { pattern: /for\s*\(.*\)\s*{/, points: 2 },
    // While loop
    { pattern: /while\s*\(.*\)\s*{/, points: 2 },
    // Do-while loop
    { pattern: /do\s*{/, points: 2 },
    // Foreach loop (C# 3.0+)
    { pattern: /foreach\s*\(.*\)\s*{/, points: 3 },
    // Array initialization
    { pattern: /new\s+\w+\[\]\s*=\s*\{.*\}\s*;/, points: 2 },
    // Nullable types (C# 2.0+)
    { pattern: /\w+\?/, points: 2 },
    // Nullable type checking (C# 2.0+)
    { pattern: /HasValue\s*==\s*true/, points: 2 },
    // Properties with getters and setters
    { pattern: /get\s*{\s*return\s+\w+;\s*}\s+set\s*{\s*\w+\s*=\s*\w+;\s*}/, points: 3 },
    // Delegates and events
    { pattern: /delegate\s+\w+\s+\w+\s*;/, points: 2 },
    { pattern: /event\s+\w+\s+\w+\s*;/, points: 2 },
    // Extension methods (C# 3.0+)
    { pattern: /public\s+static\s+.*\s+this\s+\w+\s+\w+\s*\(.*\)\s*{/, points: 3 },
    // Static classes
    { pattern: /public\s+static\s+class\s+\w+\s*{/, points: 2 },
    // Static constructors
    { pattern: /static\s+.*\s*\(\)\s*{/, points: 2 },
    // Operator overloading
    { pattern: /\s*(public|private|protected)?\s*static\s*(\w+\[\])?\s*\w+\s*operator\s*([+\-*/%&|^<>]=?)\s*\(.*\)/, points: 3 },
    // Using statement (C# 3.0+)
    { pattern: /using\s+\(.*\)\s*{/, points: 3 },
    // Console.WriteLine usage
    { pattern: /Console\.WriteLine\s*\(.*\);/, points: 10 },
    // C# 9+ features: records
    { pattern: /record\s+\w+\s*{/, points: 4 },
    // C# 9+ features: init-only properties
    { pattern: /init\s*{\s*}/, points: 3 },
    // C# 9+ features: pattern matching
    { pattern: /is\s+\w+(\s+when\s+.*)?/, points: 3 },
    // Deprecated practices (penalize)
    { pattern: /goto\s+\w+;/, points: -3 }, // Goto statement
    { pattern: /unsafe\s*\{/, points: -2 }, // Unsafe code
    { pattern: /fixed\s+\w+\[\]/, points: -3 }, // Fixed size buffers
],



  R: [
    // Variable assignment
    { pattern: /\w+( )*<-( )*.+/, points: 2 },
    // Function definition
    { pattern: /\w+( )*<-function\(.*\)/, points: 2 },
    // if statement
    { pattern: /if( )*\(.+\)/, points: 2 },
    // data.frame declaration
    { pattern: /\w+( )*<-( )*data\.frame\(.+\)/, points: 2 },
    // print function
    { pattern: /print\(.+\)/, points: 1 },
  ],

  "Objective-C": [
    // Variable declaration
    { pattern: /(int|float|NSString|BOOL)( )+\w+( )*=/, points: 2 },
    // Method definition
    { pattern: /(-|\+)\(.*\)\w+/, points: 2 },
    // @interface declaration
    { pattern: /@interface( )+\w+/, points: 2 },
    // #import statement
    { pattern: /#import( )+<.+>/, points: 2 },
    // [NSString stringWithFormat:]
    { pattern: /\[\w+ stringWithFormat:( )*.+\]/, points: 1 },
  ],

 TypeScript: [
  // Strict TypeScript patterns
  { pattern: /let\s+\w+\s*:\s*[\w\[\]\|<>,]+\s*=/, points: 5 }, // Variable with type annotation
  { pattern: /function\s+\w+\(.*:\s*[\w<>\|,]+\)\s*:\s*[\w<>\|]+/, points: 5 }, // Function with typed parameters and return type
  { pattern: /interface\s+\w+\s*\{[^}]+\}/, points: 5 }, // Interface definition
  { pattern: /type\s+\w+\s*=\s*[\w<>\|]+/, points: 5 }, // Type alias
  { pattern: /import\s+\{?[\w,\s]+\}?\s+from\s+['"].+['"]/, points: 4 }, // Import statement
  { pattern: /enum\s+\w+\s*\{[^}]+\}/, points: 5 }, // Enum definition
  { pattern: /as\s+\w+/, points: 4 }, // Type assertion using `as`
  { pattern: /\w+\s+implements\s+\w+/, points: 4 }, // Class implementing an interface
  { pattern: /readonly\s+\w+/, points: 4 }, // Readonly modifier
  { pattern: /private\s+readonly\s+\w+\s*:\s*[\w<>\|]+/, points: 5 }, // Strict class properties
],

  Swift: [
    // Variable declaration
    { pattern: /var( )+\w+( )*=/, points: 2 },
    // Function definition
    { pattern: /func( )+\w+\(.*\)/, points: 2 },
    // Class declaration
    { pattern: /class( )+\w+/, points: 2 },
    // import statement
    { pattern: /import( )+.+/, points: 2 },
    // print
    { pattern: /print\(.+\)/, points: 1 },
  ],
  Perl: [
    // Variable declaration
    { pattern: /\$(\w+)/, points: 2 },
    // Subroutine definition
    { pattern: /sub( )+\w+\(.*\)/, points: 2 },
    // Array declaration
    { pattern: /(\@|%)(\w+)/, points: 2 },
    // Hash declaration
    { pattern: /\%(\w+)/, points: 2 },
    // Regular expression match
    { pattern: /(\$\w+|\w+)( )=~( )\/.+\/[gim]{0,3}/, points: 2 },
    // print statement
    { pattern: /print( )+.+/, points: 1 },
  ],

  Haskell: [
    // Function definition
    { pattern: /\w+( )+=\s*.*\s*=>/, points: 2 },
    // Type declaration
    { pattern: /\w+( )*::( )*.+/, points: 2 },
    // Module declaration
    { pattern: /module( )+\w+( )where/, points: 2 },
    // List comprehension
    { pattern: /\[.*\|( )*.+\]/, points: 2 },
    // putStrLn
    { pattern: /putStrLn\(.+\)/, points: 1 },
  ],
  Kotlin: [
    // Kotlin variable declaration
    { pattern: /(val|var)( )+\w+( )*=/, points: 2 },
    // Kotlin function definition
    { pattern: /fun( )+\w+\(.*\)( )*:/, points: 2 },
    // Kotlin class declaration
    { pattern: /class( )+\w+/, points: 2 },
    // Kotlin if statement
    { pattern: /if( )+\(.+\)/, points: 2 },
    // Kotlin for loop
    { pattern: /for( )+\(.+\)/, points: 2 },
    // Kotlin lambda expression
    { pattern: /\{.*\s*->\s*.+\}/, points: 2 },
  ],
  Rust: [
    // Rust variable declaration
    { pattern: /(let|const)( )+\w+( )*=/, points: 2 },
    // Rust function definition
    { pattern: /fn( )+\w+\(.*\)( )*{/, points: 2 },
    // Rust struct declaration
    { pattern: /struct( )+\w+/, points: 2 },
    // Rust if statement
    { pattern: /if( )+\(.+\)/, points: 2 },
    // Rust match expression
    { pattern: /match( )+\w+/, points: 2 },
  ],
  Dart: [
    // Dart variable declaration
    { pattern: /var( )+\w+( )*=/, points: 2 },
    // Dart function definition
    { pattern: /(\w+ )?\w+\(.*\)( )*{/, points: 2 },
    // Dart class declaration
    { pattern: /class( )+\w+/, points: 2 },
    // Dart if statement
    { pattern: /if( )+\(.+\)/, points: 2 },
    // Dart for loop
    { pattern: /for( )+\(.+\)/, points: 2 },
    // Dart lambda expression
    { pattern: /(\w+ )?=>( )*\{.+\}/, points: 2 },
  ],
  Julia: [
    // Julia variable declaration
    { pattern: /\w+( )?=( )?.+/, points: 2 },
    // Julia function definition
    { pattern: /function( )+\w+(\(.+\))?/, points: 2 },
    // Julia struct declaration
    { pattern: /struct( )+\w+/, points: 2 },
    // Julia if statement
    { pattern: /if( )+.+/, points: 2 },
    // Julia for loop
    { pattern: /for( )+.+/, points: 2 },
    // Julia lambda expression
    { pattern: /(\w+ )?->( )*\{.+\}/, points: 2 },
  ],
  Scala: [
    // Scala variable declaration
    { pattern: /val( )+\w+( )?=( )?.+/, points: 2 },
    // Scala function definition
    { pattern: /def( )+\w+(\(.+\))?/, points: 2 },
    // Scala class declaration
    { pattern: /class( )+\w+/, points: 2 },
    // Scala if statement
    { pattern: /if( )+.+/, points: 2 },
    // Scala for loop
    { pattern: /for( )+.+/, points: 2 },
    // Scala lambda expression
    { pattern: /(\w+ )?=>( )*\{.+\}/, points: 2 },
  ],
  Groovy: [
    // Groovy variable declaration
    { pattern: /def( )+\w+( )?=( )?.+/, points: 2 },
    // Groovy function definition
    { pattern: /\w+( )?(\(.+\))?( )*{/, points: 2 },
    // Groovy class declaration
    { pattern: /class( )+\w+/, points: 2 },
    // Groovy if statement
    { pattern: /if( )+.+/, points: 2 },
    // Groovy for loop
    { pattern: /for( )+.+/, points: 2 },
    // Groovy closure
    { pattern: /(\w+ )?->( )*\{.+\}/, points: 2 },
  ],
  Bash: [
    // Bash variable declaration
    { pattern: /\w+=( )*.+/, points: 2 },
    // Bash function definition
    { pattern: /\w+\(\)( )*[{(]/, points: 2 },
    // Bash if statement
    { pattern: /if( )+.+/, points: 2 },
    // Bash for loop
    { pattern: /for( )+.+/, points: 2 },
    // Bash while loop
    { pattern: /while( )+.+/, points: 2 },
    // Bash case statement
    { pattern: /case( )+.+in/, points: 2 },
  ],
  Lua: [
    // Lua variable declaration
    { pattern: /\w+=( )*.+/, points: 2 },
    // Lua function definition
    { pattern: /function( )+\w+(\(.+\))?/, points: 2 },
    // Lua if statement
    { pattern: /if( )+.+then/, points: 2 },
    // Lua for loop
    { pattern: /for( )+.+do/, points: 2 },
    // Lua while loop
    { pattern: /while( )+.+do/, points: 2 },
    // Lua table declaration
    { pattern: /\w+=( )*\{.+\}/, points: 2 },
  ],
  FSharp: [
    // F# variable declaration
    { pattern: /let( )+\w+( )?=( )?.+/, points: 2 },
    // F# function definition
    { pattern: /let( )+\w+(\(.+\))?/, points: 2 },
    // F# type declaration
    { pattern: /type( )+\w+/, points: 2 },
    // F# if statement
    { pattern: /if( )+.+then/, points: 2 },
    // F# for loop
    { pattern: /for( )+.+do/, points: 2 },
    // F# match expression
    { pattern: /match( )+.+with/, points: 2 },
  ],
  MATLAB: [
    // MATLAB variable declaration
    { pattern: /\w+=( )*.+/, points: 2 },
    // MATLAB function definition
    { pattern: /\w+( )?=\w+\(.+\)/, points: 2 },
    // MATLAB if statement
    { pattern: /if( )+.+/, points: 2 },
    // MATLAB for loop
    { pattern: /for( )+.+/, points: 2 },
    // MATLAB while loop
    { pattern: /while( )+.+/, points: 2 },
    // MATLAB matrix declaration
    { pattern: /\w+=( )*\[.+\]/, points: 2 },
  ],
  Lisp: [
    // Lisp variable declaration
    { pattern: /\w+=( )*.+/, points: 2 },
    // Lisp function definition
    { pattern: /\(defun( )+\w+( )?\(.+\)\)/, points: 2 },
    // Lisp if statement
    { pattern: /\(if( )+.+\)/, points: 2 },
    // Lisp for loop
    { pattern: /\(loop( )+.+\)/, points: 2 },
    // Lisp while loop
    { pattern: /\(while( )+.+\)/, points: 2 },
    // Lisp list declaration
    { pattern: /\w+=( )*\(.+\)/, points: 2 },
  ],
  Prolog: [
    // Prolog fact declaration
    { pattern: /\w+\(.+\)\./, points: 2 },
    // Prolog rule declaration
    { pattern: /\w+\(( )?.+( )?(\,( )?.+)?\)( )?:-/, points: 2 },
    // Prolog cut operator
    { pattern: /!/, points: 2 },
  ],
  COBOL: [
    // COBOL variable declaration
    { pattern: /\w+( )+PIC( )+.+/, points: 2 },
    // COBOL paragraph declaration
    { pattern: /\w+( )+\.\n/, points: 2 },
    // COBOL IF statement
    { pattern: /IF( )+.+/, points: 2 },
    // COBOL PERFORM statement
    { pattern: /PERFORM( )+.+/, points: 2 },
    // COBOL MOVE statement
    { pattern: /MOVE( )+.+TO( )+.+/, points: 2 },
  ],
  Fortran: [
    // Fortran variable declaration
    { pattern: /\w+( )?=( )?.+/, points: 2 },
    // Fortran subroutine declaration
    { pattern: /SUBROUTINE( )+\w+\(.+\)/, points: 2 },
    // Fortran IF statement
    { pattern: /IF( )+.+THEN/, points: 2 },
    // Fortran DO loop
    { pattern: /DO( )+.+/, points: 2 },
    // Fortran CONTINUE statement
    { pattern: /CONTINUE/, points: 2 },
  ],
  Ada: [
    // Ada variable declaration
    { pattern: /\w+( )?:( )?.+/, points: 2 },
    // Ada procedure declaration
    { pattern: /PROCEDURE( )+\w+/, points: 2 },
    // Ada IF statement
    { pattern: /IF( )+.+THEN/, points: 2 },
    // Ada LOOP statement
    { pattern: /LOOP( )+.+/, points: 2 },
    // Ada assignment statement
    { pattern: /\w+( )?:=.*/, points: 2 },
  ],
  Elm: [
    // Elm variable declaration
    { pattern: /\w+( )?=.+/, points: 2 },
    // Elm function definition
    { pattern: /\w+( )?\(.+\)( )?=.+/, points: 2 },
    // Elm type declaration
    { pattern: /type( )+\w+( )?=.+/, points: 2 },
    // Elm if statement
    { pattern: /if( )+.+then/, points: 2 },
    // Elm case expression
    { pattern: /case( )+.+of/, points: 2 },
  ],
  Crystal: [
    // Crystal variable declaration
    { pattern: /\w+( )?=.+/, points: 2 },
    // Crystal function definition
    { pattern: /\w+( )?\(.+\)( )?=.+/, points: 2 },
    // Crystal class declaration
    { pattern: /class( )+\w+/, points: 2 },
    // Crystal if statement
    { pattern: /if( )+.+then/, points: 2 },
    // Crystal while loop
    { pattern: /while( )+.+do/, points: 2 },
    // Crystal module declaration
    { pattern: /module( )+\w+/, points: 2 },
  ],
  Elixir: [
    // Elixir variable declaration
    { pattern: /\w+( )?=.+/, points: 2 },
    // Elixir function definition
    { pattern: /\w+\(.*\)( )?->/, points: 2 },
    // Elixir module declaration
    { pattern: /defmodule( )+\w+/, points: 2 },
    // Elixir if statement
    { pattern: /if( )+.+do/, points: 2 },
    // Elixir case expression
    { pattern: /case( )+.+do/, points: 2 },
    // Elixir pipe operator
    { pattern: /\|>/, points: 2 },
    // Elixir module attribute
    { pattern: /@(\w+)/, points: 2 },
  ],
  Clojure: [
    // Clojure variable declaration
    { pattern: /\(def( )+\w+( )?.+\)/, points: 2 },
    // Clojure function definition
    { pattern: /\((defn|defn-)( )+\w+( )?\[.*\]( )?.+\)/, points: 2 },
    // Clojure if statement
    { pattern: /\(if( )+.+\)/, points: 2 },
    // Clojure for loop
    { pattern: /\(for( )+.+\)/, points: 2 },
    // Clojure while loop
    { pattern: /\(while( )+.+\)/, points: 2 },
    // Clojure map declaration
    { pattern: /\{.*\}/, points: 2 },
  ],

  CoffeeScript: [
    // Variable declaration without 'var', 'let', or 'const'
    { pattern: /^\s*\w+\s*=\s*.+/, points: 2 },
    // Function definition (arrow function, no 'function' keyword)
    { pattern: /\w+\s*=\s*\(?.*\)?\s*->/, points: 3 },
    { pattern: /^\s*->\s*$/, points: 2 },
    // Implicit return (no explicit 'return' keyword)
    { pattern: /^\s*\w+\s*=\s*\(?.*\)?\s*->\s*[^return]/, points: 2 },
    // String interpolation
    { pattern: /"#\{.+?\}"/, points: 2 },
    // For loop (no parentheses or curly braces)
    { pattern: /for\s+\w+\s+(in|of)\s+.+/, points: 3 },
    // Range
    { pattern: /\d+\.\.\d+/, points: 2 },
    // Destructuring assignment
    { pattern: /{(\s*\w+\s*,?)+\s*} =/, points: 2 },
    // Class declaration
    { pattern: /^class\s+\w+/, points: 3 },
    // Constructor method (no explicit 'constructor' keyword)
    { pattern: /^\s*constructor\s*:/, points: 3 },
    // Try/Catch block
    { pattern: /try\s*.*\s*catch\s+.*:/, points: 2 },
    // Single-line if
    { pattern: /if\s+.+\s+then\s+.+/, points: 2 },
    // Unless keyword (equivalent to 'if not')
    { pattern: /unless\s+.+/, points: 2 },
    // Chained method calls (implicit return chaining)
    { pattern: /\.\w+\s*$/, points: 2 },
    // Fat arrows (bound functions)
    { pattern: /=>/, points: 3 },
    // Undefined or null
    { pattern: /undefined|null/, points: 1 },
    // Inline objects
    { pattern: /{[^:]+:\s*.+}/, points: 2 },
    // Inline arrays
    { pattern: /\[.+\]/, points: 2 },
    // Splat operator (spread/rest equivalent)
    { pattern: /\.\.\./, points: 3 },
    // Object comprehension
    { pattern: /for\s+\w+,\s*\w+\s+of\s+.+/, points: 3 },
    // Implicit this
    { pattern: /@(\w+)/, points: 2 },
    // Do keyword (immediate invocation)
    { pattern: /do\s+\(?.*\)?/, points: 2 },
    // No parentheses for function calls
    { pattern: /\w+\s+[^()\s]+\s*,?\s*[^()\s]+/, points: 2 },
    // Indentation for code blocks
    { pattern: /^\s*\w+:$/, points: 1 },
    // Explicit JavaScript code with backticks
    { pattern: /`[^`]+`/, points: -5 }
],

  ObjectiveCPP: [
    // Objective-C++ variable declaration
    { pattern: /\w+( )?=( )?.+/, points: 2 },
    // Objective-C++ for loop
    { pattern: /for\(.+\)/, points: 2 },
    // Objective-C++ while loop
    { pattern: /while\(.+\)/, points: 2 },
    // Objective-C++ if statement
    { pattern: /if\(.+\)/, points: 2 },
    // Objective-C++ switch statement
    { pattern: /switch\(.+\)/, points: 2 },
    // Objective-C++ property declaration
    { pattern: /\@property( )?.+;/, points: 2 },
  ],

  Racket: [
    // Racket variable declaration
    { pattern: /\(define( )+\(.*\)( )?.+\)/, points: 2 },
    // Racket function definition
    { pattern: /\(define( )+\(.*\)/, points: 2 },
    // Racket structure declaration
    { pattern: /\(struct( )+\w+( )?.+\)/, points: 2 },
    // Racket if statement
    { pattern: /\(if( )+.+\)/, points: 2 },
    // Racket for loop
    { pattern: /\(for( )+.+\)/, points: 2 },
    // Racket lambda expression
    { pattern: /\(lambda( )?\(.*\)/, points: 2 },
  ],
  Erlang: [
    // Erlang variable declaration
    { pattern: /\w+( )?=( )?.+/, points: 2 },
    // Erlang function definition
    { pattern: /\w+\(.*\)( )?->/, points: 2 },
    // Erlang module declaration
    { pattern: /-module\(.*\)/, points: 2 },
    // Erlang if statement
    { pattern: /if( )+.+->/, points: 2 },
    // Erlang case expression
    { pattern: /case( )+.+of/, points: 2 },
    // Erlang record declaration
    { pattern: /-record\(.*\)/, points: 2 },
  ],
  Apex: [
    // Apex variable declaration
    { pattern: /\w+( )?=( )?.+/, points: 2 },
    // Apex method definition
    { pattern: /(\w+\s)+\w+\(.+\)( )?\{/, points: 2 },
    // Apex class declaration
    { pattern: /(public|private|global)( )?class( )+\w+/, points: 2 },
    // Apex if statement
    { pattern: /if( )+.+/, points: 2 },
    // Apex for loop
    { pattern: /for( )+.+/, points: 2 },
    // Apex SOQL query
    { pattern: /SELECT( )+.+FROM( )+.+/, points: 2 },
  ],
  VHDL: [
    // VHDL signal declaration
    { pattern: /\w+( )?:( )?(\w+|.+)( )?:=/, points: 2 },
    // VHDL process declaration
    { pattern: /process( )?\(.+\)/, points: 2 },
    // VHDL if statement
    { pattern: /if( )+.+then/, points: 2 },
    // VHDL case statement
    { pattern: /case( )+.+is/, points: 2 },
    // VHDL for loop
    { pattern: /for( )+.+in/, points: 2 },
    // VHDL entity declaration
    { pattern: /entity( )+\w+/, points: 2 },
  ],
  Verilog: [
    // Verilog wire or reg declaration
    { pattern: /(wire|reg)( )+(.+)?;/, points: 2 },
    // Verilog module declaration
    { pattern: /module( )+\w+\(/, points: 2 },
    // Verilog if statement
    { pattern: /if\(.+\)/, points: 2 },
    // Verilog case statement
    { pattern: /case\(.+\)/, points: 2 },
    // Verilog for loop
    { pattern: /for\(.+\)/, points: 2 },
    // Verilog always block
    { pattern: /always\(/, points: 2 },
  ],
  Scheme: [
    // Scheme variable declaration
    { pattern: /\(define( )+\(.*\)/, points: 2 },
    // Scheme function definition
    { pattern: /\(define( )+\(.*\)/, points: 2 },
    // Scheme if statement
    { pattern: /\(if( )+.+\)/, points: 2 },
    // Scheme for loop
    { pattern: /\(for( )+.+\)/, points: 2 },
    // Scheme while loop
    { pattern: /\(while( )+.+\)/, points: 2 },
    // Scheme lambda expression
    { pattern: /\(lambda( )?\(.*\)/, points: 2 },
  ],
  Tcl: [
    // Tcl variable declaration
    { pattern: /set( )+\w+( )?.+/, points: 2 },
    // Tcl procedure definition
    { pattern: /proc( )+\w+( )?\{.+/, points: 2 },
    // Tcl if statement
    { pattern: /if( )+.+then/, points: 2 },
    // Tcl switch statement
    { pattern: /switch( )+\{.+/, points: 2 },
    // Tcl for loop
    { pattern: /for( )+\{\w+ (in|range) .+\}/, points: 2 },
    // Tcl while loop
    { pattern: /while( )+.+/, points: 2 },
  ],
  COOL: [
    // COOL class declaration
    { pattern: /class( )+\w+/, points: 2 },
    // COOL method definition
    { pattern: /\w+( )?:( )?(\w+)?/, points: 2 },
    // COOL if statement
    { pattern: /if( )+.+then/, points: 2 },
    // COOL case statement
    { pattern: /case( )+.+of/, points: 2 },
    // COOL let expression
    { pattern: /let( )+.+in/, points: 2 },
    // COOL while loop
    { pattern: /while( )+.+loop/, points: 2 },
  ],
  Nim: [
    // Nim variable declaration
    { pattern: /\w+( )?=( )?.+/, points: 2 },
    // Nim procedure definition
    { pattern: /proc( )+\w+( )?\{/, points: 2 },
    // Nim type declaration
    { pattern: /type( )+\w+( )?=/, points: 2 },
    // Nim if statement
    { pattern: /if( )+.+:/, points: 2 },
    // Nim case statement
    { pattern: /case( )+.+of/, points: 2 },
    // Nim while loop
    { pattern: /while( )+.+:/, points: 2 },
  ],
  // J: [
  // ],
  K: [
    // K variable declaration
    { pattern: /\w+( )?:=( )?.+/, points: 2 },
    // K function definition
    { pattern: /\w+( )?\{.*\}/, points: 2 },
    // K if statement
    { pattern: /if( )+.+then/, points: 2 },
    // K case statement
    { pattern: /case( )+.+of/, points: 2 },
    // K for loop
    { pattern: /for( )+.+in/, points: 2 },
    // K while loop
    { pattern: /while( )+.+do/, points: 2 },
  ],
  Racket: [
    // Racket variable declaration
    { pattern: /\(define( )+\(.*\)( )?.+\)/, points: 2 },
    // Racket function definition
    { pattern: /\(define( )+\(.*\)/, points: 2 },
    // Racket structure declaration
    { pattern: /\(struct( )+\w+( )?.+\)/, points: 2 },
    // Racket if statement
    { pattern: /\(if( )+.+\)/, points: 2 },
    // Racket for loop
    { pattern: /\(for( )+.+\)/, points: 2 },
    // Racket lambda expression
    { pattern: /\(lambda( )?\(.*\)/, points: 2 },
  ],
  Alice: [
    // Alice variable declaration
    { pattern: /\w+( )?:=( )?.+/, points: 2 },
    // Alice method definition
    { pattern: /\w+( )?\{.*\}/, points: 2 },
    // Alice if statement
    { pattern: /if( )+.+then/, points: 2 },
    // Alice case statement
    { pattern: /case( )+.+of/, points: 2 },
    // Alice for loop
    { pattern: /for( )+.+in/, points: 2 },
    // Alice while loop
    { pattern: /while( )+.+do/, points: 2 },
  ],
  APL: [
    // APL variable declaration
    { pattern: /[A-Z]\w*( )?←( )?.+/, points: 2 },
    // APL function definition
    { pattern: /[A-Z]\w*( )?←( )?\{.*\}/, points: 2 },
    // APL if statement
    { pattern: /if( )+.+then/, points: 2 },
    // APL case statement
    { pattern: /case( )+.+of/, points: 2 },
    // APL for loop
    { pattern: /for( )+.+in/, points: 2 },
    // APL while loop
    { pattern: /while( )+.+do/, points: 2 },
  ],
  Bash: [
    // Bash variable declaration
    { pattern: /\w+( )?=.+/, points: 2 },
    // Bash function definition
    { pattern: /\w+\(.*\)( )?\{/, points: 2 },
    // Bash if statement
    { pattern: /if( )+.+then/, points: 2 },
    // Bash case statement
    { pattern: /case( )+.+in/, points: 2 },
    // Bash for loop
    { pattern: /for( )+.+in/, points: 2 },
    // Bash while loop
    { pattern: /while( )+.+do/, points: 2 },
  ],
  Kotlin: [
    // Kotlin variable declaration
    { pattern: /\bval\b\s+\w+\s*=\s*.+/, points: 2 },
    { pattern: /\bvar\b\s+\w+\s*=\s*.+/, points: 2 },
    // Kotlin function declaration
    { pattern: /\bfun\b\s+\w+\(.+\)\s*{/, points: 2 },
    // Kotlin class declaration
    { pattern: /\bclass\b\s+\w+(\s*:\s*\w+)?\s*{/, points: 2 },
    // Kotlin if statement
    { pattern: /\bif\b\s*\(.+\)\s*{/, points: 2 },
    // Kotlin when expression
    { pattern: /\bwhen\b\s*{/, points: 2 },
    // Kotlin for loop
    { pattern: /\bfor\b\s*\(\w+\s+in\s+.+\)\s*{/, points: 2 },
    // Kotlin while loop
    { pattern: /\bwhile\b\s*\(.+\)\s*{/, points: 2 },
    // Kotlin lambda expression
    { pattern: /\{.*->.*\}/, points: 2 },
  ],
  XML: [
    // XML tags
    { pattern: /<[^\/]+>.*<\/[^>]+>/, points: 2 },
    // XML self-closing tags
    { pattern: /<[^\/]+\/>/, points: 2 },
    // XML comments
    { pattern: /<!--.*-->/, points: 2 },
  ],

  YAML: [
    // YAML key-value pairs
    { pattern: /^\s*\w+\s*:\s*.+$/, points: 2 },
  ],

  JSON: [
    // JSON object
    { pattern: /\{.*\}/, points: 2 },
    // JSON array
    { pattern: /\[.*\]/, points: 2 },
  ],

  Markdown: [
    // Markdown headings (H1–H6)
    { pattern: /^(#{1,6})\s+.+$/, points: 5 },

    // Markdown lists (unordered and ordered)
    { pattern: /^(\s*[-*+]\s+|(\d+\.)\s+).+$/, points: 5 },

    // Markdown blockquotes
    { pattern: /^>\s+.+$/, points: 2 },

    // Markdown inline code (single backticks)
    { pattern: /`[^`]+`/, points: 2 },

    // Markdown fenced code blocks (triple backticks)
    { pattern: /^```[\s\S]*?^```$/, points: 3 },

    // Markdown emphasis (bold, italic, strikethrough)
    { pattern: /(\*\*|__)(.*?)\1/, points: 3 },
    { pattern: /(\*|_)(.*?)\1/, points: 2 },
    { pattern: /~~(.*?)~~/, points: 2 },

    // Markdown horizontal rule
    { pattern: /^(-{3,}|\*{3,}|_{3,})$/, points: 2 },

    // Markdown links
    { pattern: /\[.+\]\(.+\)/, points: 2 },

    // Markdown images
    { pattern: /!\[.*\]\(.+\)/, points: 2 },

    // Markdown tables
    { pattern: /\|(.+)\|/, points: 3 },
    { pattern: /\|[-:]+\|/, points: 3 },

    // Markdown footnotes
    { pattern: /\[\^.+\]:/, points: 2 },

    // Markdown task lists
    { pattern: /^\s*[-*]\s+\[[ x]\]\s+.+$/, points: 2 },

    // Markdown automatic URL linking
    { pattern: /https?:\/\/\S+/, points: 1 },

    // Header underlines (alternative to #)
    { pattern: /^(.+)\n(=+|-+)$/, points: 2 },

],

  SGML: [
    // SGML tags
    { pattern: /<[^\/]+>.*<\/[^>]+>/, points: 2 },
    // SGML self-closing tags
    { pattern: /<[^\/]+\/>/, points: 2 },
    // SGML comments
    { pattern: /<!--.*-->/, points: 2 },
  ],

  HTML5: [
    // HTML5 Doctype
    { pattern: /<!DOCTYPE html>/i, points: 10 },
    // HTML5 structural elements
    { pattern: /<(header|footer|section|article|nav|aside|main|figure|figcaption|summary|details|mark|time|progress|output)>/i, points: 3 },
    { pattern: /<\/(header|footer|section|article|nav|aside|main|figure|figcaption|summary|details|mark|time|progress|output)>/i, points: 3 },
    // Canvas element
    { pattern: /<canvas( [^>]*|)>.*<\/canvas>/i, points: 3 },
    // Video element
    { pattern: /<video( [^>]*|)>.*<\/video>/i, points: 3 },
    // Audio element
    { pattern: /<audio( [^>]*|)>.*<\/audio>/i, points: 3 },
    // Data attributes
    { pattern: /data-[a-z0-9-]+="[^"]*"/i, points: 2 },
    // Placeholder attribute
    { pattern: /placeholder="[^"]*"/i, points: 2 },
    // Autofocus attribute
    { pattern: /autofocus(="[^"]*")?/i, points: 2 },
    // Required attribute
    { pattern: /required(="[^"]*")?/i, points: 2 },
    // Pattern attribute
    { pattern: /pattern="[^"]*"/i, points: 2 },
    // HTML5 input types
    { pattern: /<input[^>]+type="(email|url|tel|number|range|color|date|time|datetime-local|month|week|search)">/i, points: 3 },
    // Progress element
    { pattern: /<progress( [^>]*|)>.*<\/progress>/i, points: 3 },
    // Meter element
    { pattern: /<meter( [^>]*|)>.*<\/meter>/i, points: 3 },
    // Source element (for media)
    { pattern: /<source( [^>]*|)>/i, points: 2 },
    // Track element (for captions)
    { pattern: /<track( [^>]*|)>/i, points: 2 },
    // Semantic HTML5 attributes
    { pattern: /role="[^"]+"/i, points: 2 },
    { pattern: /aria-[a-z]+="[^"]*"/i, points: 2 },
    // Drag and drop
    { pattern: /draggable="(true|false)"/i, points: 2 },
    { pattern: /ondragstart="[^"]+"/i, points: 2 },
    { pattern: /ondrop="[^"]+"/i, points: 2 },
    // Local storage / session storage (in script)
    { pattern: /localStorage|sessionStorage/, points: 2 },
    // WebSocket usage
    { pattern: /new\s+WebSocket\(.+\)/i, points: 2 },
    // HTML5 inline SVG
    { pattern: /<svg( [^>]*|)>.*<\/svg>/i, points: 3 },
    // HTML5 inline MathML
    { pattern: /<math( [^>]*|)>.*<\/math>/i, points: 3 },
    // Form validation
    { pattern: /novalidate/i, points: 2 },
    { pattern: /form(="[^"]*")?/i, points: 2 },
    // Modern browser features (via meta tags)
    { pattern: /<meta charset="utf-8">/i, points: 5 },
    { pattern: /<meta name="viewport" content="[^"]*">/i, points: 3 },
    // Deprecated or non-standard elements
    { pattern: /<font|<center|<big|<blink|<marquee/i, points: -5 }
],


  TEI: [
    // TEI tags
    { pattern: /<[^\/]+>.*<\/[^>]+>/, points: 2 },
    // TEI self-closing tags
    { pattern: /<[^\/]+\/>/, points: 2 },
    // TEI comments
    { pattern: /<!--.*-->/, points: 2 },
  ],

  LaTeX: [
    // LaTeX commands
    { pattern: /\\[a-zA-Z]+(\[[^\]]+\])?{[^}]+}/, points: 2 },
    // LaTeX environments
    { pattern: /\\begin{[^}]+}.*\\end{[^}]+}/, points: 2 },
  ],

  AsciiDoc: [
    // AsciiDoc headings
    { pattern: /^={1,5}\s+.+$/, points: 2 },
    // AsciiDoc lists
    { pattern: /^(\s*[-*+]\s+|\.\s+).+$/, points: 2 },
    // AsciiDoc code block
    { pattern: /^----\n[\s\S]*?\n----$/, points: 2 },
  ],

  RST: [
    // reStructuredText headings
    { pattern: /^[\w\s]+\n[=-]+\n/, points: 2 },
    // reStructuredText lists
    { pattern: /^(\s*[-*+]\s+|\d+\.\s+).+$/, points: 2 },
    // reStructuredText code block
    { pattern: /^::\n\n\s+[\s\S]*$/, points: 2 },
  ],

  Text: [
    // Sentences without code-like syntax (e.g., natural language sentences)
    { pattern: /^[A-Z][a-z]+( [a-z]+){3,}[.?!]$/, points: 3 },

    // Multiple sentences in a paragraph
    { pattern: /^([A-Z][a-z]+( [a-z]+){3,}[.?!] ){2,}$/, points: 3 },

    // Common English words (non-code)
    { pattern: /\b(the|and|is|was|were|in|on|at|for|with|without|because|as|if|but)\b/, points: 2 },

    // No special characters or programming operators
    { pattern: /^[^{}()\[\]=<>;]+$/, points: 3 },

    // No code-like indentation or colons
    { pattern: /^[^\n]*$/, points: 2 },

    // Long-form writing (paragraphs)
    { pattern: /^.{50,}$/, points: 2 },

    // Full paragraph structures
    { pattern: /^([A-Z][a-z]+( [a-z]+){4,}[.?!] ){3,}$/, points: 3 },

    // HTML-like text (not actual HTML)
    { pattern: /<[^>]+>/, points: -5 }, // Penalizing if it looks like HTML

    // Penalizing mathematical equations (which might indicate LaTeX or a programming language)
    { pattern: /\d+\s*[\+\-\*\/]\s*\d+/, points: -3 },

    // Penalizing special programming characters
    { pattern: /[\{\}\(\)\[\]=<>;]/, points: -3 },

    // Penalizing function-like structures
    { pattern: /\b\w+\s*\(.*\)/, points: -3 },

    // Penalizing import statements
    { pattern: /^\s*(import|from)\s+\w+/, points: -3 },

    // Penalizing loops and conditions
    { pattern: /^\s*(if|elif|else|for|while|switch)\s+/, points: -3 },

    // Penalizing code indentation (leading spaces with a colon at the end)
    { pattern: /^\s{2,}\w+:$/, points: -3 },

    //Markdown Negative

    { pattern: /^(#{1,6})\s+.+$/, points: -3 },

    // Markdown blockquotes
    { pattern: /^>\s+.+$/, points: -2 },

    // Markdown links
    { pattern: /\[.+\]\(.+\)/, points: -2 },

    // Markdown images
    { pattern: /!\[.*\]\(.+\)/, points: -2 },
],


  Unknown: [],
};
function getPoints(language, lineOfCode, checkers) {
  return checkers
    .map((checker) => {
      if (checker.pattern.test(lineOfCode)) {
        return checker.points;
      }
      return 0;
    })
    .reduce((memo, num) => memo + num, 0);
}
function detect(snippet, options) {
  const opts = Object.assign(
    {
      heuristic: true,
      statistics: false,
    },
    options || {}
  );

  let linesOfCode = snippet
    .replace(/\r\n?/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .split("\n");

  function nearTop(index) {
    if (linesOfCode.length <= 10) {
      return true;
    }
    return index < linesOfCode.length / 10;
  }

  if (opts.heuristic && linesOfCode.length > 500) {
    linesOfCode = linesOfCode.filter((lineOfCode, index) => {
      if (nearTop(index)) {
        return true;
      }
      return index % Math.ceil(linesOfCode.length / 500) === 0;
    });
  }

  const pairs = Object.keys(LANGUAGES).map((key) => {
    return { language: key, checkers: LANGUAGES[key] };
  });

  const results = pairs.map((pairs) => {
    const language = pairs.language;
    const checkers = pairs.checkers;

    if (language === "Unknown") {
      return { language: "Unknown", points: 1 };
    }

    const pointsList = linesOfCode.map((lineOfCode, index) => {
      if (!nearTop(index)) {
        return getPoints(
          language,
          lineOfCode,
          checkers.filter((checker) => !checker.nearTop)
        );
      }
      return getPoints(language, lineOfCode, checkers);
    });

    const points = pointsList.reduce((memo, num) => memo + num);

    return { language, points };
  });

  const sortedResult = results.sort((prev, next) => prev.points - next.points);
  const bestResult = sortedResult[sortedResult.length - 1];

  if (opts.statistics) {
    const statistics = {};
    results.forEach((result) => {
      statistics[result.language] = result.points;
    });
    return { detected: bestResult.language, statistics };
  }

  return bestResult.language;
}

const languages = Object.keys(LANGUAGES);
const LANG = {};

languages.forEach((language) => {
  LANG[language] = language;
});
if (typeof window !== "undefined") {
  window.LanguageDetector = { detect, languages, LANG };
}
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { detect, languages, LANG };
}
