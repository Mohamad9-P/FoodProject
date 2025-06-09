
import AddRemove from "./Component/Header/AddRemove";
import { Header } from "./Component/Header/Header";
import MainCart from "./Component/Main/maincart";
import {FunctionContext} from "./Context/CartContext"
import Form from "./Component/Header/form";
import Success from "./Component/Header/Success";
import { SliderFunction } from "./Context/Slider";

function App() {
  return (
    <>
    <FunctionContext>
      <SliderFunction>
        <Header></Header>
        <MainCart/>
        <AddRemove/>
        <Form/>
        <Success/>
        {/* <Game/> */}
      </SliderFunction>
    </FunctionContext>
    </>
  );
}

export default App;
