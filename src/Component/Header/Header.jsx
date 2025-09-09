import './Header.css'
import Search from "./search.jsx";

import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../store/Modal-Slice.jsx";
import Slider from "./Slider.jsx";




export function Header(){
    const dispatch=useDispatch()
    const cartData=useSelector(store=>store.Carts.CartMeals)
    const FoodLengthAdd=cartData.length!==0 ? cartData.reduce((acc,item)=>{
        return acc + item.Selected
    },0):0;

    return(
        <div id="Crosure">
            <div id="main-header">
                <div id="title">
                    <img src="./public/logo.jpg"/>
                    <h1>FOODREACT</h1>
                    </div>
                    <div className="main-header-buttons">
                        <Search/>
                        <button onClick={()=>dispatch(ModalAction.opening("OpenOrders"))} className='yellowbutton'>Orders</button>
                        <button onClick={()=>dispatch(ModalAction.opening("add"))} className='yellowbutton'>ShopCart{cartData.length > 1 && "s"}({FoodLengthAdd})</button>
                    </div>
                </div>
                    <img src="berger.png" alt="" className="icon berger" />
                    <img src="mac.png" alt="" className="icon mac" />
                    <img src="pizza.png" alt="" className="icon pizza" />
                    <img src="taco.png" alt="" className="icon taco" />
                    <img src="hotdog.png" alt="" className="icon hotdog" />
                    <img src='douth.png' className='icon douth'/>
            
            <div className="center-header">
                    <div className="description">
                    <h1><span>Delicious</span></h1>
                    <h1>FOOD</h1>
                    <p>
                        Discover a world of delicious and diverse flavors! Transform every meal into an unforgettable experience with our fresh, high-quality dishes.
                    </p>
                   <button  className='yellowbutton about' onClick={()=>dispatch(ModalAction.opening("About"))} >About</button>
                </div>
                <Slider/>
            </div>

        </div>
    )
}