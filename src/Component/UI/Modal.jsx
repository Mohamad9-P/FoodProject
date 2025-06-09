import { useContext, useEffect, useRef } from "react";
import { FoodContext } from "../../Context/CartContext";

export default function Modal({children,openModal,close}){
    const {openModal:open}=useContext(FoodContext)
    const dialog=useRef()
    console.log(open)
    useEffect(()=>{
        if(open){
            dialog.current.showModal()
        }else if(!open){
            dialog.current.close()
        }
    },[open])
    return(
        <dialog ref={dialog} className="modal">
            {children}
        </dialog>
    )
}