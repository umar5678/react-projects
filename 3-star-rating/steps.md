- Initialized a Vite React project with Tailwind CSS and started the development server.

- Performed file clean-up to remove unnecessary files and organize the project structure.

- Created a component folder in the `src` directory.

- Created a file named `StarRating.jsx` in the `components` folder to implement the star rating component.

## Working on StarRating.jsx

- Installed `react-icons` package to use icons in the component.

- Implemented the `StarRating` component with a default `starCount` prop value of 10. The `starCount` can be customized by passing the prop where the component is used, for example, in `App.jsx`.

```javascript
<StarRating starCount={5} />
```

- In the `StarRating` component:

```javascript
const StarRating = ({ starCount = 10 }) => {
  return (
    <div className="flex justify-center gap-1">
      {[...Array(starCount)].map((_, index) => (
        <FaStar key={index} className="text-2xl text-gray-300" />
      ))}
    </div>
  );
};
```

- Stars are successfully displayed.

### Adding Functionality

- Started tracking events: `onClick`, `onMouseEnter`, `onMouseLeave`.

- Defined state variables for `rating` and `hover` states.

- Implemented `handleClick` function to handle the click event, which receives the current index of the star.

- Implemented `handleMouseEnter` function to handle the mouse enter event, which also receives the current index of the star.

- Implemented `handleMouseLeave` function to handle the mouse leave event, which also receives the current index of the star.

- Incremented the index value by one to ensure the exact number of stars is rendered.

- On click, set the value of `rating` to the current index.

- When mouse enters, set the value of `hover` to the current index.

- When mouse leaves, set the value of `hover` to the previous rating value.

**When clicked, the star value will change. The stars' color will change when hovered over, and the color change will persist after clicking until the next click event.**
