### Overview

- there is a input field, that contains random string (that can be used as password)
- a copy buton to copy this string
- a slider to change the length of string generated
- two checkboxes to enclude and exclude numbers and characters

- **Functionality**

- whenever app loads, there should be a random string in input field already (of eight charackters)
- whenerer length is changed, new string is generated each time of that length
- also new strings generated when numbers and characters checkboxes are clicked

### Project setup

- env setup , dir structure, repo, servers,
-

### working on **RandomPassword** component

- Making state variables:

  - for `length, setLength` default value `8`
  - to allow numbers , default value `true` or `false`
  - also same for characters , defult `true` or `false`
  - for password, that shows in field

- **passwordGenerator fn**

- that generates password
- this fn runs every time when , length is changed, numbers allowed / disallowed, charAllowed / disallowed
- thats why we need to cache this function using `useCallback` hook

- **useCallback**

- our `passwordGenerater` methon uses `useCallback`

```js
const passwordGenerator = useCallback(() => {}, []);
```

- pass length, number , char allowed , and setPassword , methods of state vars
- and a callback fn, that runs whenever these dependencies changes
- `useCallback` hook do memoization and caching behind the scene

- **Functionalities of Callback function**
- make variables using let, `pass` to store generated password, `str` to store string through which password string is to be generated
- check, based on if numbers are allowed , then concatinate str with sting of numbers
- also if characters are allowed, join them

- write a for-loop > start i from 1, goes upto the length of length state var
- create a random number with in the range of str length, using math.floor and random method
- so we are getting any random index value from string
- put that char in to pass variable , using charAt method of string
- after this, set password value to the pass
- ok

- jsx
  - make length range, number and charecter checkboxes input fields
  - add onChange events on number and character, call the function and set the reversed value of the current value in that state variable
  - `onChange={() => setNumAllow((prev) => !prev)}` do the same for chars
  - set method of state variable has access to its previous value
  - also set onChange of length
  - length: `onChange={(e) => setLength(e.target.value)}`

### Copy to clipboard

- we need to select, which input field or text is to be copied
- we need to tell the selection range
- we also need to access the clipboard of
- we need to copy generated password from that input field, by clicking on copy button
- to give the reference , we use `useRef` hook
- make a reference variable: `const passwordRef = useRef(null)`
- now we can give refernce to input field through ref attribute
- in password input field: `ref={passwordRef}`, now passwordRef hold its reference

- _copy button_
- set onClick on copy button and run a copy function, core functioanlity of that function is
- `window.navigator.clipboard.writeText(password);`
- it copy the password, and there is no use of passwordRef, right. But we need it for better user experiance
- when `copyToClipboard` runs, it copy the password to clipboard
- here we can access `passwordRef` to show that the text is selected
- `passwordRef.current?.select();`
