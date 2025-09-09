import Modal from "../UI/Modal";
import EmptyOrders from "./EmptyOrders";
import Buttons from "../UI/Buttons";

import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../store/Modal-Slice";
import FullOrders from "./FullOrders";

const config={}

export default function Orders(){
    
    const ModalStatus=useSelector(store=>store.Modal.modalStatus)
    const CartOrders=useSelector(store=>store.Carts.CartOrders)

    const dispatch=useDispatch()
    return(
        <>
        {ModalStatus==="OpenOrders" && 
            <Modal>
                <div className="Orders">
                    <div className="h1Orders">
                        <h1>Orders!</h1>   
                        <img src="../public/car.png"/>
                    </div>
                    {(CartOrders && CartOrders.length===0) && <EmptyOrders/> }
                    {(CartOrders || CartOrders.length > 0) && <FullOrders data={CartOrders.flat(1)}/>}
                    <Buttons onClick={()=>dispatch(ModalAction.closing())} className="close">Close</Buttons>
                </div>
            </Modal>
        }
        </>
    )
}