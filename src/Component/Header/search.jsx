
import { useDispatch, useSelector } from "react-redux"
import { CartAction } from "../../store/Carts-Slice.jsx"

export default function Search(){
    const dispatch=useDispatch()
    const search=useSelector(store=>store.Carts.Search)
    console.log(search)

    return(
        <>
            <input  type="search" value={search} placeholder="Search…" onChange={(event)=>dispatch(CartAction.handelSearch(event.target.value))}/>
        </>
    )
}