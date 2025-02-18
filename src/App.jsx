import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
      <ButtonComponent
        buttonProp="ciao sono il bottone"
        url="https://placedog.net/500/280"
      />
      <ImageComponent imageProp="https://placedog.net/500/280" />
    </>
  );
}

export default App;
