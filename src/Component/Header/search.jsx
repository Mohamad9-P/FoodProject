import { useContext} from "react"
import { FoodContext } from "../../Context/CartContext"

export default function Search(){
    const {search,handelsearch}=useContext(FoodContext)
    //console.log(array.filter(item=>item.includes(search)))
    //console.log(search)
    return(
        <>
            <input  type="search" value={search} placeholder="Search…" onChange={(event)=>handelsearch(event)}/>
        </>
    )
}