#### RandomColor.jsx

- there is a button in center of screen
- when clicked, the background of the screen should change
- for this functionality:

- make a state variable that holds a color value in hex string
- this color string value is injected into style > backgroundColor of the main dive which color we want to change
- we listen the onClick event from the butten that calls a function that updates the hex color value of the state variable - sets new color value

**changeBgColor** functionality:

- we have a let hexString variable tha starts from # and a comnbination array from which numbers and letter are extracted by iteration
- then we call a for loop

````js
for (let i = 0; i < 6; i++) {
     hexStr += combination[randomHex(combination.length)];
   }```
````

- this for-loop starts from 1 and goes upto 6 and `updates` the hexStr value by adding numbers and letters in front of "#......"
- on every iteration, the hexStr is updated by one letter or number from the combination array,
- and which letter or number is to be updated , this is decided by taking the random index of the combination array
- for this purpose, we make a new function that do this job

**randomHex** functionality:

```js
function randomHex(length) {
  return Math.floor(Math.random() * length);
}
```

- it recives length as parameter, which is the length of combination array
- then it generates a random number within te range of the length of combination array
- and return that number

- the that random number is used to decide whis next letter or number is to be attached with hex str , to make it hex string, for that purose the for-loop is repeated 6 times!
