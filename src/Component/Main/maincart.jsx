import { animateScroll as scroll } from "react-scroll"
import Cart from "./Cart"
import usehttp from "../../Hook/useHttp"
import { useContext, useEffect, useRef, useState } from "react"
import { FoodContext } from "../../Context/CartContext"

let dataSearch=[]
export default function MainCart(){
    const {search}=useContext(FoodContext)
    const [emptydata,setEmptydata]=useState()
    const ref=useRef()

    const {data:dataMeals,error,isLoading:wait}=usehttp("http://localhost:3000/meals")

    const nameMeals=dataMeals.map(item=>item.name)

    const name=nameMeals.filter(item=>item.includes(search))
    
    useEffect(()=>{
      if((name.length < 1 && dataSearch.length < 1) && search){
        setEmptydata("Food not found")
      }
      else{
        setEmptydata("")
      }
  },[name,dataMeals,search])

    if(wait){
      return <p>isLoading wait!...</p>
    }
    
    if(search){
      dataSearch=name.map(item=>dataMeals.filter(data=>data.name===item)).flat(1)
      // در واقع اینجا ما با استفاده از رف فاصله دیو تا بالای صفحه را به اسکرول میدهیم به طور دقیق تر آف ست تاپ برای همین است یک عدد برمیگردونه
      scroll.scrollTo(ref.current.offsetTop,{
        duration: 2200,
        smooth:true,
      })

    }else if(!search){
      dataSearch=dataMeals
      // scroll.scrollTo(-33,{
      //   duration: 1700,
      //   smooth:true,
      // })
    }
    //console.log(name.length)
    //console.log(emptydata)
    //console.log(dataSearch.length)
  return(
        <div ref={ref} id="meals">
            <Cart data={dataSearch} error={error} emptydata={emptydata} wait={wait}/>
        </div>
    )
}