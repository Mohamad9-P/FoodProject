import { useContext } from "react";
import Modal from "../UI/Modal";
import { FoodContext } from "../../Context/CartContext";
import EmptyOrders from "./EmptyOrders";
import Buttons from "../UI/Buttons";
import OrdersC from "./Orders";
import usehttp from "../../Hook/useHttp";

const config={}

export default function Orders(){
    const {openModal,Orders,handelCloseModal}=useContext(FoodContext)
    const {data,error,isLoading}=usehttp("http://localhost:3000/Orders",config)

    return(
        <>
        {openModal==="addOrders" && 
            <Modal>
                <div className="Orders">
                    <div className="h1Orders">
                        <h1>Orders!</h1>   
                        <img src="../public/car.png"/>
                    </div>
                    {(!Orders && data.length===0) && <EmptyOrders/> }
                    {(Orders || data.length!==0) && <OrdersC data={data}/>}
                    <Buttons onClick={()=>handelCloseModal(false)} className="close">Close</Buttons>
                </div>
            </Modal>
        }
        </>
    )
}