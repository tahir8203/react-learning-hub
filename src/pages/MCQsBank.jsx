import React from 'react';
import Layout from '../components/Layout';
import ExampleCard from '../components/ExampleCard';
import CodeBlock from '../components/CodeBlock';

const mcqsText = `1. Which hook is used to manage state in a functional React component?
a. useEffect
b. useContext
c. useState
d. useReducer

2. Which syntax is used to define an arrow function in JavaScript ES6?
a. function => () {}
b. () => {}
c. => function () {}
d. function () -> {}

3. What does JSX stand for?
a. JavaScript XML
b. Java Syntax Extension
c. JSON XML
d. JavaScript XHR

4. Which method returns a new array after applying a function to each element?
a. forEach()
b. map()
c. filter()
d. reduce()

5. What is the main purpose of destructuring in JavaScript?
a. To merge arrays
b. To loop through objects
c. To extract values from arrays or objects
d. To remove properties

6. What does the spread operator (...) do?
a. Deletes elements
b. Expands arrays or objects
c. Sorts arrays
d. Filters values

7. Which file is responsible for rendering the root React component?
a. App.jsx
b. index.css
c. main.jsx
d. package.json

8. Which symbol represents the spread operator in JavaScript?
a. ***
b. >>>
c. ...
d. :::

9. What is a React component?
a. A CSS file
b. A reusable UI piece
c. A database table
d. A browser API

10. Which keyword is used to declare a constant variable?
a. let
b. var
c. const
d. static

11. Which method selects elements based on a condition?
a. map()
b. filter()
c. reduce()
d. for()

12. Which hook is used to run side effects in React?
a. useState
b. useEffect
c. useRef
d. useMemo

13. What does the reduce() method do?
a. Filters array
b. Loops without return
c. Reduces array to single value
d. Sorts array

14. Which operator is commonly used for conditional rendering in JSX?
a. if-else only
b. switch
c. && and ternary
d. for loop

15. Which JavaScript feature handles asynchronous operations?
a. Closures
b. Callbacks only
c. Promises and async/await
d. Event bubbling

16. Which type of component is mainly used in modern React?
a. Class component
b. Inline component
c. Function component
d. Static component

17. Which keyword is used before a function to make it return a Promise?
a. await
b. promise
c. async
d. then

18. Which hook is used to share data globally without prop drilling?
a. useState
b. useEffect
c. useContext
d. useCallback

19. Where can the await keyword be used?
a. Inside any function
b. Inside loop only
c. Inside async function only
d. Inside object methods only

20. Which method does NOT return a new array?
a. map()
b. filter()
c. reduce()
d. forEach()

21. What are props in React?
a. Internal component data
b. Functions only
c. Read-only data passed to components
d. State hooks

22. Why are keys required when rendering lists in React?
a. Styling
b. Sorting
c. Performance and identification
d. Hook usage

23. JSX is best described as:
a. JavaScript framework
b. HTML inside JavaScript
c. CSS preprocessor
d. Database language

24. Which tool is recommended to create a React project in this course?
a. Create React App
b. Webpack
c. Vite
d. Babel

25. Which hook is best for complex state logic?
a. useState
b. useReducer
c. useEffect
d. useRef

26. Which API is commonly used to fetch data in React?
a. DOM API
b. Storage API
c. Fetch API
d. History API

27. Which keyword has function scope?
a. let
b. const
c. var
d. static

28. What happens when state changes in React?
a. Page reloads
b. Component re-renders
c. DOM resets
d. Props change

29. Which hook is used to reference DOM elements?
a. useEffect
b. useRef
c. useMemo
d. useContext

30. What does prop drilling mean?
a. Passing props through many levels
b. Updating state directly
c. Styling components
d. Using hooks

31. Which method reduces array elements into one value?
a. map()
b. filter()
c. reduce()
d. forEach()

32. React follows which data flow?
a. Two-way
b. Circular
c. One-way
d. Random

33. Which hook optimizes performance by memoization?
a. useMemo
b. useEffect
c. useState
d. useRef

34. Which keyword prevents reassignment?
a. let
b. var
c. const
d. function

35. Which lifecycle behavior does useEffect replace?
a. componentDidMount
b. componentDidUpdate
c. componentWillUnmount
d. All of these

36. How are events handled in React?
a. Inline HTML events
b. addEventListener
c. camelCase handlers
d. CSS classes

37. Which operator merges arrays or objects?
a. &&
b. ||
c. ...
d. ==

38. What does then() handle?
a. Errors
b. Promise resolution
c. Loops
d. State updates

39. Which file usually contains component logic?
a. index.html
b. main.jsx
c. App.jsx
d. package.json

40. Which hook runs after component render?
a. useState
b. useEffect
c. useContext
d. useReducer

41. Which statement about props is true?
a. Mutable
b. Writable
c. Read-only
d. Global

42. Which hook is used for side-effect cleanup?
a. useState
b. useEffect
c. useMemo
d. useRef

43. Which JavaScript keyword creates block scope?
a. var
b. let
c. static
d. public

44. Which CSS approach applies styles locally to components?
a. Inline styling
b. Global CSS
c. CSS Modules
d. HTML styles

45. What does useContext replace?
a. State
b. Props
c. Prop drilling
d. Reducers

46. Which function executes immediately in arrow functions?
a. constructor
b. callback
c. anonymous
d. none

47. Which hook is used for global state with reducer pattern?
a. useReducer
b. useContext
c. useState
d. useEffect

48. Which method loops without returning a value?
a. map()
b. filter()
c. forEach()
d. reduce()

49. Which keyword allows reassignment?
a. const
b. var
c. static
d. import

50. What does async/await mainly improve?
a. Performance
b. Readability
c. Security
d. Styling

51. Which JavaScript method converts a JSON string into an object?
a. JSON.stringify()
b. JSON.parse()
c. JSON.convert()
d. JSON.object()

52. Which hook is used to store a mutable value that does not trigger re-render?
a. useState
b. useEffect
c. useRef
d. useMemo

53. What is the default export limit in a JavaScript module?
a. One default export
b. Two default exports
c. Unlimited default exports
d. No default exports allowed

54. Which keyword is used to import a default export?
a. require
b. include
c. import
d. fetch

55. What does useMemo return?
a. A function
b. A cached value
c. A Promise
d. A component

56. Which method is used to combine multiple reducers?
a. combineReducers
b. mergeReducers
c. joinReducers
d. linkReducers

57. In React, state updates are:
a. Synchronous
b. Asynchronous
c. Blocking
d. Compile-time

58. Which attribute is mandatory when rendering lists in React?
a. id
b. name
c. key
d. index

59. What does the dependency array in useEffect control?
a. Styling
b. Cleanup
c. When effect runs
d. Component mounting

60. Which JavaScript operator checks both value and type?
a. ==
b. =
c. ===
d. !=

61. Which hook is used to memoize callback functions?
a. useMemo
b. useEffect
c. useCallback
d. useRef

62. What is the output type of map() method?
a. Object
b. Boolean
c. New array
d. Single value

63. Which folder usually contains reusable UI components?
a. public
b. assets
c. components
d. node_modules

64. What does lifting state up mean in React?
a. Moving state to parent component
b. Deleting state
c. Using useContext
d. Using props

65. Which method is used to prevent default browser behavior?
a. stopEvent()
b. preventDefault()
c. cancelEvent()
d. blockEvent()

66. Which JavaScript feature allows unpacking values from arrays?
a. Hoisting
b. Closure
c. Destructuring
d. Prototyping

67. Which hook is executed during component unmounting?
a. useState
b. useMemo
c. Cleanup function in useEffect
d. useCallback

68. What does npm stand for?
a. Node Project Manager
b. New Package Manager
c. Node Package Manager
d. Network Package Module

69. Which command starts a React development server (Vite)?
a. npm start
b. npm dev
c. npm run dev
d. npm serve

70. What does StrictMode do in React?
a. Improves styling
b. Finds potential problems
c. Optimizes rendering
d. Manages state

71. Which hook allows accessing previous props or state?
a. useState
b. useEffect
c. useRef
d. useMemo

72. Which keyword exports multiple values from a file?
a. default
b. export
c. module
d. include

73. Which method removes the last element from an array?
a. shift()
b. pop()
c. splice()
d. slice()

74. Which hook is best for avoiding unnecessary re-renders?
a. useEffect
b. useCallback
c. useState
d. useContext

75. What is the role of package.json?
a. Styling
b. Project metadata and dependencies
c. Routing
d. Rendering

76. Which JavaScript method checks if all elements satisfy a condition?
a. some()
b. every()
c. filter()
d. map()

77. What does React.Fragment allow?
a. Styling
b. Multiple roots without extra DOM nodes
c. State sharing
d. Event handling

78. Which file contains environment variables in React?
a. env.js
b. config.js
c. .env
d. settings.json

79. Which hook runs only once when dependency array is empty?
a. useState
b. useEffect
c. useMemo
d. useCallback

80. What does virtual DOM improve?
a. Security
b. Performance
c. Styling
d. Memory usage

81. Which method creates a shallow copy of an array?
a. splice()
b. slice()
c. pop()
d. shift()

82. Which JavaScript concept allows a function to remember its scope?
a. Callback
b. Promise
c. Closure
d. Prototype

83. Which hook is required to consume context?
a. useReducer
b. useContext
c. useState
d. useEffect

84. What does npm install do?
a. Starts server
b. Deletes node_modules
c. Installs dependencies
d. Builds project

85. Which operator is used for optional chaining?
a. ??
b. ?.
c. ::
d. &&

86. Which React feature improves code splitting?
a. Suspense
b. Fragment
c. StrictMode
d. Context

87. What does useCallback return?
a. Value
b. Component
c. Memoized function
d. Promise

88. Which hook is used for side effects related to DOM?
a. useMemo
b. useEffect
c. useReducer
d. useContext

89. Which array method modifies the original array?
a. map()
b. filter()
c. slice()
d. splice()

90. What does React use to update the UI efficiently?
a. Shadow DOM
b. Real DOM
c. Virtual DOM
d. Browser API

91. Which JavaScript keyword is used to handle errors?
a. catch
b. throw
c. try-catch
d. error

92. Which hook is suitable for managing form input state?
a. useContext
b. useState
c. useMemo
d. useRef

93. What does event.target refer to?
a. Browser
b. Component
c. Element triggering event
d. Window

94. Which method checks if array includes a value?
a. has()
b. contains()
c. includes()
d. exists()

95. Which React feature avoids prop drilling?
a. Props
b. State
c. Context API
d. Hooks

96. Which keyword stops loop execution?
a. stop
b. exit
c. break
d. return

97. Which hook is used for performance optimization only?
a. useEffect
b. useMemo
c. useState
d. useContext

98. What does default export allow?
a. Export multiple values
b. Export one main value
c. Export hooks only
d. Export components only

99. Which hook is used to manage side effects and cleanup?
a. useState
b. useEffect
c. useMemo
d. useReducer

100. Which JavaScript method joins array elements into a string?
a. concat()
b. join()
c. merge()
d. combine()`;

const answerKey1to50 = `1.c 2.b 3.a 4.b 5.c
6.b 7.c 8.c 9.b 10.c
11.b 12.b 13.c 14.c 15.c
16.c 17.c 18.c 19.c 20.d
21.c 22.c 23.b 24.c 25.b
26.c 27.c 28.b 29.b 30.a
31.c 32.c 33.a 34.c 35.d
36.c 37.c 38.b 39.c 40.b
41.c 42.b 43.b 44.c 45.c
46.d 47.a 48.c 49.b 50.b`;

const answerKey51to100 = `51.b
52.c
53.a
54.c
55.b
56.a
57.b
58.c
59.c
60.c
61.c
62.c
63.c
64.a
65.b
66.c
67.c
68.c
69.c
70.b
71.c
72.b
73.b
74.b
75.b
76.b
77.b
78.c
79.b
80.b
81.b
82.c
83.b
84.c
85.b
86.a
87.c
88.b
89.d
90.c
91.c
92.b
93.c
94.c
95.c
96.c
97.b
98.b
99.b
100.b`;

export default function MCQsBank() {
  return (
    <Layout>
      <div className="topic-page">
        <h1>MCQs Bank</h1>

        <section className="definition">
          <h2>JavaScript ES6 & React - 100 MCQs</h2>
          <p>
            This section contains all 100 MCQs you provided, plus the complete answer keys for quick revision.
          </p>
        </section>

        <section className="examples">
          <ExampleCard title="MCQs (1-100)">
            <CodeBlock code={mcqsText} language="text" />
          </ExampleCard>

          <ExampleCard title="Answer Key (1-50)">
            <CodeBlock code={answerKey1to50} language="text" />
          </ExampleCard>

          <ExampleCard title="Answer Key (51-100)">
            <CodeBlock code={answerKey51to100} language="text" />
          </ExampleCard>
        </section>
      </div>
    </Layout>
  );
}

