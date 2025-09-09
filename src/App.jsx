
import AddRemove from "./Component/Header/AddRemove";
import { Header } from "./Component/Header/Header";
import MainCart from "./Component/Main/maincart";
import Form from "./Component/Header/form";
import Success from "./Component/Header/Success";
import Orders from "./Component/Header/Orders";
import About from "./Component/Header/About";

function App() {
  return (
    <>
        <Header></Header>
        <MainCart/>
        <AddRemove/>
        <Form/>
        <Orders/>
        <About/>
        <Success/>
        {/* <Game/> */}
    </>
  );
}

export default App;
