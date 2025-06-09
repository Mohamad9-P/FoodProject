import {useActionState, useContext} from "react"
import { FoodContext } from "../../Context/CartContext"
import Modal from "../UI/Modal"
import usehttp from "../../Hook/useHttp"
import Buttons from "../UI/Buttons"

const config={method:"POST",headers:{"Content-type" : "application/json"}}

export default function Form(){
    const {openModal,handelbutton,handelCloseModal,addmeals}=useContext(FoodContext)

    const {data,isLoading,error,sendHttp}=usehttp('http://localhost:3000/orders',config)
    
    const price=addmeals.reduce((acc,price)=>{
        return acc + (+price.price * price.Selected);
    },[])

    async function handelaction(state,formdata){
        const data=Object.fromEntries(formdata.entries())
        let error=[]
        console.log(formdata)
        if(!data.name.trim("")){
            error.push("Complide your Fullname")
        }
        if(!data.email.includes("@") || !data.email.trim("")){
            error.push("Your email is not True!")
        }
        if(!data.street.trim("")){
            error.push("Complide your Street!")
        }
        if(!data.postal.trim("")){
            error.push("Complide your Postal")
        }
        if(error.length > 0){
            return {error:error , defaultvalue:data}
        }
        await sendHttp(JSON.stringify({order:{
            items:addmeals,customer:data
          }}))
        handelbutton('CheckOut')
        return {error:null,isLoading}
    }
    function handelCheckOut(){
        handelaction("CheckOut")
    }
    const [action,actionstate,pending]=useActionState(handelaction,{error:null})
    //console.log(action.defaultvalue)
    let CheckOut=(
        <div className="success">
            <h1>Success!</h1>
            <p>Your order was submit successfully.</p>
            <p>We will get back to you with more details via emial within the next few minutes.</p>
            <Buttons onClick={()=>handelCloseModal(true)} className="text-button">Okey!</Buttons>
        </div>
    )
    console.log(addmeals)
    if(openModal==="CheckOut"){
        return <Modal>{CheckOut}</Modal>
    }
    return(
        <>
        {openModal==="Form" && <Modal>
            <form action={actionstate}>
                <h2>Checkout</h2>
                <h4>{price}$</h4>
                <div className="divform">
                    <label htmlFor="name">Full Name:</label>
                    <input id="name" name="name" type="text" 
                    defaultValue={action.defaultvalue?action.defaultvalue.fullname:null} />
                </div>
                <div className="divform">
                    <label htmlFor="email">E-Mail Address:</label>
                    <input id="email" name="email" type="text"
                    defaultValue={action.defaultvalue?action.defaultvalue.Email:null}/>
                </div>
                <div className="divform">
                    <label htmlFor="street">Street</label>
                    <input type="street" id="street" name="street"
                    defaultValue={action.defaultvalue?action.defaultvalue.street:null}  />
                </div>
                <div className="divform">
                    <label htmlFor="postal">Postal Code:</label>
                    <input type="postal" id="postal" name="postal"
                    defaultValue={action.defaultvalue?action.defaultvalue.postal:null} />
                </div>
                <ul className="error">
                    {action.error !==null && action.error.map(error=>{
                        return(
                            <li>{error}</li>
                        )
                    })}
                </ul>
                <div className="buttons">
                    <Buttons type="button" className="close" onClick={()=>handelCloseModal(false)} >Close</Buttons>
                    <Buttons handelbutton={handelCheckOut} className="text-button" type="submit" disabled={pending}>Submit Order</Buttons>                
                </div>

        </form>
        </Modal>
        }
        </>
    )
}