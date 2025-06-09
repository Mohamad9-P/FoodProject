
import { useContext } from "react"
import { FoodContext } from "../../Context/CartContext.jsx"
import Modal from "../UI/Modal.jsx";
import Buttons from "../UI/Buttons.jsx";
export default function AddRemove(){
    const {addmeals:data,handelAdd,openModal,handelCloseModal,handelbutton} = useContext(FoodContext);
    const price=data.reduce((acc,item)=> {return acc + (+item.price * item.Selected)},0)
    //console.log(openModal)
    return(
        <>
        {openModal==="add"&&<Modal>
            <ul >
            <h2>Your Cart</h2>
            {data.map(item=>{
                return(
                    <li key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <div className="cart-item-actions">
                            <button onClick={()=>handelAdd(item,"+")}>+</button>
                            <p>{item.Selected}</p>
                            <button onClick={()=>handelAdd(item,"-")}>-</button>
                           
                        </div>
                       
                    </li>
                )
            })}
             <h3 className="price">{price.toFixed(2)}$</h3>
             <div className="buttons">
                <Buttons onClick={()=>handelCloseModal(false)} className="close">Close</Buttons>
                {data.length>0 && <Buttons className="text-button" onClick={()=>handelbutton("Form")} type="seubmit">Go To Checkout</Buttons>}
             </div>
        </ul>
        </Modal>}
        </>


    )
}