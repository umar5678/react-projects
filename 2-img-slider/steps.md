### Project Setup

- Initialized a Vite React project with Tailwind CSS.
- Running on localhost.

#### Component

- Created a `components` folder.
- Created `ImgSlider.jsx` file inside the `components` folder.

#### Get Image Data

- API URL: `https://picsum.photos/v2/list?page=1&limit=5`.
- Page number and limit of photos can be selected.

#### Dependencies

- Installed `react-icons`.

### Working on ImgSlider.jsx

- Set up state variables for `images` array, `currentSlide`, `errorMsg`.
- Implemented an async function to fetch images.
- Used the `useEffect` hook to run the async `fetchImages` function.
- Received `url`, `limit`, and `page` as props where the component is mounted, for example, in `App.jsx`.

```javascript
<ImgSlider url={"https://picsum.photos/v2/list?"} limit={"7"} page={"3"} />
```

- Received these props in the component:

```javascript
const ImgSlider = ({ url, limit, page }) => {...}
```

- When this component mounts, the `useEffect` hook calls the `fetchImages` function.

**fetchImages**

- An async function to fetch images:
  - Sets loading to true.
  - Fetches data and stores it in the `response` variable.
  - Extracts data from the response.
  - If data is successfully fetched:
    - Sets `images` state to this data.
    - Sets `loading` to false.
  - If an error occurs:
    - Sets error message.
  - All of these happen in a try-catch block.

**handlePrevious**

- Handles the click event for navigating to the previous slide.
- Updates the `currentSlide` state to the previous index if the current slide is not the first slide. Otherwise, sets it to the last slide index.

**handleNext**

- Handles the click event for navigating to the next slide.
- Updates the `currentSlide` state to the next index if the current slide is not the last slide. Otherwise, sets it to the first slide index.

**Rendering Process**

- Checks for loading state:
  - Displays "Loading, please wait" if loading is true.
- Checks for error message:
  - Displays the error message if not null.
- Renders the image slider:
  - Maps through the `images` array and renders each image with the appropriate styling.
  - Uses conditional rendering to show/hide images based on the `currentSlide`.
  - Allows navigation between slides using the left and right arrow icons (`BsFillArrowLeftCircleFill` and `BsArrowRightCircleFill`).
  - Renders pagination buttons for each image to allow direct navigation to a specific slide.
  - Applies styling classes to highlight the current slide and differentiate it from the rest.
