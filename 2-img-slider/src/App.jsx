import "./App.css";
import ImgSlider from "./components/ImgSlider";

function App() {
  return (
    <>
      <ImgSlider
        url={"https://picsum.photos/v2/list?"}
        limit={"7"}
        page={"3"}
      />
    </>
  );
}

export default App;
