const LANGUAGES = {
  JavaScript: [
    // undefined keyword
    { pattern: /undefined/g, points: 2 },
    // console.log('ayy lmao')
    { pattern: /console\.log( )*\(/, points: 2 },
    // Variable declaration
    { pattern: /(var|const|let)( )+\w+( )*=?/, points: 2 },
    // Array/Object declaration
    { pattern: /(('|").+('|")( )*|\w+):( )*[{\[]/, points: 2 },
    // === operator
    { pattern: /\===/g, points: 1 },
    // !== operator
    { pattern: /!==/g, points: 1 },
    // Function definition
    { pattern: /function\*?(( )+[\$\w]+( )*\(.*\)|( )*\(.*\))/g, points: 1 },
    // null keyword
    { pattern: /null/g, points: 1 },
    // lambda expression
    { pattern: /\(.*\)( )*=>( )*.+/, points: 1 },
    // (else )if statement
    { pattern: /(else )?if( )+\(.+\)/, points: 1 },
    // while loop
    { pattern: /while( )+\(.+\)/, points: 1 },
    // C style variable declaration.
    { pattern: /(^|\s)(char|long|int|float|double)( )+\w+( )*=?/, points: -1 },
    // pointer
    { pattern: /(\w+)( )*\*( )*\w+/, points: -1 },
    // HTML <script> tag
    {
      pattern: /<(\/)?script( type=('|")text\/javascript('|"))?>/,
      points: -50,
    },
    // ES6 import / export
    {
      pattern: /(import|export(\s+)default)\s+({\s+[\w\s,]+\s+}|\w+)\s+from\s/,
      points: 2,
    },
    // ES6 arrow function
    { pattern: /\([^\(\)]{0,}\)\s+=>(\s+{)?/, points: 3 },
    // () => {}
    // (a) => {}
    // (a, b) => {}
    // ({ a, b}) => {}
    // ([ a, b ]) => {}
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
    // Function definition
    { pattern: /def( )+\w+\(.*\)( )*:/, points: 2 },
    // while loop
    { pattern: /while (.+):/, points: 2 },
    // from library import something
    { pattern: /from [\w\.]+ import (\w+|\*)/, points: 2 },
    // class keyword
    { pattern: /class( )*\w+(\(( )*\w+( )*\))?( )*:/, points: 2 },
    // if keyword
    { pattern: /if( )+(.+)( )*:/, points: 2 },
    // elif keyword
    { pattern: /elif( )+(.+)( )*:/, points: 2 },
    // else keyword
    { pattern: /else:/, points: 2 },
    // for loop
    { pattern: /for (\w+|\(?\w+,( )*\w+\)?) in (.+):/, points: 2 },
    // Python variable declaration.
    { pattern: /\w+( )*=( )*\w+(?!;)(\n|$)/, points: 1 },
    // import something
    { pattern: /import ([[^\.]\w])+/, points: 1, nearTop: true },
    // print statement/function
    { pattern: /print((( )*\(.+\))|( )+.+)/, points: 1 },
    // &&/|| operators
    { pattern: /(&{2}|\|{2})/, points: -1 },
  ],

  Java: [
    // System.out.println() etc.
    { pattern: /System\.(in|out)\.\w+/, points: 2 },
    // Class variable declarations
    {
      pattern: /(private|protected|public)( )*\w+( )*\w+(( )*=( )*[\w])?/,
      points: 2,
    },
    // Method
    { pattern: /(private|protected|public)( )*\w+( )*[\w]+\(.+\)/, points: 2 },
    // String class
    { pattern: /(^|\s)(String)( )+[\w]+( )*=?/, points: 2 },
    // List/ArrayList
    { pattern: /(List<\w+>|ArrayList<\w*>( )*\(.*\))(( )+[\w]+|;)/, points: 2 },
    // class keyword
    { pattern: /(public( )*)?class( )*\w+/, points: 2 },
    // Array declaration.
    { pattern: /(\w+)(\[( )*\])+( )+\w+/, points: 2 },
    // final keyword
    { pattern: /final( )*\w+/, points: 2 },
    // getter & setter
    { pattern: /\w+\.(get|set)\(.+\)/, points: 2 },
    // new Keyword (Java)
    { pattern: /new [A-Z]\w*( )*\(.+\)/, points: 2 },
    // C style variable declaration.
    { pattern: /(^|\s)(char|long|int|float|double)( )+[\w]+( )*=?/, points: 1 },
    // extends/implements keywords
    { pattern: /(extends|implements)/, points: 2, nearTop: true },
    // null keyword
    { pattern: /null/g, points: 1 },
    // (else )if statement
    { pattern: /(else )?if( )*\(.+\)/, points: 1 },
    // while loop
    { pattern: /while( )+\(.+\)/, points: 1 },
    // void keyword
    { pattern: /void/g, points: 1 },
    // const
    { pattern: /const( )*\w+/, points: -1 },
    // pointer
    { pattern: /(\w+)( )*\*( )*\w+/, points: -1 },
    // Single quote multicharacter string
    { pattern: /'.{2,}'/, points: -1 },
    // C style include
    { pattern: /#include( )*(<|")\w+(\.h)?(>|")/, points: -1, nearTop: true },
  ],

  HTML: [
    { pattern: /<!DOCTYPE (html|HTML PUBLIC .+)>/, points: 2, nearTop: true },
    // Tags
    {
      pattern: /<[a-z0-9]+(( )*[\w]+=('|").+('|")( )*)?>.*<\/[a-z0-9]+>/g,
      points: 2,
    },
    // Properties
    { pattern: /[a-z\-]+=("|').+("|')/g, points: 2 },
    // PHP tag
    { pattern: /<\?php/, points: -50 },
  ],

  CSS: [
    // Properties
    { pattern: /[a-z\-]+:(?!:).+;/, points: 2 },
    // <style> tag from HTML
    { pattern: /<(\/)?style>/, points: -50 },
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

  "C#": [
    // Variable declaration
    { pattern: /(int|float|string|bool)( )+\w+( )*=/, points: 2 },
    // Method definition
    { pattern: /(void|int|string|bool)( )+\w+\(.*\)/, points: 2 },
    // Class declaration
    { pattern: /class( )+\w+/, points: 2 },
    // Namespace
    { pattern: /namespace( )+\w+/, points: 2 },
    // LINQ
    { pattern: /(from|select|where)( )+.+/, points: 2 },
    // Console.WriteLine
    { pattern: /Console\.Write(Line)?\(.+\)/, points: 1 },
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
    // CoffeeScript variable declaration
    { pattern: /\w+( )?=( )?.+/, points: 2 },
    // CoffeeScript function definition
    { pattern: /\w+( )?[-=]>/, points: 2 },
    // CoffeeScript class declaration
    { pattern: /\w+( )?class/, points: 2 },
    // CoffeeScript if statement
    { pattern: /if( )+.+/, points: 2 },
    // CoffeeScript for loop
    { pattern: /for( )+.+/, points: 2 },
    // CoffeeScript array declaration
    { pattern: /\[.*\]/, points: 2 },
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
    // Markdown headings
    { pattern: /^(#+)\s+.+$/, points: 2 },
    // Markdown lists
    { pattern: /^(\s*[-*+]\s+|(\d+\.)\s+).+$/, points: 2 },
    // Markdown code block
    { pattern: /^```[\s\S]*?^```$/, points: 2 },
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
    // HTML tags
    { pattern: /<[^\/]+>.*<\/[^>]+>/, points: 2 },
    // HTML self-closing tags
    { pattern: /<[^\/]+\/>/, points: 2 },
    // HTML comments
    { pattern: /<!--.*-->/, points: 2 },
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
