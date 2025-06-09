import {createContext, useState } from "react";

export const FoodContext=createContext({
    addModal:[0],
})
export function FunctionContext({children}){
    const [addmeals,setAddMeals]=useState([])
    const [search,setSearch]=useState()
    const [openModal,setopenModal]=useState(false)
    const [Orders,setOrders]=useState()
    
      function handelAddMeals(choice){
        setAddMeals(prev=>{
          let updating=[...prev]
          const index=updating.findIndex((item)=>item.id===choice.id)
          //console.log(index)
          if(index!==-1){
            let update={
              ...choice,
              Selected:updating[index].Selected+1
            }
            updating[index]=update
          }if(index===-1){
            updating=[...updating,choice]
          }
          //console.log(updating)
          return updating
        })
      }
      function handelAdd(choice,POrR){
        setAddMeals(prev=>{
          let update=[...prev]
          const index=update.findIndex((item)=>item.id===choice.id)
          if(POrR==="+"){
            update[index]={...choice,Selected:update[index].Selected+1}
            return update
          }else if(POrR==="-"){
            update[index]={...choice,Selected:update[index].Selected-1}
            if(update[index].Selected===0){
              update=update.filter(item=>item.id!==choice.id)
            }
            return update
          }
    
        })
      }
      function handelbutton(action){
        setopenModal(action)
      }
      function handelCloseModal(orders){
        setopenModal(false)
        if (orders){
          setOrders(addmeals)
          setAddMeals([])
        }
      }
      function handelsearch(event){
        setSearch(event.target.value)
    }
      //console.log(Orders)
      const contextValue={
        addmeals:addmeals,
        Orders,
        setSearch,
        search,
        openModal:openModal,
        setAddMeals,
        setopenModal,
        handelAdd:handelAdd,
        handelAddMeals:handelAddMeals,
        handelCloseModal:handelCloseModal,
        handelbutton:handelbutton,
        handelsearch,
      }
      return  <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
      

}