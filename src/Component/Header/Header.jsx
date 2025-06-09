import { useContext } from "react"
import { FoodContext } from "../../Context/CartContext.jsx"
import Search from "./search.jsx";
import { SliderContext } from "../../Context/Slider.jsx";
import { data } from "../../data.js";


export function Header(){
    const {handelbutton,addmeals}=useContext(FoodContext)
    const {slice,handelNext,hadnelPrev}=useContext(SliderContext)
    const FoodLengthAdd=addmeals.length!==0 ? addmeals.reduce((acc,item)=>{
        return acc + item.Selected
    },0):0;
    return(
        <div id="Crosure">
            <div className="slider" key={slice}>
               <img className="image" src={data[slice].image}/>
            </div>
            <div id="main-header">
                <div id="title">
                    <img src="./public/logo.jpg"/>
                    <h1>FOODREACT</h1>
                    </div>
                    <div className="main-header-buttons">
                        <Search/>
                        <button onClick={()=>handelbutton("addOrders")}>Orders</button>
                        <button onClick={()=>handelbutton("add")}>Cart{addmeals.length > 1 && "s"}({FoodLengthAdd})</button>
                        {/* <button onClick={()=>handelbutton("game")}>Game</button> */}
                    </div>
                </div>
            <div className="description">
                <h1>W e l c o m e</h1>
                <p>
                    Granny is a restaurant, bar and coffee roastery located on Egyp. We have awesome recipes and the most talented chafs in town!
                </p>
                <div className="NextOrPrev">
                    <button onClick={()=>hadnelPrev()} className="prevB"><img src="./public/next.png" alt="" /></button>
                    <button onClick={()=>handelNext()}><img src="./public/next.png" alt="hello" /></button>
                    
                </div>
            </div>

        </div>
    )
}